import React, { useState, useEffect } from "react";
import Heading from "./components/HeaderComponent";
import "./App.css";
import DisplayPhotoCard from "./components/display components/DisplayPhotoCard";
import axios from "axios";
import axiosWithHeader from "./helpers/axiosWithHeader"




function App() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([])
  const [date, setDate] = useState('');
  const [video, setVideo] = useState("")

  let d = new Date();
  function twoDigitDate(d) {
    return ((d.getDate()).toString().length === 1) ? "0" + (d.getDate()).toString() : (d.getDate()).toString();
  };
  function twoDigitMonth(d) {
    return ((d.getMonth() + 1).toString().length === 1) ? "0" + (d.getMonth() + 1).toString() : (d.getMonth() + 1).toString();
  };
  let today = d.getFullYear() + "-" + twoDigitMonth(d) + "-" + twoDigitDate(d);
  


  const DatePicker = () => {
    return (
      <div>
        <form >
          Choose A Previous Date: <input onChange={(e) => setDate(e.target.value)} id="date-input" type="date" name="date-picker" max={today} ></input>
        </form>
      </div>
    )
  }

 
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=zLWuVoRtJ7Fq08DkWaM8PrU7uf5UNfmfFaW430YA&date=${date}`)
      .then(res => {
        if (res.data.media_type === "image") {
          setData(res.data);
          setDate(date);
          setImage(res.data.url)
        } else {
          setVideo(res.data.url)
          setDate(date)
          setData(res.data)
          console.log(res.data)
        }
      })
      .catch(err => console.log(err));
  }, [date]);

  return (
    <div className="App">
      <Heading />
      <DatePicker />
      {data ? <DisplayPhotoCard title={data.title}
        url={data.url}
        imageUrl={image}
        videoUrl={video}
        media_type={data.media_type}
        explanation={data.explanation}
        date={data.date} />
        : <h3>Loading...</h3>
      }
    </div>

  );
}

export default App;
