import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Col } from 'react-bootstrap';
import Home from "./views/home/Home";
import Biblioteca from "./views/biblioteca/Biblioteca";
import NavbarCopySuma from "./components/navbar/NavbarCopySuma";
import Navegador from "./components/navegador/Navegador";
import Preparados from "./views/preparados/Preparados";
import Estadisticas from "./views/estadisticas/Estadisticas";
import Login from './views/login/Login';
import Styles from "./App.module.css";

const PATH = "/copysuma";

const App = () => {
    const [session, setSession] = useState({});
    const [isLogged, setIsLogged] = useState(false);

    if (isLogged) {
        return (
            <>
                <NavbarCopySuma />
                <Container className={Styles.contenedorPrincipal}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Navegador session={session} path={PATH} />}>
                                <Route path={PATH + "/pedidos"} element={<Home />} />
                                <Route path={PATH + "/preparados"} element={<Preparados />} />
                                <Route path={PATH + "/biblioteca"} element={<Biblioteca />} />
                                {session.nivelPermiso === 2 ? <Route path={PATH + "/estadisticas"} element={<Estadisticas />} /> : <></>}
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </>
        );
    } else {
        return (
            <Container className={Styles.contenedorLogin}>
                <Login setSession={setSession} setIsLogged={setIsLogged} />
            </Container>
        );
    }
};

export default App;