run:
	go run main.go

build:
	cd frontend && yarn build && cp -r build/* ../backend/static

fmt:
	go fmt ./backend/http_serv.go ./backend/socket.go ./backend/structs.go
	go fmt ./main.go