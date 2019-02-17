import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import ReviewCard from './components/ReviewCard';
import {testReview} from './testReview.ts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReviewCard reviewInfo={testReview}/>
      </div>
    );
  }
}

export default App;
