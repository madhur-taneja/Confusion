import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from '../MenuComponent/MenuComponent';
import DishdetailComponent from '../DishdetailComponent/DishdetailComponent';
import { DISHES } from '../../shared/dishes';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    //console.log("Selected dish in Main " + JSON.stringify(dish));
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishdetailComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default MainComponent;