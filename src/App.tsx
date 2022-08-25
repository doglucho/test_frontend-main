import React, { Component, useState } from 'react';
import image from './assets/img/Logotipo-Vertical-Verde-Alta.png'
import './App.scss';

class App extends Component {
  checked?: boolean;
  render() {
    return (
      <div className="app">
        <main className="app-content">
            <div className="wizard">
                <form>
                    <p className='test'>Whell Hub Test Frontend =S</p>
                    <img className="logo" src={image} alt="logo"/>
                    <input className="checkbox" type="checkbox" checked={this.checked} name="privacy"/>
                    Para continuar, acepta los términos y condiciones con respecto a la protección y uso de tus datos
                    <button className="next1" disabled>Next</button>
                </form>
            </div>
        </main>
      </div>
    )
  }
}

export default App;
