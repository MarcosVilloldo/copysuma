import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Styles from "./Navegador.module.css"

const Navegador = (props) => {
    let estiloActivo = { color: 'white', background: '0 0', backgroundColor: 'rgb(44, 44, 44)', borderRadius: '0.25rem' };

    return (
        <>
            <Nav className={Styles.nav} variant={'pills'} justify>
                <NavLink className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")}
                    style={({ isActive }) => (isActive ? estiloActivo : undefined)}
                    to={props.path + "/pedidos"}>Pedidos
                </NavLink>
                <NavLink className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")}
                    style={({ isActive }) => (isActive ? estiloActivo : undefined)}
                    to={props.path + "/preparados"}>Pedidos preparados
                </NavLink>
                <NavLink className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")}
                    style={({ isActive }) => (isActive ? estiloActivo : undefined)}
                    to={props.path + "/biblioteca"}>Biblioteca</NavLink>
                {props.session.nivelPermiso === 2 ?
                    <NavLink className={({ isActive }) => "nav-item " + Styles.navLink + (isActive ? " active" : "")}
                        style={({ isActive }) => (isActive ? estiloActivo : undefined)}
                        to={props.path + "/estadisticas"}>Estadísticas</NavLink> : <></>
                }
            </Nav>
            <hr />
            <Outlet />
        </>
    );
};

export default Navegador;