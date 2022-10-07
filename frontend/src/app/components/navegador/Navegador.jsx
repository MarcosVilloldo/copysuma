import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Styles from "./Navegador.module.css"

const Navegador = (props) => (
    <>
        <Nav className={Styles.nav} variant={'pills'} justify>
            <NavLink exact className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")} to={props.path + "/pedidos"}>Pedidos</NavLink>
            <NavLink exact className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")} to={props.path + "/preparados"}>Pedidos preparados</NavLink>
            <NavLink exact className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")} to={props.path + "/biblioteca"}>Biblioteca</NavLink>
            {props.session.nivelPermiso === 2 ? <NavLink exact className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")} to={props.path + "/estadisticas"}>Estadísticas</NavLink> : <></>}
        </Nav>
        <hr />
        <Outlet />
    </>
);

export default Navegador;