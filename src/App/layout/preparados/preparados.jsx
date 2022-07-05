import React, { useState } from "react";
import ListaDePedidosPreparados from "../../components/lista-de-pedidos-preparados/ListaDePedidosPreparados";
import Buscador from "../../components/buscador/Buscador";
import jsonPedidos from "../../helpers/pedidos-preparados.json"

const Preparados = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);

    const estadoBotonSiguiente = pedidos.length > 10 ? "visible" : "hidden";

    const [boton, setBoton] = useState({
        botonAnterior: "hidden",
        botonSiguiente: estadoBotonSiguiente
    });

    const [paginaActiva, setPaginaActiva] = useState(1);

    const filtrarPedidos = (busqueda, filtroDePedido) => {
        let pedidosFiltrados = pedidos;

        if (busqueda !== '') {
            if (filtroDePedido === 'pedido') pedidosFiltrados = pedidos.filter(pedido => pedido.pedido === busqueda);
            if (filtroDePedido === 'cliente') pedidosFiltrados = pedidos.filter(pedido => pedido.cliente === busqueda);
            if (filtroDePedido === 'celular') pedidosFiltrados = pedidos.filter(pedido => pedido.celular === busqueda);
            if (pedidosFiltrados.length > 0) setPedidos(pedidosFiltrados);
        } else {
            setPedidos(jsonPedidos.pedidos);
        }
    }

    const finalizarPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

    const paginaSiguiente = (paginas) => {
        let paginaActivaNueva = paginaActiva + 1;
        setPaginaActiva(paginaActivaNueva);
        paginas <= paginaActivaNueva ? setBoton({ botonSiguiente: "hidden" }) : setBoton({ botonSiguiente: "visible" });

        return paginaActiva;
    }

    const paginaAnterior = () => {
        let paginaActivaNueva = paginaActiva - 1;
        setPaginaActiva(paginaActivaNueva);
        paginaActivaNueva == 1 ? setBoton({ botonAnterior: "hidden" }) : setBoton({ botonAnterior: "visible" });

        return paginaActiva;
    }

    return (
        <>
            <Buscador filtrarPedidos={filtrarPedidos} />
            <hr />
            <ListaDePedidosPreparados
                pedidos={pedidos}
                paginaActiva={paginaActiva}
                paginaSiguiente={paginaSiguiente}
                paginaAnterior={paginaAnterior}
                boton={boton}
                finalizarPedido={finalizarPedido} />
        </>
    );
};

export default Preparados;