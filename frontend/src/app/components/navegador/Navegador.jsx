import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import "./Navegador.css"

const Navegador = (props) => (
    <>
        <Nav className="nav nav-pills nav-justified">
            <NavLink className="nav-item nav-link" to={props.path + "/"}>Pedidos</NavLink>
            <NavLink className="nav-item nav-link" to={props.path + "/pedidos-preparados"}>Pedidos preparados</NavLink>
            <NavLink className="nav-item nav-link" to={props.path + "/biblioteca"}>Biblioteca</NavLink>
            {props.session.nivelPermiso === 2 ? <NavLink className="nav-item nav-link" to={props.path + "/estadisticas"}>Estadísticas</NavLink> : <></>}
        </Nav>
        <hr />
        <Outlet />
    </>
);

export default Navegador;