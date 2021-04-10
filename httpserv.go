package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"text/template"
)

// https://golang.org/pkg/net/http/
// https://gobyexample.com/http-servers

var templates = template.Must(template.ParseFiles("./templates/main.html"))

func slash(w http.ResponseWriter, req *http.Request) {
	// machines := `
	// 	[
	// 		{ "1":
	// 			{
	// 				"ip":"1.1.1.1",
	// 				"hostname":"test",
	// 				"services":
	// 					[
	// 						"1",
	// 						"2",
	// 						"3"
	// 					]
	// 			}
	// 		}
	// 	]`
	const machines = `
		{"Number": "1",
		"Ip":"1.1.1.1",
		"Hostname":"test"}
		`

	// type dStruc
	type M struct {
		Number, Ip, Hostname string
		List                 []M
	}

	dec := json.NewDecoder(strings.NewReader(machines))
	// decErr := dec.Decode(&m)

	// if decErr != nil {
	// 	fmt.Println("cannot decode")
	// 	http.Error(w, decErr.Error(), http.StatusInternalServerError)
	// }
	var m M
	for {
		if err := dec.Decode(&m); err == io.EOF {
			break
		} else if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Number: %s\nip: %s\nhostname: %s\n", m.Number, m.Ip, m.Hostname)
	}

	m.List = []M{*new(M)}
	m.List[0].Number = m.Number
	m.List[0].Ip = m.Ip
	m.List[0].Hostname = m.Hostname
	fmt.Println(m.List)

	exeTempErr := templates.ExecuteTemplate(w, "main.html", m)

	if exeTempErr != nil {
		fmt.Println("cannot template")
		http.Error(w, exeTempErr.Error(), http.StatusInternalServerError)
	}
}

func main() {
	http.HandleFunc("/", slash)

	log.Fatal(http.ListenAndServe(":8080", nil))
	// const machines = `
	// 	{"a": "aa",
	// 	"b":"bb",
	// 	"c":"cc"}
	// 	`
	// type M struct {
	// 	a, b, c string
	// }
	// fmt.Println(machines)
	// dec := json.NewDecoder(strings.NewReader(machines))
	// for {
	// 	var m M
	// 	if err := dec.Decode(&m); err == io.EOF {
	// 		break
	// 	} else if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	fmt.Printf("Number: %s\nip: %s\nhostname: %s\n", m.a, m.b, m.c)
	// }
	// 	const jsonStream = `
	// 	{"Aa": "Ed", "Bb": "Knock knock."}
	// 	{"Aa": "Sam", "Bb": "Who's there?"}
	// 	{"Aa": "Ed", "Bb": "Go fmt."}
	// 	{"Aa": "Sam", "Bb": "Go fmt who?"}
	// 	{"Aa": "Ed", "Bb": "Go fmt yourself!"}
	// `
	// 	type Message struct {
	// 		Aa, Bb string
	// 	}
	// 	dec := json.NewDecoder(strings.NewReader(jsonStream))
	// 	for {
	// 		var m Message
	// 		if err := dec.Decode(&m); err == io.EOF {
	// 			break
	// 		} else if err != nil {
	// 			log.Fatal(err)
	// 		}
	// 		fmt.Printf("%s: %s\n", m.Aa, m.Bb)
	// 	}
}
