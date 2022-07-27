import React, { useState } from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import ModalEditarPedido from "../modal-editar-pedido/modal-editar-pedido.jsx";
import "./ListaDePedidos.css";

const ListaDePedidos = (props) => {
    const paginado = obtenerPaginado(props.pedidos, props.paginas);

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
            <ListGroup className="item-fila" horizontal>
                <ListGroup.Item className="item-columna-header" md="1" as={Col}> Ingresado </ListGroup.Item>
                <ListGroup.Item className="item-columna-header" md="1" as={Col}> Entrega </ListGroup.Item>
                <ListGroup.Item className="item-columna-header" md="2" as={Col}> Cliente </ListGroup.Item>
                <ListGroup.Item className="item-columna-header" md="1" as={Col}> Celular </ListGroup.Item>
                <ListGroup.Item className="item-columna-header" md="4" as={Col}> Pedido </ListGroup.Item>
                <ListGroup.Item className="item-columna-header" md="1" as={Col}> Importe </ListGroup.Item>
                <ListGroup.Item className="item-columna-header-botones" md="2" as={Col}> </ListGroup.Item>
            </ListGroup>
            {paginado.size > 0 ?
                paginado.get(props.paginaActiva).map((pedido, cantidad) => (
                    <ListGroup className="item-fila" key={cantidad.toString()} horizontal>
                        <ListGroup.Item className="item-columna" md="1" as={Col}> {formatearFecha(pedido.fechaPedido)} </ListGroup.Item>
                        <ListGroup.Item className="item-columna" md="1" as={Col}> {formatearFecha(pedido.fechaEntrega)} </ListGroup.Item>
                        <ListGroup.Item className="item-columna" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
                        <ListGroup.Item className="item-columna" md="1" as={Col}> {pedido.celular} </ListGroup.Item>
                        <ListGroup.Item className="item-columna" md="4" as={Col}> {pedido.pedido} </ListGroup.Item>
                        <ListGroup.Item className="item-columna" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
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