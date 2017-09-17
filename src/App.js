import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocket from 'ws';

const ws = new WebSocket('http://127.0.0.1:8080')

ws.on('open', function open() {
  ws.send('something');
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={ws.send('open')}></button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
