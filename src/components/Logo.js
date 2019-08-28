import React from "react";
import logo from "../img/nasa-logo.png";

const Logo = () => {
    return (
        <div className="logoContainer">
            <img className="logo" src={ logo } alt="nasa logo"></img>
        </div>
    )
}

export default Logo;