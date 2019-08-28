import React from "react";
import GetNasaPhoto from "./components/GetNasaPhoto";
import Heading from "./components/HeaderComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading />
      <GetNasaPhoto />
    </div>
  );
}

export default App;
