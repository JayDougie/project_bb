import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './panther.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*<img src="http://awildidea-movie.com/wp-content/uploads/2018/02/marvel-black-panther-logo.jpg" alt="panther"/>*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <img src={logo} alt="logo" />
          <h1 className="App-title">Wakanda</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            Yaasdfdsaasdf
        </p>
      </div>
    );
  }
}

export default App;
