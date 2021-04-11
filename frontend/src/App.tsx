import React from 'react';
import MGrid from './components/MGrid/MGrid';
import './App.css';

import Machine, { machine } from './components/Machine';

export default function App() { //networks) {
  const [ms, setMachines] = React.useState(new Map<string, machine>());
  
  const socket = new WebSocket('ws://jasonthel.in:8080/ws'); // hehe

  React.useEffect(() => {
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
            return new Map<string, machine>(prev); // what the f***?
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
          <MGrid key="MGrid" inv={ms} />
      </header>
    </div>
  );
}