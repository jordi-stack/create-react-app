import logo from './logo.gif';
import './App.css';


function App() {
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

