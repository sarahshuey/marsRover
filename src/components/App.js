import React, { Component } from 'react';
import '../styles/App.css';
import apiKey from './apiKey'
import GetImageForm from '../components/GetImageForm'

const API_KEY = apiKey
console.log(API_KEY);

class App extends Component {
  render() {
    return (
      <div className="App">
      <GetImageForm/>
      </div>
    );
  }
}

export default App;
