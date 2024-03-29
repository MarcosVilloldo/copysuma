import React, { useState } from "react";
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import ModalEditarPedido from "../modal-editar-pedido/ModalEditarPedido.jsx";
import ModalConfirmar from "../modal-confirmar/ModalConfirmar.jsx";
import Styles from "./ListaDePedidos.module.css";

const ListaDePedidos = (props) => {
    const paginado = obtenerPaginado(props.pedidos, props.paginas);

    const [pedidoActivo, setPedidoActivo] = useState({});
    const [show, setShow] = useState(false);
    const [showModalConfirmar, setShowModalConfirmar] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModalConfirmar = () => setShowModalConfirmar(false);
    const handleShowModalConfirmar = () => setShowModalConfirmar(true);

    const mostrarModalEditarPedido = (data) => {
        setPedidoActivo(data);
        handleShow();
    }

    const mostrarModalConfirmar = (data) => {
        setPedidoActivo(data);
        handleShowModalConfirmar();
    }

    return (
        <Container className={Styles.contenedor}>
            <ListGroup className={props.StylesTabla.itemFila} horizontal>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={1} as={Col}> Ingresado </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={1} as={Col}> Entrega </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={2} as={Col}> Cliente </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={1} as={Col}> Celular </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={4} as={Col}> Pedido </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={1} as={Col}> Importe </ListGroup.Item>
                <ListGroup.Item className={Styles.itemColumnaHeaderBotones} md={2} as={Col}> </ListGroup.Item>
            </ListGroup>
            {paginado.size > 0 ?
                paginado.get(props.paginaActiva).map((pedido, cantidad) => (
                    <ListGroup className={props.StylesTabla.itemFila} key={cantidad.toString()} horizontal>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={1} as={Col}> {formatearFecha(pedido.fechaPedido)} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={1} as={Col}> {formatearFecha(pedido.fechaEntrega)} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={2} as={Col}> {pedido.cliente} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={1} as={Col}> {pedido.celular} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={4} as={Col}> {pedido.pedido} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={1} as={Col}> $ {pedido.importe} </ListGroup.Item>
                        <ListGroup.Item className={Styles.itemColumnaBotones} md={2} as={Col}>
                            <Row className={Styles.botonera} md={12}>
                                <Col className={Styles.boxBotonEditar} md={4}>
                                    <Button className={Styles.botonEditar} variant={'dark'} onClick={() => mostrarModalEditarPedido(pedido)}>Editar</Button>
                                </Col>
                                <Col className={Styles.boxBotonPreparar} md={8}>
                                    {pedido.finalizado === false
                                        ? <Button className={Styles.botonPreparar} variant={'dark'} onClick={() => mostrarModalConfirmar(pedido)}>Preparar</Button>
                                        : <Button className={Styles.botonPreparar} variant={'dark'} disabled>Preparado</Button>
                                    }
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                )) : null
            }
            <ModalEditarPedido pedidos={props.pedidos} pedidoActivo={pedidoActivo} modificarPedido={props.modificarPedido} show={show} handleClose={handleClose} />
            <ModalConfirmar pedidoActivo={pedidoActivo} accion={'preparar'} confirmar={props.prepararPedido} show={showModalConfirmar} handleClose={handleCloseModalConfirmar} />
        </Container>
    );
};

export default ListaDePedidos;