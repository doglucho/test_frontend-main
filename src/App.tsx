import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './App.scss';

class App extends Component {
    checked?: boolean;
    
  // function App() {
  //   const [data, setData] = React.useState(null);
    
  //   React.useEffect(() => {
  //     fetch("/api")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.message));
  //   }, [])
  // }

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
