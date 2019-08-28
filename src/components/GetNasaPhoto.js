import React, { useState, useEffect } from "react";
import axios from "axios";

 const GetNasaPhoto = () => {
    const [nasaPic, setNasaPic] = useState("");
    const [nasaText, setNasaText] = useState("");
    const [nasaDate, setNasaDate] = useState("");
    const [nasaTitle, setNasaTitle] = useState("");

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=ftIukXOm2rei8iPncVIw1hjdhbLoO0Lvt1JQ0aVz')
        .then(res => {
            setNasaPic(res.data.url)
            setNasaText(res.data.explanation)
            setNasaDate(res.data.date)
            setNasaTitle(res.data.title)
            
        })
        
        .catch(err => console.log(err));

    }, []);

    return (
        <div className="nasaContent">
            <div className="titleContainer">
                <h1 className="photoOfTheDayTitle">Nasa Photo Of The Day</h1>
                <h4 className="subTitle">Date: { nasaDate }</h4>
                <h4 className="subTitle">Title: { nasaTitle }</h4>
            </div>
            <img className="nasaImg" src={nasaPic} alt="nasa pic of the day" />
            <p className="pText">{ nasaText }</p>
            <div className="footerContainer">
                <footer>Copyright 2019</footer>
            </div>
        </div>

        
    );
}

export default GetNasaPhoto;

