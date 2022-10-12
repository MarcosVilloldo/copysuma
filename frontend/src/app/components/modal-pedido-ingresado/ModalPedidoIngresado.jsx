import React from "react";
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import Styles from './ModalPedidoIngresado.module.css'

const ModalPedidoIngresado = (props) => {

    const ingresarPedido = () => {
        props.agregarPedido(props.inputs)
        props.handleClose();
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title>Pedido ingresado</Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.body}>
                <Row className={Styles.row}>
                    <Col className={Styles.dato} xs={5}>Cliente:</Col>
                    <Col xs={7}>{props.inputs.cliente}</Col>
                </Row>
                <Row className={Styles.row}>
                    <Col className={Styles.dato} xs={5}>Celular:</Col>
                    <Col xs={7}>{props.inputs.celular}</Col>
                </Row>
                <Row className={Styles.row}>
                    <Col className={Styles.dato} xs={5}>Pedido:</Col>
                    <Col xs={7}>{props.inputs.pedido}</Col>
                </Row>
                <Row className={Styles.row}>
                    <Col className={Styles.dato} xs={5}>Importe:</Col>
                    <Col xs={7}>$ {props.inputs.importe}</Col>
                </Row>
                <Row className={Styles.row}>
                    <Col className={Styles.dato} xs={5}>Fecha de entrega:</Col>
                    <Col xs={7}>{formatearFecha(props.inputs.fechaEntrega)}</Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}>Cancelar</Button>
                <Button className={Styles.boton} variant="dark" onClick={() => ingresarPedido()}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalPedidoIngresado;