import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => (
    <>
        <nav className="nav nav-pills nav-justified">
            <NavLink className="nav-item nav-link" to="/MarcosVilloldo/copysuma/">Pedidos</NavLink>
            <NavLink className="nav-item nav-link" to="/MarcosVilloldo/copysuma/bibliotaca">Biblioteca</NavLink>
            <NavLink className="nav-item nav-link" to="/MarcosVilloldo/copysuma/estadisticas">Estadísticas</NavLink>
            <NavLink className="nav-item nav-link" to="/MarcosVilloldo/copysuma/notas">Notas</NavLink>
        </nav>
        <hr />
        <Outlet />
    </>
);

export default Nav;