import React, { Component, useState } from 'react';
import image from './assets/img/Logotipo-Vertical-Verde-Alta.png'
import './App.scss';
import Form from './components/Form';
import SignUpInfo from "./components/SignUpInfo";
import SuccessfulRegistration from "./components/SuccessfulRegistration";

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
function setIsChecked(arg0: boolean) {
    throw new Error('Function not implemented.');
}

