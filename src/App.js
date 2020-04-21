import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainComponent from './components/MainComponent/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con fusion </NavbarBrand>
          </div>
        </Navbar>
        <MainComponent/>
      </div>
    );
  }
  }

export default App;
