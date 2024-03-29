import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Spinner, Col } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import Buscador from "../../components/buscador/Buscador";
import Tabla from "../../components/tabla/Tabla";

const filtro = { PEDIDO: 'pedido', CLIENTE: 'cliente', CELULAR: 'celular', FECHA_ENTREGA: 'fecha entrega', FECHA_FINALIZACION: 'fecha finalizacion' }

const Preparados = () => {
    const [pedidos, setPedidos] = useState([]);
    const [actualizo, setActualizo] = useState(false);
    const [seFiltro, setSeFiltro] = useState(false);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.PEDIDO);
    const [textoBusqueda, setTextBusqueda] = useState('');
    const [paginaActiva, setPaginaActiva] = useState(1);
    const [boton, setBoton] = useState({ botonAnterior: 'hidden', botonSiguiente: 'hidden' });

    useEffect(() => {
        obtenerPedidosPreparados(setActualizo, setPedidos);
    }, []);

    useEffect(() => {
        let pedidosFiltrados;

        if (filtroDeBusqueda === filtro.PEDIDO) pedidosFiltrados = pedidos.filter(pedido => pedido.pedido.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CLIENTE) pedidosFiltrados = pedidos.filter(pedido => pedido.cliente.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CELULAR) pedidosFiltrados = pedidos.filter(pedido => pedido.celular.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.FECHA_ENTREGA) pedidosFiltrados = pedidos.filter(pedido => formatearFecha(pedido.fechaEntrega) === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.FECHA_FINALIZACION) pedidosFiltrados = pedidos.filter(pedido => formatearFecha(pedido.fechaBaja) === textoBusqueda.toLocaleLowerCase());

        if (pedidosFiltrados.length > 0) {
            setPedidos(pedidosFiltrados);
            setPaginaActiva(1);
            setSeFiltro(true);
        } else if (seFiltro) {
            obtenerPedidosPreparados(setActualizo, setPedidos);
            setSeFiltro(false);
        }

    }, [textoBusqueda, filtroDeBusqueda]);

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    const finalizarPedido = (idPedido) => {
        pedidos.map((pedido) => {
            if (pedido._id === idPedido) {
                let fechaActual = new Date();
                pedido.fechaBaja = fechaActual.toISOString();
                pedido.finalizado = true;
                finalizarPedidoPreparadoExistente(setActualizo, setPedidos, pedido);
            }
        })
    };

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <Buscador filtros={[filtro.PEDIDO, filtro.CLIENTE, filtro.CELULAR, filtro.FECHA_ENTREGA, filtro.FECHA_FINALIZACION]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarPedidos}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            {actualizo ? <Col className="spinner"><Spinner animation="border" role="status" /></Col> :
                <Tabla encabezado={'Lista de pedidos preparados'}
                    boton={boton}
                    pedidos={pedidos}
                    paginaActiva={paginaActiva}
                    setBoton={setBoton}
                    setPaginaActiva={setPaginaActiva}
                    finalizarPedido={finalizarPedido} />
            }
        </>
    );
};

const obtenerPedidosPreparados = async (setActualizo, setPedidos) => {
    setActualizo(true);
    const pedidosObtenidos = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/preparados`);
    setPedidos(pedidosObtenidos.data);
    setActualizo(false);
}

const finalizarPedidoPreparadoExistente = async (setActualizo, setPedidos, pedido) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/preparados/finalizar`, pedido);
    obtenerPedidosPreparados(setActualizo, setPedidos);
}

export default Preparados;