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
  // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
//   const getMachineInfo = async () => {
//     await fetch("https://javascript_worker.ahall012.workers.dev/links", {
//     "headers": {
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-GPC": "1",
//         "Cache-Control": "max-age=0",
//     },
//     "method": "GET",
//   });
// }
  const url = 'https://a-weeb.site/api/proxy_cors?url=https://jsonrequest.anthonyhallak.repl.co/';
  const getMachineInfo = async () => {
    await fetch(url)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log("CANNOT GET MACHINE INFO!"+response.status);
            return;
          }
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(
        function(err) {
          console.log('Fetch Error :::', err);
        }
      );
  }

  const ms = getMachineInfo();

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
