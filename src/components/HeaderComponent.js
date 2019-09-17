import React from "react";
import Logo from "./Logo";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';

function Heading() {
    return ( 
        <div className="">
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Nasa Photo Of The Day</NavbarBrand>
            <Logo/>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Media Production By Kevin Carr</NavLink>
              </NavItem>
            </Nav>
            </Navbar>
        </div>
    );
};

export default Heading;