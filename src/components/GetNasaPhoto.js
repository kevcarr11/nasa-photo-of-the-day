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
        <div className="nasaImgContainer">
            <h1 className="imgTitle">Nasa Photo Of The Day</h1>
            <h4>Date: { nasaDate }</h4>
            <h4>Title: { nasaTitle }</h4>
            <img className="nasaImg" src={nasaPic} alt="nasa pic of the day" />
            <p>{ nasaText }</p>
            <footer>Copyright 2019</footer>
        </div>

        
    );
}

export default GetNasaPhoto;

// date: "2019-08-27"
// explanation: "Why is the sky near Antares and Rho Ophiuchi so dusty yet colorful?  The colors result from a mixture of objects and processes.  Fine dust illuminated from the front by starlight produces blue reflection nebulae. Gaseous clouds whose atoms are excited by ultraviolet starlight produce reddish emission nebulae. Backlit dust clouds block starlight and so appear dark.   Antares, a red supergiant and one of the brighter stars in the night sky, lights up the yellow-red clouds on the lower left of the featured image. Rho Ophiuchi lies at the center of the blue nebula near the top.   The distant globular cluster M4 is visible to the right of Antares. These star clouds are even more colorful than humans can see, emitting light across the electromagnetic spectrum."
// hdurl: "https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_2200.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Dark Dust and Colorful Clouds near Antares"
// url: "https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_960.jpg"