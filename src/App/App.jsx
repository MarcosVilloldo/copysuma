import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col } from 'react-bootstrap';
import Home from "./views/home/Home";
import Biblioteca from "./views/biblioteca/Biblioteca";
import NavbarCopySuma from "./components/navbar/NavbarCopySuma";
import Navegador from "./components/navegador/Navegador";
import Preparados from "./views/preparados/preparados";
import Estadisticas from "./views/estadisticas/estadisticas";
import Login from './views/login/login';
import "./App.css";
import { useState } from "react";

const PATH = "/copysuma";

const App = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        isLogged ? (
            <>
                <NavbarCopySuma />
                <Col className="cuerpo-principal">
                    <BrowserRouter>
                        <Routes>
                            <Route path={PATH} element={<Navegador path={PATH} />}>
                                <Route index element={<Home />} />
                                <Route path={PATH + "/pedidos-preparados"} element={<Preparados />} />
                                <Route path={PATH + "/biblioteca"} element={<Biblioteca />} />
                                <Route path={PATH + "/estadisticas"} element={<Estadisticas />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Col>
            </>)
            :
            (<Col className="cuerpo-principal-login">
                <Login setIsLogged={setIsLogged} />
            </Col >)
    );
};

export default App;