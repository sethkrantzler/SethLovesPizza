import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import HomePage from './containers/HomePage/HomePage';
import {testGetReviewsResponse} from './testReview.ts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
