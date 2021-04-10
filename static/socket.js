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

socket.addEventListener('close', () => {
    alert('Websocket connection closed, refreshing page.')
    location.reload();
});