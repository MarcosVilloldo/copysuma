import React from "react";
import { Modal, Button } from 'react-bootstrap';

const ModalPedidoIngresado = (props) => {

    const ingresarPedido = () => {
        props.agregarPedido(props.inputs)
        props.handleClose();
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Pedido ingresado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><b>Cliente: </b>{props.inputs.cliente}</p>
                <p><b>Pedido:  </b>{props.inputs.pedido} </p>
                <p><b>Celular: </b>{props.inputs.celular}</p>
                <p><b>Importe: </b>{props.inputs.importe}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => ingresarPedido()}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalPedidoIngresado;