import React, { Component } from 'react';
import './App.css';
import ExecPanel from './exec/Exec';

class App extends Component {

  render() {
    return (
      <div className="App">
          <ExecPanel />
      </div>
    );
  }
}

export default App;
