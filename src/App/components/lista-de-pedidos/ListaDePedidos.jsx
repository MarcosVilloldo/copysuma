import React, { useState } from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import ModalEditarPedido from "../modal-editar-pedido/modal-editar-pedido.jsx";
import "./ListaDePedidos.css";

var paginas;

const ListaDePedidos = (props) => {
    paginas = Math.ceil(props.pedidos.length / 10);

    const [pedidoActivo, setPedidoActivo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mostrarModalEditarPedido = (data) => {
        setPedidoActivo(data);
        handleShow();
    }

    return (
        <>
            <ListGroup className="lista-de-pedidos">
                <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
                {agregarItemsAListaDePedidos(obtenerPaginado(props.pedidos, paginas), mostrarModalEditarPedido, props.paginaActiva, props.finalizarPedido)}
                <ListGroup.Item className="pedido">
                    <Row>
                        <Col className="box-boton-anterior">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={props.paginaAnterior} style={{ visibility: props.boton.botonAnterior }}>
                                <i className="bi bi-arrow-left"></i>
                            </Button>
                        </Col>
                        <Col className="box-numero-pagina" id="paginado"> {props.paginaActiva} / {paginas} </Col>
                        <Col className="box-boton-siguiente">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={() => props.paginaSiguiente(paginas)} style={{ visibility: props.boton.botonSiguiente }}>
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <ModalEditarPedido pedidos={props.pedidos} pedidoActivo={pedidoActivo} show={show} handleClose={handleClose} />
        </>
    );
};

const agregarItemsAListaDePedidos = (pedidos, mostrarModalEditarPedido, paginaActiva, finalizarPedido) => {
    return pedidos.get(paginaActiva).map((pedido, cantidad) => (
        <ListGroup id="item-pedido" key={cantidad.toString()} horizontal>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="fecha" md="1" as={Col}> {formatearFecha(pedido.fecha)} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="cliente" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="celular" md="1" as={Col}> {pedido.celular} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="pedido" md="5" as={Col}> {pedido.pedido} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="importe" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-botonera" md="2" as={Col}>
                <Row className="botonera-lista-pedidos" md="12">
                    <Col className="box-boton-editar-pedido" md="4">
                        <Button className="boton-editar-pedido" variant="dark" onClick={() => mostrarModalEditarPedido(pedido)}>Editar</Button>
                    </Col>
                    <Col className="box-boton-finalizar-pedido" md="8">
                        {pedido.finalizado === false
                            ? <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)}>Preparar</Button>
                            : <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)} disabled>Preparado</Button>
                        }
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    ))
}

const formatearFecha = (fecha) => {
    let date = new Date(fecha);

    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

export default ListaDePedidos;