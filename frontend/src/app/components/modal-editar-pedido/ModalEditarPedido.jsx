import React from "react";
import { Modal, Button, Row, InputGroup, Form } from 'react-bootstrap';
import { obtenerFormatoParaMostrar, formatearFechaToISOString } from '../../utils/formateador-de-fecha.js';
import Styles from "./ModalEditarPedido.module.css"

const ModalEditarPedido = (props) => {

    const editarPedidoExistente = () => {
        let clienteNuevo = document.getElementById('editar-cliente').value;
        let celularNuevo = document.getElementById('editar-celular').value;
        let pedidoNuevo = document.getElementById('editar-pedido').value;
        let importeNuevo = document.getElementById('editar-importe').value;
        let fechaEntregaNueva = document.getElementById('editar-fecha-entrega').value;

        clienteNuevo !== "" ? props.pedidoActivo.cliente = clienteNuevo : null
        celularNuevo !== "" ? props.pedidoActivo.celular = celularNuevo : null
        pedidoNuevo !== "" ? props.pedidoActivo.pedido = pedidoNuevo : null
        importeNuevo !== "" ? props.pedidoActivo.importe = importeNuevo : null
        fechaEntregaNueva !== "" ? props.pedidoActivo.fechaEntrega = formatearFechaToISOString(fechaEntregaNueva) : null

        props.modificarPedido(props.pedidoActivo);
        props.handleClose()
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title>Editar pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props.pedidos.map((pedido, cantidad) => (
                        pedido._id === props.pedidoActivo._id ?
                            <Row className={Styles.boxInputs} key={cantidad.toString()}>
                                <InputGroup className={Styles.input} >
                                    <Form.Control className={Styles.placeholder} id="editar-cliente" placeholder={pedido.cliente} disabled />
                                    <Button className={Styles.boton} variant="dark" onClick={() => habilitarEdicion('editar-cliente')} ><i className="bi bi-pencil-square" /></Button>
                                </InputGroup>
                                <InputGroup className={Styles.input}>
                                    <Form.Control className={Styles.placeholder} id="editar-celular" placeholder={pedido.celular} disabled />
                                    <Button className={Styles.boton} variant="dark" onClick={() => habilitarEdicion('editar-celular')} ><i className="bi bi-pencil-square" /></Button>
                                </InputGroup>
                                <InputGroup className={Styles.input}>
                                    <Form.Control className={Styles.placeholder} id="editar-pedido" placeholder={pedido.pedido} disabled />
                                    <Button className={Styles.boton} variant="dark" onClick={() => habilitarEdicion('editar-pedido')} ><i className="bi bi-pencil-square" /></Button>
                                </InputGroup>
                                <InputGroup className={Styles.input}>
                                    <Form.Control className={Styles.placeholder} id="editar-importe" type="number" placeholder={pedido.importe} disabled />
                                    <Button className={Styles.boton} variant="dark" onClick={() => habilitarEdicion('editar-importe')}><i className="bi bi-pencil-square" /></Button>
                                </InputGroup>
                                <InputGroup className={Styles.input}>
                                    <Form.Control className={Styles.editarFechaEntrega} id="editar-fecha-entrega" type="date" defaultValue={obtenerFormatoParaMostrar(pedido.fechaEntrega)} disabled />
                                    <Button className={Styles.boton} variant="dark" onClick={() => habilitarEdicion('editar-fecha-entrega')} ><i className="bi bi-pencil-square" /></Button>
                                </InputGroup>
                            </Row>
                            : null
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}> Cancelar </Button>
                <Button className={Styles.botonConfirmar} variant="dark" onClick={() => editarPedidoExistente()}> Confirmar </Button>
            </Modal.Footer>
        </Modal>
    )
};

const habilitarEdicion = (habilitar) => {
    document.getElementById(habilitar).disabled = false;
}

export default ModalEditarPedido;