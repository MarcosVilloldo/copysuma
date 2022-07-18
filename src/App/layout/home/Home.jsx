import React, { useState } from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import jsonPedidos from "../../helpers/pedidos.json";

const Home = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);
    const [boton, setBoton] = useState({ botonAnterior: "hidden", botonSiguiente: pedidos.length > 10 ? "visible" : "hidden" });
    const [paginaActiva, setPaginaActiva] = useState(1);

    const agregarPedido = (pedidoNuevo) => {
        let fechaActual = new Date();
        pedidoNuevo.fecha = fechaActual.toISOString();

        pedidoNuevo.id = pedidos.length;

        setPedidos([...pedidos, pedidoNuevo])

        if (pedidos.length >= (paginaActiva * 10)) { setBoton({ botonSiguiente: "visible" }) }
        if (paginaActiva == 1) { setBoton({ botonAnterior: "hidden" }) }
    };

    const cambiarPagina = (orientacion, paginas) => {
        let paginaActivaNueva;

        if (orientacion === 'ANTERIOR') {
            paginaActivaNueva = paginaActiva - 1;
            paginaActivaNueva == 1 ? setBoton({ botonAnterior: 'hidden' }) : setBoton({ botonAnterior: 'visible' });
        }

        if (orientacion === 'SIGUIENTE') {
            paginaActivaNueva = paginaActiva + 1;
            paginas <= paginaActivaNueva ? setBoton({ botonSiguiente: 'hidden' }) : setBoton({ botonSiguiente: 'visible' });
        }

        setPaginaActiva(paginaActivaNueva);
    }

    const finalizarPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

    return (
        <>
            <FormularioDePedidos agregarPedido={agregarPedido} />
            <hr />
            <ListaDePedidos
                boton={boton}
                pedidos={pedidos}
                paginaActiva={paginaActiva}
                cambiarPagina={cambiarPagina}
                finalizarPedido={finalizarPedido} />
        </>
    );
};

export default Home;