import React from 'react';
import MGrid from './components/MGrid/MGrid';
import './App.css';

import { machine } from './components/Machine';

const socket = new WebSocket('ws://localhost:8080/ws');
socket.addEventListener('open', (e) => {
  console.log('WS connected!');
});
socket.addEventListener('close', () => {
  console.log('Websocket connection closed, refreshing page.')
});

interface f {
  [inv: string]: machine
}

export default function App() {
  const [ms, setMachines] = React.useState({"s": {Uptime: "", Hostname: "", IP: "", OS: "", On: "1", Ident: ""} as machine} as f);

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
        setMachines(
          (prev: f) => {
            return Object.assign(prev, {[data.Data.Ident]: data.Data.on}) as f} 
        );
        break;

      case 'UPDATE_MACHINE':
        setMachines(
          (prev: f) => {
            return Object.assign(prev, {[data.Data.Ident]: data.Data.on}) as f} 
        );
        break;

      default:
        break;
      }
  });

  console.log("HI")
  console.log(ms)
  console.log("IH")

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
          <MGrid inv={ms}/>
      </header>
    </div>
  );
}

