import React, { useEffect, useState } from "react";
import ListaDePedidosPreparados from "../../components/lista-de-pedidos-preparados/ListaDePedidosPreparados";
import Buscador from "../../components/buscador/Buscador";
import jsonPedidos from "../../helpers/pedidos-preparados.json"

const Preparados = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);
    const [textoBusqueda, setTextBusqueda] = useState("");
    const [filtroDePedido, setFiltroDePedido] = useState("pedido");

    const estadoBotonSiguiente = pedidos.length > 10 ? "visible" : "hidden";

    const [boton, setBoton] = useState({
        botonAnterior: "hidden",
        botonSiguiente: estadoBotonSiguiente
    });

    const [paginaActiva, setPaginaActiva] = useState(1);

    useEffect(() => {
        let pedidosFiltrados;

        if (filtroDePedido === 'pedido') pedidosFiltrados = pedidos.filter(pedido => pedido.pedido === textoBusqueda);
        if (filtroDePedido === 'cliente') pedidosFiltrados = pedidos.filter(pedido => pedido.cliente === textoBusqueda);
        if (filtroDePedido === 'celular') pedidosFiltrados = pedidos.filter(pedido => pedido.celular === textoBusqueda);

        pedidosFiltrados.length > 0 ? setPedidos(pedidosFiltrados) : setPedidos(jsonPedidos.pedidos)

    }, [textoBusqueda, filtroDePedido]);

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtroDePedido) => setFiltroDePedido(filtroDePedido);

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

    const finalizarPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

    return (
        <>
            <Buscador filtros={['pedido', 'cliente', 'celular']} filtroActivo={filtroDePedido} filtrar={filtrarPedidos} modificarFiltroBusqueda={modificarFiltroBusqueda}/>
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