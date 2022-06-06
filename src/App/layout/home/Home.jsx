import React from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";

var listaDePedidos;

const Home = () => {

    listaDePedidos = obtenerListaDePedidos();

    return(
        <>
            <FormularioDePedidos />
            <hr/>
            <ListaDePedidos paginaActiva={1} listaDePedidos={listaDePedidos}/>
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

    let cantidadDePaginas = Math.ceil(listaDePedidos.length / 10);
    let iteraciones = 0;
    let paginado = new Map();
    while (iteraciones < cantidadDePaginas) {
        paginado.set((iteraciones + 1), listaDePedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }
    return paginado;
}


export default Home;