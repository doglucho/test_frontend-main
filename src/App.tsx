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
            <div className="wizard">
                    <p className='test'>Whell Hub Test Frontend =S</p>
                    <img className="logo" src={ image } alt="logo"/>
                    <input className="checkbox" type="checkbox" checked={this.checked} name="privacy"/>
                    Para continuar, acepta los términos y condiciones con respecto a la protección y uso de tus datos
                    <button className="next1">Next</button>
            </div>
        </main>
      </div>
    )
  }
}

export default App;
