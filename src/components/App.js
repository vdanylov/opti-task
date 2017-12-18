import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import StoriesContainer from './components/StoriesContainer'
import { Grid, Cell } from 'react-mdl'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{width: '80%', margin: 'auto'}}>
          <ReactHeader />
        </div>
      </Provider>    
    );
  }
}

const ReactHeader = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Top stories on HackerNews</h1>
      </header>        
    </div>
  );
};

export default App;
