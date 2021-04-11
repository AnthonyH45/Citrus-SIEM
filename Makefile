run:
	go run main.go

build:
	cd frontend && yarn build

fmt:
	go fmt ./main.go