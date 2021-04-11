import React from 'react';
import MGrid from './components/MGrid'
import './App.css';

const socket = new WebSocket('ws://localhost:8080/ws');

socket.addEventListener('open', (e) => {
  console.log('WS connected!');
});

socket.addEventListener('close', () => {
  console.log('Websocket connection closed, refreshing page.')
  // location.reload();
});

let callbackFunc;

socket.addEventListener('message', (e) => {
  callbackFunc.call(e);
})

function App() { //networks) {
  const [machines, setMachines] = React.useState({});

  /*
  const state = {
    machines: {}
  };
  */

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
        <MGrid machines={machines}/>
      </header>
    </div>
  );
}

export default App;
