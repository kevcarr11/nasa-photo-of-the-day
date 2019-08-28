import React, { useState, useEffect } from "react";
import axios from "axios";

const GetDates = () => {
    const [nasaData, setNasaData] = useState("");

    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2019-01-01')
        .then(res => {
            console.log(res.data)
            
        })
        .catch(err => console.log(err));

    }, []);

    return (
        null
    )
}



export default GetDates;