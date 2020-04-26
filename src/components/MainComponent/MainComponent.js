import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import MenuComponent from '../MenuComponent/MenuComponent';
import DishdetailComponent from '../DishdetailComponent/DishdetailComponent';
import ContactComponent from '../ContactComponent/ContactComponent';
import AboutComponent from '../AboutComponent/AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class MainComponent extends Component {

  render() {
    const DishWithId = ({ match }) => {
      return (
        <DishdetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };

    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/aboutus' component={() => <AboutComponent leaders={this.props.leaders} />} />
          <Route exact path='/menu' component={() => <MenuComponent dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={ContactComponent} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MainComponent));