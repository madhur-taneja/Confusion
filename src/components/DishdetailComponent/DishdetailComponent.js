import React from 'react';
import './DishdetailComponent.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSelectedDish({ dish }) {
  //console.log("Selected dish in Dishdetail " + JSON.stringify(dish));
  if (dish != null)
    return (
      <div className="col-12 col-md-6 my-1 bg-color">
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
    return (
      <div></div>
    );
}

function RenderComments({ comments }) {
  if (comments == null) {
    return (
      <div></div>
    );
  }
  const commt = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author},
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
        <p>- - - - - - - - - - - - - -</p>
      </li>
    );
  });
  return (
    <div className='col-12 col-md-6 my-1 bg-color'>
      <h4> Comments </h4>
      <ul className='list-unstyled'>
        {commt}
      </ul>
    </div>
  )
}

const DishdetailComponent = (props) => {
  const dish = props.dish;
  //console.log(dish);

  if (dish == null) {
    return (<div></div>)
  }

  else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row d-flex justify-content-center bg-color">
          <div className='col-12 col-md-6 m-1'>
            <h2>The Dish you've Selected</h2>
          </div>
        </div>
        <div className="row">
          <RenderSelectedDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
