import React, { Component } from 'react';
import './DishdetailComponent.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    const dish = this.props.dish;
    if (dish != null)
      return(
        <div className="row bg-color">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    else
      return(
          <div></div>
      );
  }
  }

export default DishdetailComponent;
