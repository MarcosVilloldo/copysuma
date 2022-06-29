import React from "react";
import { Modal, Button } from 'react-bootstrap';

const ModalEditarPedido = (props) => {
    return (
        <Modal show={props.show} backdrop='static' keyboard={false} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" >Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalEditarPedido;