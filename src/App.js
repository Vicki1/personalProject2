import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        

          <h1 className="can-do">Can Do</h1>
          <svg className="checkLogo" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
 <path d="m165.78 219.48l70.872 97.133c36.111-86.932 80.317-166.9 151.37-242.83-53.178 35.437-111.8 102.73-161.87 186l-60.373-40.3z" stroke-width="0"/>
</svg>
        </div>
        <p className="App-intro"></p>
          <Login/>
      </div>
    );
  }
}

export default App;
