import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './Components/Post';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
      <Post />
    </div>
  );
}
}

export default App;
