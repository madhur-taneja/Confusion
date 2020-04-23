import React, { Component } from 'react';
import MenuComponent from '../MenuComponent/MenuComponent';
import { DISHES } from '../../shared/dishes';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from '../HomeComponent/HomeComponent';

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

    const HomePage = () => {
      return (
        <HomeComponent />
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;