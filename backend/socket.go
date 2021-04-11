package backend

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

// map of clients: last_message_time
var clients map[*websocket.Conn]time.Time = make(map[*websocket.Conn]time.Time)
var machines map[string]HostData = make(map[string]HostData)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func WSEndpoint(rw http.ResponseWriter, r *http.Request) {
	// upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	conn, err := upgrader.Upgrade(rw, r, nil)
	if err != nil {
		log.Println("Error creating WS:", err)
		return
	}

	log.Println("Client connected!")
	clients[conn] = time.Now()
	wsReader(conn)
}

func CleanupClients() {
	const timeout float64 = 1 // minutes

	for {
		for conn, lastTime := range clients {
			if time.Since(lastTime).Minutes() >= timeout {
				log.Println("Closing client due to inactivity.")
				conn.Close()
				delete(clients, conn)
			} else if time.Since(lastTime).Minutes() >= timeout/2 {
				conn.WriteJSON(Message{
					"PING",
					nil,
				})
			}
		}
		time.Sleep((time.Duration(timeout) * time.Minute) / 2)
	}
}

func WatchMachinesForInactivity() {
	const timeout float64 = 5 // seconds

	for {
		for _, data := range machines {
			if data.On == "1" && time.Since(data.Updated).Seconds() >= timeout {
				data.On = "0"
				broadcast(Message{
					"UPDATE_MACHINE",
					data,
				})
			}
		}

		time.Sleep((time.Duration(timeout) * time.Second) / 2)
	}
}

// spaghetti below

func wsReader(conn *websocket.Conn) {
	// TODO: send client initial information
	conn.WriteJSON(Message{
		"CURR_MACHINES",
		machines,
	})

	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			if websocket.IsCloseError(err, 1001) || strings.Contains(err.Error(), "use of closed network") { // going away || we closed the connection (timeout)
				log.Println("Client disconnected.")
			} else {
				log.Println("Error while reading from WS:", err)
			}
			return
		}

		switch messageType {
		case websocket.BinaryMessage:
			// wtf?
		case websocket.TextMessage:
			var data map[string]interface{}
			err := json.Unmarshal(p, &data)
			if err != nil {
				log.Println("Error while deserializing JSON:", err)
				continue
			}

			handleMessage(conn, data)
		}
	}
}

func handleMessage(conn *websocket.Conn, message map[string]interface{}) {
	log.Println(fmt.Sprintf(">> [%s] %s", conn.RemoteAddr().String(), message))
	clients[conn] = time.Now()

	var err error
	switch message["type"] {
	case "PING":
		err = conn.WriteJSON(Message{
			"PONG",
			nil,
		})
	}

	if err != nil {
		log.Println("Err while sending JSON to client:", err)
	}
}

func broadcast(msg Message) {
	for conn := range clients {
		conn.WriteJSON(msg)
	}
}
