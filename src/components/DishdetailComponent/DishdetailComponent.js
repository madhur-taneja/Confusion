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

  renderSelectedDish(dish) {
    //console.log("Selected dish in Dishdetail " + JSON.stringify(dish));
    if (dish != null)
      return(
        <div className="col-12 col-md-5 m-1 bg-color">
          <Card key={dish.id}>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
        </div>
      );
    else
      return(
          <div></div>
      );
  }

  renderComments(comments) {
    if(comments == null) {
      return (
        <div></div>
      );
    }
    const commt = comments.map((comment) => {
      return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, 
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            <p>- - - - - - - - - - - - - -</p>
          </li>
      );  
    });
    return (
      <div className='col-12 col-md-5 m-1 bg-color'>
          <h4> Comments </h4>
          <ul className='list-unstyled'>
              {commt}
          </ul>
      </div>
    )
  }

  render() {
    const dish = this.props.selectedDish;
    if (dish == null) {
      return (<div></div>)
    }

    else {
      return (
        <div className="container">
          <div className="row">
            {this.renderSelectedDish(dish)}
            {this.renderComments(dish.comments)}
          </div>
        </div>
      )
    }
  }


}

export default DishdetailComponent;
