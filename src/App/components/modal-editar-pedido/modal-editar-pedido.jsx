import React from "react";
import { Modal, Button, Row, InputGroup, Form } from 'react-bootstrap';

import "./modal-editar-pedido.css"

const ModalEditarPedido = (props) => {

    const editarPedidoExistente = () => {
        let clienteNuevo = document.getElementById('editar-cliente').value;
        let celularNuevo = document.getElementById('editar-celular').value;
        let pedidoNuevo = document.getElementById('editar-pedido').value;
        let importeNuevo = document.getElementById('editar-importe').value;

        clienteNuevo !== "" ? props.pedidoActivo.cliente = clienteNuevo : null
        celularNuevo !== "" ? props.pedidoActivo.celular = celularNuevo : null
        pedidoNuevo !== "" ? props.pedidoActivo.pedido = pedidoNuevo : null
        importeNuevo !== "" ? props.pedidoActivo.importe = importeNuevo : null

        props.handleClose()
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="titulo-modal-editar-pedido">Editar pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props.pedidos.map((pedido, cantidad) => (
                        pedido.id === props.pedidoActivo.id ?
                            <Row className="box-inputs-editar-pedido" md="12" key={cantidad.toString()}>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-cliente" placeholder={pedido.cliente} disabled />
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-cliente')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-celular" placeholder={pedido.celular} disabled />
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-celular')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-pedido" placeholder={pedido.pedido} disabled />
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-pedido')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-importe" type="number" placeholder={pedido.importe} disabled />
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-importe')}> Editar </Button>
                                </InputGroup>
                            </Row>
                            : null
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button className="boton-modal-editar-pedido" variant="dark" onClick={() => editarPedidoExistente()}> Confirmar </Button>
            </Modal.Footer>
        </Modal>
    )
};

const habilitarEdicion = (habilitar) => {
    document.getElementById(habilitar).disabled = false;
}

export default ModalEditarPedido;