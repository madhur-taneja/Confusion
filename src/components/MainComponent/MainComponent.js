import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from '../MenuComponent/MenuComponent';
import { DISHES } from '../../shared/dishes';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

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
        <MenuComponent dishes={this.state.dishes}/>
      </div>
    );
  }
  }

export default MainComponent;
