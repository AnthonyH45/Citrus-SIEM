class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mmm: JSON.parse(`[{
                "Name": "test1",
                "IP": "1.1.1.1",
                "OS": "lunix",
                "Network": "LAN-1",
                "Services": ["nginx", "mysql"]
            },
            {
                "Name": "test2",
                "IP": "1.1.1.1",
                "OS": "Windows",
                "Network": "LAN-1",
                "Services": ["apache", "docker"]
            },
            {
                "Name": "test3",
                "IP": ".50",
                "OS": "lunix",
                "Network": "LAN-1",
                "Services": ["BoatAPI", "Git"]
            }
          ]`)
        }

        const socket = new WebSocket('ws://localhost:8080/ws');

        socket.addEventListener('open', (e) => {
            console.log('WS connected!');

            socket.send(JSON.stringify({
                type: 'ping',
                data: {
                    nested: 'object'
                },
            }));
        });

        socket.addEventListener('close', () => {
            alert('Websocket connection closed, refreshing page.')
            location.reload();
        });

        socket.addEventListener('message', (e) => {
            console.log(`Received: ${e.data}`);

            const data = JSON.parse(e.data);
            switch (data.OP) {
                case 'PING':
                    socket.send(JSON.stringify({
                        type: 'PONG'
                    }));
                    break;
            }
        });
    }

    render() {
        return (
            <header className="App-header">
                <h1>LAN-1</h1>
                <MGrid machines={this.state.mmm} />
            </header>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));