import React from "react";
import Logo from "../../img/logo-copysuma.png";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-light">
        <div className="col-md-12">
            <a className="navbar-brand logo">
                <img src={Logo}/>
            </a>
        </div>
    </nav>
);

export default Navbar;