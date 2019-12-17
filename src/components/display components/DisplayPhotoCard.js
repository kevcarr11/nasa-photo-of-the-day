import React from "react";
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const DisplayPhotoCard = (props) => {


console.log(props.media_type)
  return (
    <main>
      <Card>
        <CardBody>
          <CardTitle>TITLE: {props.title}</CardTitle>
          <CardSubtitle>DATE: {props.date}</CardSubtitle>
        </CardBody>
        {props.media_type === "image" ? <CardImg width="100%" src={props.imageUrl} alt="Card image cap" /> : (
          <ReactPlayer
            url={props.videoUrl}
            playing
            loop
            width="100%"
          />)
        }

        <CardBody>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </main>
  );
}

export default DisplayPhotoCard;

