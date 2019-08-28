import React from "react";
import Logo from "./Logo";

function Heading() {
    return ( 
        <div className="heading">
            <div className="leftHeadingContainer">
                <h1 className="leftHeading">Photos Provided by Nasa</h1>
            </div>
            < Logo />
            <div className="rightHeadingContainer">
                <h1 className="rightHeading">Media Production by Kevin Carr</h1>
            </div>
        </div>
    );
};

export default Heading;