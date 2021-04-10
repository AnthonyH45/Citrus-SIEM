run:
	go run main.go

build:
	cd frontend && yarn build && cp -r build/* ../backend/static
