import React, { Component } from 'react';
import MenuComponent from '../MenuComponent/MenuComponent';
import DishdetailComponent from '../DishdetailComponent/DishdetailComponent';
import { DISHES } from '../../shared/dishes';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    //console.log("Selected dish in Main " + JSON.stringify(dish));
    return (
      <div>
        <HeaderComponent />
        <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishdetailComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;