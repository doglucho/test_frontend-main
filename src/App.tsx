import React, { Component, useState } from 'react';
import './App.scss';

class App extends Component {
    checked?: boolean;

    
  render() {
    
    
    return (
      <div className="app">
        <main className="app-content">
            <div className="wizard"></div>
        </main>
      </div>
    )
  }
}

export default App;
