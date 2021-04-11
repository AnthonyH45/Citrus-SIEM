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

export default function App() { //networks) {
  const [ms, setMachines] = React.useState(new Map<string,machine>());

  const updateMachine = (mInfo: machine) => {
    ms.set(mInfo.Ident,mInfo);
    setMachines(ms);
  }

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
        setMachines(ms);
        break;

      case 'UPDATE_MACHINE':
        updateMachine(data.Data);
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
          <MGrid inv={ms} key="MGrid"/>
      </header>
    </div>
  );
}

