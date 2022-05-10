import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = (props) => (
    <>
        <nav className="nav nav-pills nav-justified">
            <NavLink className="nav-item nav-link" to={props.path + "/"}>Pedidos</NavLink>
            <NavLink className="nav-item nav-link" to={props.path + "/bibliotaca"}>Biblioteca</NavLink>
            <NavLink className="nav-item nav-link" to={props.path + "/estadisticas"}>Estadísticas</NavLink>
            <NavLink className="nav-item nav-link" to={props.path + "/notas"}>Notas</NavLink>
        </nav>
        <hr />
        <Outlet />
    </>
);

export default Nav;