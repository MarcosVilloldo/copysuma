import React from "react";
import Logo from "../../img/logo-copysuma.png";
import { Navbar, Col, Image } from 'react-bootstrap';
import Style from "./NavbarCopySuma.module.css";

const NavbarCopySuma = () => (
    <Navbar className={Style.navbar} bg="light" expand="lg">
        <Navbar.Brand as={Col}><Image src={Logo} /></Navbar.Brand>
    </Navbar>
);

export default NavbarCopySuma;