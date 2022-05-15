import React from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";

const Home = () => (
    <>
        <FormularioDePedidos />
        <hr/>
        <ListaDePedidos paginaActiva={1} />
    </>
);

export default Home;