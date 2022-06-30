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
                            <Form key={cantidad.toString()}>
                                <Row className="box-inputs-editar-pedido" md="12">
                                    <InputGroup className="input-editar-pedido" mb="3">
                                        <Form.Control aria-describedby="basic-addon1" placeholder={pedido.cliente} disabled/>
                                        <Button variant="dark" id="button-addon1"> Editar </Button>
                                    </InputGroup>
                                    <InputGroup className="input-editar-pedido" mb="3">
                                        <Form.Control aria-describedby="basic-addon1" placeholder={pedido.celular} disabled/>
                                        <Button variant="dark" id="button-addon1"> Editar </Button>
                                    </InputGroup>
                                    <InputGroup className="input-editar-pedido" mb="3">
                                        <Form.Control aria-describedby="basic-addon1" placeholder={pedido.pedido} disabled/>
                                        <Button variant="dark" id="button-addon1"> Editar </Button>
                                    </InputGroup>
                                    <InputGroup className="input-editar-pedido" mb="3">
                                        <Form.Control aria-describedby="basic-addon1" placeholder={pedido.importe} disabled/>
                                        <Button variant="dark" id="button-addon1"> Editar </Button>
                                    </InputGroup>
                                </Row>
                            </Form>
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

export default ModalEditarPedido;