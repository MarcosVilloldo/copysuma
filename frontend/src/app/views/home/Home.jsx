import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import Buscador from "../../components/buscador/Buscador";
import Tabla from "../../components/tabla/Tabla";

const pedidosAux = null;
const filtro = { PEDIDO: 'pedido', CLIENTE: 'cliente', CELULAR: 'celular', FECHA_PEDIDO: 'fecha pedido', FECHA_ENTREGA: 'fecha entrega' }

const Home = () => {
    const [pedidos, setPedidos] = useState([]);
    const [actualizo, setActualizo] = useState(false);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.PEDIDO);
    const [textoBusqueda, setTextBusqueda] = useState('');
    const [paginaActiva, setPaginaActiva] = useState(1);
    const [boton, setBoton] = useState({ botonAnterior: 'hidden', botonSiguiente: 'hidden' });

    useEffect(() => {
        obtenerPedidos(setActualizo, setPedidos);
    }, []);

    useEffect(() => {
        let pedidosFiltrados;

        if (filtroDeBusqueda === filtro.PEDIDO) pedidosFiltrados = pedidos.filter(pedido => pedido.pedido.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CLIENTE) pedidosFiltrados = pedidos.filter(pedido => pedido.cliente.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CELULAR) pedidosFiltrados = pedidos.filter(pedido => pedido.celular.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.FECHA_PEDIDO) pedidosFiltrados = pedidos.filter(pedido => formatearFecha(pedido.fechaPedido) === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.FECHA_ENTREGA) pedidosFiltrados = pedidos.filter(pedido => formatearFecha(pedido.fechaEntrega) === textoBusqueda.toLocaleLowerCase());

        if (pedidosFiltrados.length > 0) {
            setPedidos(pedidosFiltrados);
            setPaginaActiva(1);
        } else {
            obtenerPedidos(setActualizo, setPedidos);
        }
    }, [textoBusqueda, filtroDeBusqueda]);

    const agregarPedido = (pedidoNuevo) => {
        let fechaActual = new Date();
        pedidoNuevo.fechaPedido = fechaActual.toISOString();

        AgregarPedidoNuevo(setActualizo, setPedidos, pedidoNuevo);
    };

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    const prepararPedido = (idPedido) => {
        pedidos.map((pedido) => {
            if (pedido._id === idPedido) {
                pedido.finalizado = true;
                modificarEstadoPedido(setActualizo, setPedidos, pedido);
            }
        })
    };

    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header"> Formulario para ingresar pedido </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <FormularioDePedidos agregarPedido={agregarPedido} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-item" eventKey="1">
                    <Accordion.Header className="accordion-header"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <Buscador filtros={[filtro.PEDIDO, filtro.CLIENTE, filtro.CELULAR, filtro.FECHA_PEDIDO, filtro.FECHA_ENTREGA]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarPedidos}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            {actualizo ? <p>actualizando...</p> :
                <Tabla encabezado={'Lista de pedidos'}
                    boton={boton}
                    pedidos={pedidos}
                    paginaActiva={paginaActiva}
                    setBoton={setBoton}
                    setPaginaActiva={setPaginaActiva}
                    prepararPedido={prepararPedido} />
            }
        </>
    );
};

const obtenerPedidos = async (setActualizo, setPedidos) => {
    setActualizo(true);
    const pedidosObtenidos = await axios.get('http://localhost:9000/pedidos');
    setPedidos(pedidosObtenidos.data);
    setActualizo(false);
}

const modificarEstadoPedido = async (setActualizo, setPedidos, pedido) => {
    await axios.post('http://localhost:9000/pedidos/modificar', pedido)
    obtenerPedidos(setActualizo, setPedidos);
}

const AgregarPedidoNuevo = async (setActualizo, setPedidos, pedidoNuevo) => {
    await axios.post('http://localhost:9000/pedidos/agregar', pedidoNuevo)
    obtenerPedidos(setActualizo, setPedidos);
}

export default Home;