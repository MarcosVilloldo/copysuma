import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col } from 'react-bootstrap';
import Home from "./views/home/Home";
import Biblioteca from "./views/biblioteca/Biblioteca";
import NavbarCopySuma from "./components/navbar/NavbarCopySuma";
import Navegador from "./components/navegador/Navegador";
import Preparados from "./views/preparados/preparados";
import Estadisticas from "./views/estadisticas/estadisticas";
import "./App.css";

const PATH = "/copysuma";

const App = () => (
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
    </>
);

export default App;