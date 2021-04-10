package backend

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/endpoint", recvdata)
	http.HandleFunc("/", SimpleServer)
	http.ListenAndServe(":8000", nil)
}

func SimpleServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s is not valid. All data must be sent as a post request to /endpoint", r.URL.Path)
}

type Host_Data struct {
	Hostname string
	Uptime   string
	IP       string
	OS       string
	Release  string
	Packages int
}

func fill_defaults(std *Host_Data) {

	// setting default values
	// if no values present
	if std.Hostname == "" {
		std.Hostname = "Unknown"
	}

	if std.Uptime == "" {
		std.Uptime = "Undefined"
	}

	if std.IP == "" {
		std.IP = "Unkwown"
	}

	if std.OS == "" {
		std.OS = "Unkwown"
	}

	if std.Release == "" {
		std.Release = "Unkwown"
	}

	if std.Packages == 0 {
		std.Packages = -1
	}
}

func recvdata(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprint(w, "Only Post Requests Accepted")
	case "POST":
		//create data struct variable
		var d Host_Data

		//make sure we get what we wanted from the incoming data
		err := json.NewDecoder(r.Body).Decode(&d)
		if err != nil {
			fmt.Println("hello world")
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		//set default post values
		fill_defaults(&d)

		//resend post data for debugging purposes
		fmt.Fprintf(w, "Post from wbesite! PC_DATA = %v\n", d)
		fmt.Fprintf(w, "Hostname: %s\n", d.Hostname)
		fmt.Fprintf(w, "Uptime: %s\n", d.Uptime)
		fmt.Fprintf(w, "IPs: %s\n", d.IP)
		fmt.Fprintf(w, "OS: %s\n", d.OS)
		fmt.Fprintf(w, "Release: %s\n", d.Release)
		fmt.Fprintf(w, "Packages: %d\n", d.Packages)

	default:
		fmt.Fprintf(w, "Sorry, only GET and POST are supported.")
	}
}
