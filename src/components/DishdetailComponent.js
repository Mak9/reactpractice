import React, { Component } from "react";
import {
  Card,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    const list = comments.map(item => {
      return (
        <div key={item.id}>
          <Media tag="li">
            <Media body>
              <p>{item.comment}</p>
              <p>
                -- {item.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(item.date)))}
              </p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <Media list className="list-unstyled">
          {list}
        </Media>
      </div>
    );
  } else return <div />;
}

const DishDetail = props => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
          </div>
        
      </div>
    );
  
};

export default DishDetail;
