import logo from './logo.gif';
import './App.css';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      toast.warning('Using desktop mode for better experience', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Probe Orbiter Cosmos Ecosystem
        </p>
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
