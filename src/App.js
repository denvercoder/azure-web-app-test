import React from 'react';
// import logo from './logo.svg';
import './App.css';


const logo = "https://www.youtube.com/watch?v=953PkxFNiko"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Azure Static Web Apps Are C00l!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
