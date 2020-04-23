import React from 'react';
import PropTypes from 'prop-types';
import './First.css';

const First = () => (
  <div className="First">
    <p>First Component</p>
    <header className="App-header">
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
  </header>
  </div>
);

First.propTypes = {};

First.defaultProps = {};

export default First;
