import React, { Component } from 'react';
import '../styles/App.css';
import apiKey from './apiKey'


const API_KEY = apiKey
console.log(API_KEY);

class App extends Component {
  render() {
    return (
      <div className="App">
      hello world
      </div>
    );
  }
}

export default App;
