package backend

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/ws", wsEndpoint)
	http.HandleFunc("/endpoint", recvdata)
	http.HandleFunc("/recvListeningPorts", recvListeningPorts)
	http.Handle("/", http.FileServer(http.Dir("./static")))

	go cleanupClients()

	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}
