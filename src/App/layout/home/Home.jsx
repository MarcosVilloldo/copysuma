import React, { useEffect, useState } from "react";
import { Accordion } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import Buscador from "../../components/buscador/Buscador";
import Tabla from "../../components/tabla/Tabla";
import jsonPedidos from "../../helpers/pedidos.json";

const filtro = { FECHA_PEDIDO: 'fechaPedido', PEDIDO: 'pedido', CLIENTE: 'cliente', CELULAR: 'celular' }

const Home = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.PEDIDO);
    const [textoBusqueda, setTextBusqueda] = useState('');
    const [paginaActiva, setPaginaActiva] = useState(1);
    const [boton, setBoton] = useState({ botonAnterior: "hidden", botonSiguiente: pedidos.length > 10 ? "visible" : "hidden" });

    useEffect(() => {
        let pedidosFiltrados;

        if (filtroDeBusqueda === filtro.FECHA_PEDIDO) pedidosFiltrados = pedidos.filter(pedido => formatearFecha(pedido.fechaPedido) === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.PEDIDO) pedidosFiltrados = pedidos.filter(pedido => pedido.pedido.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CLIENTE) pedidosFiltrados = pedidos.filter(pedido => pedido.cliente.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.CELULAR) pedidosFiltrados = pedidos.filter(pedido => pedido.celular.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());

        if (pedidosFiltrados.length > 0) {
            setPedidos(pedidosFiltrados);
            setPaginaActiva(1);
            setBoton({ botonAnterior: 'hidden', botonSiguiente: pedidosFiltrados.length > 10 ? 'visible' : 'hidden' });
        } else {
            setPedidos(jsonPedidos.pedidos);
            setBoton({ botonAnterior: paginaActiva === 1 ? 'hidden' : 'visible', botonSiguiente: jsonPedidos.pedidos.length > 10 * paginaActiva ? 'visible' : 'hidden' });
        }

    }, [textoBusqueda, filtroDeBusqueda]);

    const agregarPedido = (pedidoNuevo) => {
        let fechaActual = new Date();
        pedidoNuevo.fechaPedido = fechaActual.toISOString();
        pedidoNuevo.id = pedidos.length;

        setPedidos([...pedidos, pedidoNuevo])

        if (pedidos.length >= (paginaActiva * 10)) { setBoton({ botonSiguiente: "visible" }) }
        if (paginaActiva == 1) { setBoton({ botonAnterior: "hidden" }) }
    };

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    const prepararPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

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
                        <Buscador filtros={[filtro.FECHA_PEDIDO, filtro.PEDIDO, filtro.CLIENTE, filtro.CELULAR]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarPedidos}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <Tabla encabezado={'Lista de pedidos'}
                boton={boton}
                pedidos={pedidos}
                paginaActiva={paginaActiva}
                setBoton={setBoton}
                setPaginaActiva={setPaginaActiva}
                prepararPedido={prepararPedido} />
        </>
    );
};

export default Home;