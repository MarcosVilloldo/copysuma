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
            if (pedidosFiltrados.length === 0) setPedidos([]);
        } else {
            setPedidos(jsonPedidos.pedidos);
        }
    }

    const finalizarPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

    const cambiarPagina = (orientacion, paginas) => {
        let paginaActivaNueva;

        if (orientacion === 'ANTERIOR') {
            paginaActivaNueva = paginaActiva - 1;
            paginaActivaNueva == 1 ? setBoton({ botonAnterior: "hidden" }) : setBoton({ botonAnterior: "visible" });
        }

        if (orientacion === 'SIGUIENTE') {
            paginaActivaNueva = paginaActiva + 1;
            paginas <= paginaActivaNueva ? setBoton({ botonSiguiente: "hidden" }) : setBoton({ botonSiguiente: "visible" });
        }

        setPaginaActiva(paginaActivaNueva);
    }

    return (
        <>
            <Buscador filtros={['pedido', 'cliente', 'celular']} filtrar={filtrarPedidos} />
            <hr />
            <ListaDePedidosPreparados
                boton={boton}
                pedidos={pedidos}
                paginaActiva={paginaActiva}
                cambiarPagina={cambiarPagina}
                finalizarPedido={finalizarPedido} />
        </>
    );
};

export default Preparados;