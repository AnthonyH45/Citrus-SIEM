package main

import (
	"log"
	"net/http"

	"github.com/AnthonyH45/go-watch/backend"
)

func main() {
	http.HandleFunc("/ws", backend.WSEndpoint)
	http.HandleFunc("/endpoint", backend.RecvData)
	http.HandleFunc("/recvListeningPorts", backend.RecvListeningPorts)
	http.Handle("/", http.FileServer(http.Dir("./backend/static")))

	go backend.CleanupClients()
	go backend.WatchMachinesForInactivity()

	log.Fatal(http.ListenAndServe("0.0.0.0:8080", nil))
}
