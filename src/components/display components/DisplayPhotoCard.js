import React from "react";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody, CardLink,
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
            {/* <Link to="/mars-weather">Check out the weather on Mars</Link> */}
          </CardBody>
        </Card>
      </main>    
    );
}

export default DisplayPhotoCard;

