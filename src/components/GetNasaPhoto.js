import React, { useState, useEffect } from "react";
import axios from "axios";

 const GetNasaPhoto = () => {
    const [nasaPic, setNasaPic] = useState("");

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => setNasaPic(res.data.url))
        
        

        .catch(err => console.log(err));

    }, []);

    return (
        <div className="nasaImgContainer">
            <img className="nasaImg" src={nasaPic} alt="nasa pic of the day" />
        </div>
    );
}

export default GetNasaPhoto;