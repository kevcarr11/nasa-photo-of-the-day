import axios from "axios";
import React, { useEffect, useState } from "react";
import EmblaCarouselReact from "embla-carousel-react";


const Carousel = ({ children }) => {
    const [carousel, initCarousel] = useState(null); // The carousel API
    console.log(children)

    useEffect(() => {
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    })
    return(
    <div className="carousel">
      <div className="carousel__wrap">
        {/* Grab the carousel API in the emblaRef function prop and assign it to our carousel state  */}
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={initCarousel}
          options={{ loop: false /* Carousel Options */ }}
          htmlTagName="div">

          {/* <div className="carousel__container">
          {children.map((Child, index) => (
            <div className="carousel__item" key={index}>
            {Child}
            </div>
        ))} 
          </div> */}
        </EmblaCarouselReact>
      </div>
    </div>
    )
}

export default Carousel;