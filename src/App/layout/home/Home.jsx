import React, { useState } from "react";
import { Accordion } from 'react-bootstrap';
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import Buscador from "../../components/buscador/Buscador";
import jsonPedidos from "../../helpers/pedidos.json";

const filtro = { PEDIDO: 'pedido', CLIENTE: 'cliente', CELULAR: 'celular' }

const Home = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.PEDIDO);
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

    const filtrarPedidos = (busqueda) => { };

    const modificarFiltroBusqueda = (filtro) => { };

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
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Buscador </Accordion.Header>
                    <Accordion.Body>
                        <Buscador filtros={[filtro.PEDIDO, filtro.CLIENTE, filtro.CELULAR]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarPedidos}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Formulario para ingresar pedido </Accordion.Header>
                    <Accordion.Body>
                        <FormularioDePedidos agregarPedido={agregarPedido} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <ListaDePedidos boton={boton}
                pedidos={pedidos}
                paginaActiva={paginaActiva}
                cambiarPagina={cambiarPagina}
                finalizarPedido={finalizarPedido} />
        </>
    );
};

export default Home;