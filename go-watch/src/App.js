import React from 'react';
import Machines from './components/Machines'
import './App.css';

function App(machines) {
  return (
    <div className="App">
      <header className="App-header">
          <Machines machines={machines}/>
      </header>
    </div>
  );
}

export default App;
