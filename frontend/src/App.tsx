import React from 'react';
import MGrid from './components/MGrid/MGrid';
import './App.css';

import { machine } from './components/Machine';

export default function App() {
  const [ms, setMachines] = React.useState(new Map<string, machine>());
  
  React.useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');

    socket.addEventListener('open', (e) => {
      console.log('WS connected!');
    });

    socket.addEventListener('close', () => {
      console.log('Websocket connection closed, refreshing page.')
    });
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
          setMachines(() => new Map<string, machine>(Object.entries(data.Data)));
          break;

        case 'UPDATE_MACHINE':
          setMachines((prev) => {
            const mInfo: machine = data.Data;

            prev.set(mInfo.Ident, mInfo);
            return new Map<string, machine>(prev);
          });
          break;

        default:
          break;
        }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
          <MGrid key="MGrid" invP={ms} invS={ms}/>
      </header>
    </div>
  );
}