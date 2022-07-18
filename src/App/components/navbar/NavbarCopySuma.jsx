import React from "react";
import Logo from "../../img/logo-copysuma.png";
import { Navbar, Col } from 'react-bootstrap';
import "./NavbarCopySuma.css";

const NavbarCopySuma = () => (
    <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand as={Col}><img src={Logo} /></Navbar.Brand>
    </Navbar>
);

export default NavbarCopySuma;