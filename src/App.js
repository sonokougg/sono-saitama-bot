import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-input">
          <input type="text" className="input"/>
          <button type="submit" className="send">
            send
          </button>
        </div>
      </div>
    );
  }
}

export default App;
