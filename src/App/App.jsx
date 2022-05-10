import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/home/Home";
import Biblioteca from "./layout/biblioteca/Biblioteca";
import Navbar from "./components/navbar/Navbar";
import Nav from "./components/nav/Nav";

import "./App.css";

const App = () => (
    <>
        <Navbar />
        <div className="cuerpo-principal">
            {realizarEnrutamiento()}
        </div> 
    </>
);

const realizarEnrutamiento = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/MarcosVilloldo/copysuma" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="bibliotaca" element={<Biblioteca />} />
                <Route path="estadisticas" element={<p>Estadísticas</p>} />
                <Route path="notas" element={<p>Notas</p>} />
            </Route> 
        </Routes>
    </BrowserRouter>
);

export default App;