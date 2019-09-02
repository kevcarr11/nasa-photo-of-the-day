import React from "react";


 const DisplayPhotoCard = (props) => {
    return (
        <div>
            <h2>TITLE: {props.title}</h2>
            <h3>DATE: {props.date}</h3>
            <img src={props.url} alt="nasa pic of the day" />
            <p>{props.explanation}</p>
        </div> 
    );
}

export default DisplayPhotoCard;

