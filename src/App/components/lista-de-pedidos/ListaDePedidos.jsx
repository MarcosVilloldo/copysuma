import React, { useState } from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import ModalEditarPedido from "../modal-editar-pedido/modal-editar-pedido.jsx";
import "./ListaDePedidos.css";

const ListaDePedidos = (props) => {
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
            {obtenerPaginado(props.pedidos, props.paginas).size > 0 ?
                obtenerPaginado(props.pedidos, props.paginas).get(props.paginaActiva).map((pedido, cantidad) => (
                    <ListGroup className="item-pedido" id="item-pedido" key={cantidad.toString()} horizontal>
                        <ListGroup.Item className="item-columna-pedido" md="1" as={Col}> {formatearFecha(pedido.fecha)} </ListGroup.Item>
                        <ListGroup.Item className="item-columna-pedido" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
                        <ListGroup.Item className="item-columna-pedido" md="1" as={Col}> {pedido.celular} </ListGroup.Item>
                        <ListGroup.Item className="item-columna-pedido" md="5" as={Col}> {pedido.pedido} </ListGroup.Item>
                        <ListGroup.Item className="item-columna-pedido" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
                        <ListGroup.Item className="item-columna-botones" md="2" as={Col}>
                            <Row className="botonera-lista-pedidos" md="12">
                                <Col className="box-boton-editar-pedido" md="4">
                                    <Button className="boton-editar-pedido" variant="dark" onClick={() => mostrarModalEditarPedido(pedido)}>Editar</Button>
                                </Col>
                                <Col className="box-boton-preparar-pedido" md="8">
                                    {pedido.finalizado === false
                                        ? <Button className="boton-preparar-pedido" variant="dark" onClick={() => props.prepararPedido(pedido.id)}>Preparar</Button>
                                        : <Button className="boton-preparar-pedido" variant="dark" onClick={() => props.prepararPedido(pedido.id)} disabled>Preparado</Button>
                                    }
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                )) : null
            }
            <ModalEditarPedido pedidos={props.pedidos} pedidoActivo={pedidoActivo} show={show} handleClose={handleClose} />
        </>
    );
};

export default ListaDePedidos;