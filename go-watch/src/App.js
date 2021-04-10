import React from 'react';
import MGrid from './components/MGrid'
import './App.css';

function App() { //networks) {
//   const networks = `
// {
//   "LAN-1": {
//     "1": {
//       "Machine Name": "test1",
//       "IP": "1.1.1.1",
//       "OS": "lunix",
//       "Services": ["nginx", "mysql"]
//     }
//   }
// }`
// {/* {[networks.length].map((value) => (
//   <div>
//     <h1>{value} NETWORK</h1>
//       <MGrid/>
//   </div>
// ))} */}

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
        <MGrid/>
      </header>
    </div>
  );
}

export default App;
