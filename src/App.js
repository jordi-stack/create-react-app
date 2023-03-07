import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cosmos Ecosystem
        </p>
        <a
          className="App-link"
          href="https://explorer.jordi-stack.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorer
        </a>
      </header>
    </div>
  );
}

export default App;
