import React from "react";
// import { Player } from 'video-react';
import ReactPlayer from 'react-player'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const DisplayPhotoCard = (props) => {

  return (
    <main>
      <Card>
        <CardBody>
          <CardTitle className="subTitle" >{props.data.title}</CardTitle>
          {/* <CardSubtitle className="subTitle" >DATE: {props.date}</CardSubtitle> */}
        </CardBody>
        {props.data.media_type === "image" ? <CardImg width="100%" src={props.imageUrl} alt="Card image cap" /> : (
          <ReactPlayer
            url={props.videoUrl}
            playing
            loop
            width="100%"
            muted
          />)
        }
        <CardBody>
          <CardText className="pText" >{props.data.explanation}</CardText>
        </CardBody>
      </Card>
    </main>
  );
}

export default DisplayPhotoCard;

