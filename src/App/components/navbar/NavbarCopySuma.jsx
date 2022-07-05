import React from "react";
import Logo from "../../img/logo-copysuma.png";
import { Navbar, Col } from 'react-bootstrap';
import "./NavbarCopySuma.css";

const NavbarCopySuma = () => (
    <Navbar className="navbar" bg="light" expand="lg">
        <Col>
            <Navbar.Brand><img src={Logo} /></Navbar.Brand>
        </Col>
    </Navbar>
);

export default NavbarCopySuma;