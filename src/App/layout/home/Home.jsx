import React, { useState } from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import jsonPedidos from "../../helpers/pedidos.json"

var paginas;
var paginaActiva = 1;

const Home = () => {
    const [pedidos, setPedidos] = useState(obtenerListaDePedidos().get(paginaActiva));

    const agregarPedido = (pedidoNuevo) => setPedidos([...pedidos, pedidoNuevo]);

    return (
        <>
            <FormularioDePedidos agregarPedido={agregarPedido} />
            <hr />
            <ListaDePedidos paginaActiva={paginaActiva} paginas={paginas} pedidos={pedidos} />
        </>
    );
};

const obtenerListaDePedidos = () => {
    let listaDePedidos = jsonPedidos.pedidos;
    let iteraciones = 0;
    let paginado = new Map();

    paginas = Math.ceil(listaDePedidos.length / 10);

    while (iteraciones < paginas) {
        paginado.set((iteraciones + 1), listaDePedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }

    return paginado;
}


export default Home;