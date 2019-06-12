import React, { Component } from 'react';
import logo from './logo.svg';
import PostForm from './Components/Postform';
import Post from './Components/Post';
import { Provider } from 'react-redux';
import './App.css';
import store from './Components/store';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
      <PostForm />
      <Post />
     
    </div>
    </Provider>
  );
}
}

export default App;
