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

// function useForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => value + 1); // update the state to force render
// }

export default function App() { //networks) {
  const [ms, setMachines] = React.useState([{
    Uptime: "Uptime",
    Hostname: "Hostname",
    IP: "IP",
    OS: "OS",
    On: "1",
    Ident: "id"
  } as machine]);
  
  React.useEffect(() => {
    setMachines(() => Object.values({}));
  }, []);

  const updateMachine = (mInfo: machine) => {
    setMachines((prev: any) => { // supposed to be `: machine[]`
      if (prev === undefined) prev = [];

        for (let i = 0; i < prev.length; i++) {
          if (prev[i].Ident === mInfo.Ident) {
             prev[i] = mInfo;
             return prev;
          }
        }
        prev.push(mInfo);
        console.log("Adding to array")
        console.log(prev)
        return prev;
    });
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
        setMachines(() => Object.values(data.Data));
        // useForceUpdate();
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

