package backend

type Message struct {
	OP   string
	Data interface{}
}

type RunningServicesData struct {
	services []string
}

type HostData struct {
	Hostname string
	Uptime   string
	IP       string
	OS       string
	Release  string
	Packages int

	Ident string // {Hostname}@{IP}
}
