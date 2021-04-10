import React from 'react';
import MGrid from './components/MGrid'
import './App.css';

function App() { //networks) {
  const mmm = JSON.parse(`
  [{
      "Name": "test1",
      "IP": "1.1.1.1",
      "OS": "lunix",
      "Network": "LAN-1",
      "Services": ["nginx", "mysql"]
  },
  {
      "Name": "test2",
      "IP": "1.1.1.1",
      "OS": "Windows",
      "Network": "LAN-1",
      "Services": ["apache", "docker"]
  },
  {
      "Name": "test3",
      "IP": ".50",
      "OS": "lunix",
      "Network": "LAN-1",
      "Services": ["BoatAPI", "Git"]
  }
]`)

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAN-1</h1>
        <MGrid machines={mmm}/>
      </header>
    </div>
  );
}

export default App;
