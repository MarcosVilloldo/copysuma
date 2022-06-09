import React, { useState } from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";

var listaDePedidos;
var paginas;
var paginaActiva = 1;

const Home = () => {
    listaDePedidos = obtenerListaDePedidos();

    const [pedidos, setPedidos] = useState(listaDePedidos.get(paginaActiva));

    const agregarPedido = (pedidoNuevo) => { 
        setPedidos([...pedidos, pedidoNuevo]);
    };

    return (
        <>
            <FormularioDePedidos agregarPedido={agregarPedido} />
            <hr />
            <ListaDePedidos paginaActiva={paginaActiva} paginas={paginas} pedidos={pedidos} />
        </>
    );
};

const obtenerListaDePedidos = () => {
    let listaDePedidos = [
        { cliente: "Marcos", pedido: "El señor de los anillos", celular: "11123232", importe: 200 },
        { cliente: "Ciro", pedido: "La granja de zenón", celular: "11123232", importe: 50 },
        { cliente: "Celeste", pedido: "Matematica IV", celular: "11123232", importe: 150 },
        { cliente: "Silvia", pedido: "Historia del siglo XX", celular: "11123232", importe: 150 },
    ]

    paginas = Math.ceil(listaDePedidos.length / 10);

    let iteraciones = 0;
    let paginado = new Map();
    while (iteraciones < paginas) {
        paginado.set((iteraciones + 1), listaDePedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }

    return paginado;
}


export default Home;