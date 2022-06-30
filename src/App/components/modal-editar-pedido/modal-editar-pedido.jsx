import React from "react";
import { Modal, Button, Row, InputGroup, Form } from 'react-bootstrap';

import "./modal-editar-pedido.css"

const ModalEditarPedido = (props) => {
    return (
        <Modal show={props.show} backdrop='static' keyboard={false} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="titulo-modal-editar-pedido">Editar pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    props.pedidos.map((pedido, cantidad) => (
                        pedido.id === props.pedidoActivo ?
                            <Row className="box-inputs-editar-pedido" md="12" key={cantidad.toString()}>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-cliente" aria-describedby="basic-addon1" placeholder={pedido.cliente} disabled/>
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-cliente')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-celular" aria-describedby="basic-addon1" placeholder={pedido.celular} disabled/>
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-celular')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control id="editar-pedido" aria-describedby="basic-addon1" placeholder={pedido.pedido} disabled/>
                                    <Button variant="dark"  onClick={() => habilitarEdicion('editar-pedido')} > Editar </Button>
                                </InputGroup>
                                <InputGroup className="input-editar-pedido" mb="3">
                                    <Form.Control  id="editar-importe" aria-describedby="basic-addon1" placeholder={pedido.importe} disabled/>
                                    <Button variant="dark" onClick={() => habilitarEdicion('editar-importe')}> Editar </Button>
                                </InputGroup>
                            </Row>
                            : null
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button className="boton-modal-editar-pedido" variant="dark" > Confirmar </Button>
            </Modal.Footer>
        </Modal>
    )
};

const habilitarEdicion = (habilitar) => {
    document.getElementById(habilitar).disabled = false;
}

export default ModalEditarPedido;