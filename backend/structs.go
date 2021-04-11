package backend

import (
	"time"
)

type Message struct {
	OP   string
	Data interface{}
}

// type RunningServicesData struct {
// 	services []string
// }

type HostData struct {
	Hostname string
	Uptime   string
	IP       string
	OS       string
	Release  string
	Packages int
	On       string

	Ident   string // {Hostname}@{IP}
	Updated time.Time
}

type ActiveConn struct {
	LocalAddr string
	ForAddr   string
	ProgName  string
	ConnType  string
}
