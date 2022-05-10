import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => (
    <>
        <nav className="nav nav-pills nav-justified">
            <NavLink className="nav-item nav-link" to="/">Pedidos</NavLink>
            <NavLink className="nav-item nav-link" to="/bibliotaca">Biblioteca</NavLink>
            <NavLink className="nav-item nav-link" to="/estadisticas">Estadísticas</NavLink>
            <NavLink className="nav-item nav-link" to="/notas">Notas</NavLink>
        </nav>
        <hr />
        <Outlet />
    </>
);

export default Nav;