import React, { Component } from 'react';
import MenuComponent from '../MenuComponent/MenuComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from '../HomeComponent/HomeComponent';
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import { DISHES } from '../../shared/dishes';
import ContactComponent from '../ContactComponent/ContactComponent';

class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    //console.log("Selected dish in Main " + JSON.stringify(dish));

    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.state.dishes} />} />
          <Route exact path='/contactus' component={ContactComponent} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;