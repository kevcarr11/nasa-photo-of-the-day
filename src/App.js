import React, { useState, useEffect } from "react";
import Heading from "./components/HeaderComponent";
import "./App.css";
import DisplayPhotoCard from "./components/display components/DisplayPhotoCard";
import axios from "axios";
import DatePicker from "./components/DatePicker"

function App() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([])
  const [date, setDate] = useState('');
  const [video, setVideo] = useState("")
  const [isLoading, setLoading] = useState(true)

 const API_KEY = process.env.REACT_APP_NASA_API_KEY

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(res => {
        if (res.data.media_type === "image") {
          setData(res.data);
          setDate(date);
          setImage(res.data.url)
          setLoading(false)
        } else {
          setVideo(res.data.url)
          setDate(date)
          setData(res.data)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      });
  }, [date]);

  return (
    <div className="App">
      <Heading />
      <DatePicker setDate={setDate} date={date} />
      {!isLoading ? <DisplayPhotoCard 
        data={data}
        imageUrl={image}
        videoUrl={video}
        isLoading={isLoading} />
        : <h3>Loading...</h3>
      }
    </div>

  );
}

export default App;
