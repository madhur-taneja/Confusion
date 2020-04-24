import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import { DISHES } from '../../shared/dishes';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import MenuComponent from '../MenuComponent/MenuComponent';
import DishdetailComponent from '../DishdetailComponent/DishdetailComponent';
import ContactComponent from '../ContactComponent/ContactComponent';
import AboutComponent from '../AboutComponent/AboutComponent';

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
    const DishWithId = ({match}) => {
      return(
          <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

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
          <Route exact path='/aboutus' component={() => <AboutComponent leaders={this.state.leaders} />} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={ContactComponent} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default MainComponent;