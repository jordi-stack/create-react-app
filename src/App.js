import logo from './logo.gif';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="string">
          <p className="greeting en">P<span style={{color: 'white'}}>r</span>obe Orbiter Cosmos Ecosystem</p> 
        </div>
        <div className="link-container">
          <a
            className="App-link"
            href="https://blog.probeorbiter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            className="App-link"
            href="https://exp.probeorbiter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorer
          </a>
          <a
            className="App-link"
            href="https://galaxie.co/p/jordi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;


const desktopModeToggle = document.getElementById('desktop-mode-toggle');
desktopModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('desktop-mode');
});
