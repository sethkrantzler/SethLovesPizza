import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import HomePage from './containers/HomePage/HomePage';

class App extends Component {

  render():JSX.Element {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
