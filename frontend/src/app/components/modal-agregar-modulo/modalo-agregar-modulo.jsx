import React from "react";
import { Modal, Button } from 'react-bootstrap';

const ModalPedidoIngresado = (props) => {

    const ingresarPedido = () => {
        props.handleClose();
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => ingresarPedido()}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalPedidoIngresado;