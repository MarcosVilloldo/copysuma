import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import Buscador from "../../components/buscador/Buscador";
import Tabla from "../../components/tabla/Tabla";

const filtro = { PEDIDO: 'pedido', CLIENTE: 'cliente', CELULAR: 'celular', FECHA_ENTREGA: 'fecha entrega' }

const Preparados = () => {
    const [pedidos, setPedidos] = useState([]);
    const [actualizo, setActualizo] = useState(false);
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

        if (pedidosFiltrados.length > 0) {
            setPedidos(pedidosFiltrados);
            setPaginaActiva(1);
        } else {
            obtenerPedidosPreparados(setActualizo, setPedidos);
        }

    }, [textoBusqueda, filtroDeBusqueda]);

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    const finalizarPedido = (idPedido) => {
        pedidos.map((pedido) => {
            if (pedido._id === idPedido) {
                pedido.finalizado = true;
                modificarEstadoPedidoPreparado(setActualizo, setPedidos, pedido);
            }
        })
    };

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <Buscador filtros={[filtro.PEDIDO, filtro.CLIENTE, filtro.CELULAR, filtro.FECHA_ENTREGA]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarPedidos}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            {actualizo ? <p>actualizando...</p> :
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
    const pedidosObtenidos = await axios.get('http://localhost:9000/preparados');
    setPedidos(pedidosObtenidos.data);
    setActualizo(false);
}

const modificarEstadoPedidoPreparado = async (setActualizo, setPedidos, pedido) => {
    await axios.post('http://localhost:9000/preparados/modificar', pedido)
    obtenerPedidosPreparados(setActualizo, setPedidos);
}

export default Preparados;