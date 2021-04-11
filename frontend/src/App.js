import React from 'react';
import MGrid from './components/MGrid'
import './App.css';

function App() { //networks) {
  // const [machines, setMachines] = React.setState({});

  const state = {
    machines: {}
  };

  const socket = new WebSocket('ws://localhost:8080/ws');
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
            state.machines = data.Data;
              break;
          case 'UPDATE_MACHINE':
            state.machines[data.Data.Ident] = data.Data;
              break;
          default:
            break;
      }
  });

  socket.addEventListener('close', () => {
      alert('Websocket connection closed, refreshing page.')
      // location.reload();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
        <MGrid machines={state.machines}/>
      </header>
    </div>
  );
}

export default App;
