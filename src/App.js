import React from "react";
import GetNasaPhoto from "./components/GetNasaPhoto";
import Heading from "./components/HeaderComponent";
import Date from "./components/DateComponent";
import "./App.css";
import GetDates from "./components/GetDateComponent";

function App() {
  return (
    <div className="App">
      
      <Heading />
      <Date />
      <GetNasaPhoto />
      <GetDates />
    </div>
  );
}

export default App;
