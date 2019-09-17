import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


 const DisplayPhotoCard = (props) => {
    return (
        <main>
        <Card>
          <CardBody>
            <CardTitle>TITLE: {props.title}</CardTitle>
            <CardSubtitle>DATE: {props.date}</CardSubtitle>
          </CardBody>
          <CardImg width="100%" src={props.url} alt="Card image cap" />
          <CardBody>
            <CardText>{props.explanation}</CardText>
          </CardBody>
        </Card>
      </main>    
    );
}

export default DisplayPhotoCard;

