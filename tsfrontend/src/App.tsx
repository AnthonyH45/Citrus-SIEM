import React from 'react';
import MGrid from './components/MGrid/MGrid'
import './App.css';

import { machine } from './components/Machine';

const socket = new WebSocket('ws://localhost:8080/ws');

socket.addEventListener('open', (e) => {
  console.log('WS connected!');
});

socket.addEventListener('close', () => {
  console.log('Websocket connection closed, refreshing page.')
});

export default function App() { //networks) {
  const [ms, setMachines] = React.useState([{
    Uptime: "Uptime",
    Hostname: "Hostname",
    IP: "IP",
    OS: "OS",
    Services: ["Services?"]
  } as machine]);

  socket.addEventListener('open', (e) => {
      console.log('WS connected!');
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

      case 'CURR_MACHINES':
        setMachines(() => data.Data);
        break;

      case 'UPDATE_MACHINE':
        setMachines((prev) => prev[data.Data.Ident] = data.Data);
        break;

      default:
        break;
      }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
        <MGrid inv={ms} key="MGrid"/>
      </header>
    </div>
  );
}

