package backend

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func fill_defaults(std *HostData) {
	// setting default values
	// if no values present
	if std.Hostname == "" {
		std.Hostname = "Unknown"
	}

	if std.Uptime == "" {
		std.Uptime = "Undefined"
	}

	if std.IP == "" {
		std.IP = "Unknown"
	}

	if std.OS == "" {
		std.OS = "Unknown"
	}

	if std.Release == "" {
		std.Release = "Unknown"
	}

	if std.Packages == 0 {
		std.Packages = -1
	}

	if std.On == "" {
		std.On = "1"
	}

}

func rejectReq(w http.ResponseWriter, r *http.Request) bool {
	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Fprintf(w, "Only POST requests are allowed.")
		return true
	}

	return false
}

func RecvData(w http.ResponseWriter, r *http.Request) {
	if rejectReq(w, r) {
		return
	}

	//create data struct variable
	var d HostData

	//make sure we get what we wanted from the incoming data
	err := json.NewDecoder(r.Body).Decode(&d)
	if err != nil {
		w.WriteHeader(400)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	//set default post values
	fill_defaults(&d)

	d.IP = r.RemoteAddr[:strings.LastIndex(r.RemoteAddr, ":")]
	d.Ident = d.Hostname + "@" + d.IP
	machines[d.Ident] = d

	broadcast(Message{
		"UPDATE_MACHINE",
		d,
	})

	//resend post data for debugging purposes
	fmt.Fprintf(w, "Post from wbesite! PC_DATA = %v\n", d)
	fmt.Fprintf(w, "Hostname: %s\n", d.Hostname)
	fmt.Fprintf(w, "Uptime: %s\n", d.Uptime)
	fmt.Fprintf(w, "IPs: %s\n", d.IP)
	fmt.Fprintf(w, "OS: %s\n", d.OS)
	fmt.Fprintf(w, "Release: %s\n", d.Release)
	fmt.Fprintf(w, "Packages: %d\n", d.Packages)
	fmt.Fprintf(w, "On?: %s\n", d.On)
}

func RecvListeningPorts(w http.ResponseWriter, r *http.Request) {
	if rejectReq(w, r) {
		return
	}

	bodyBytes, _ := ioutil.ReadAll(r.Body)
	body := string(bodyBytes)

	srv_idnty := strings.Split(body, "\n")[0]

	switch srv_idnty {
	case "Active Internet connections (only servers)":
		fields := strings.Split(body, "\n")

		var ActiveConnArr []ActiveConn

		fields = append(fields[2:])
		for _, field := range fields[:] {
			var tmp ActiveConn
			data := strings.Fields(field)
			tmp.ProgName = data[6]
			tmp.ForAddr = data[4]
			tmp.LocalAddr = data[3]
			tmp.ConnType = data[0] + ":" + data[5]
			ActiveConnArr = append(ActiveConnArr, tmp)
		}

		fmt.Println(ActiveConnArr)
	default:
		fmt.Println("Data Not Recognized")

	}

	// fmt.Println(body)

	//for 0 -> 14, it is garbage
	//arr := strings.Split(body, "\n")

	// if arr[0] == "Active" && arr[1] == "Internet" {
	// 	fmt.Println("Netstat Detected")
	// 	index := 0
	// 	for _, field := range fields[:] {
	// 		if(index>14) {

	// 		}
	// 	}
	// }
}
