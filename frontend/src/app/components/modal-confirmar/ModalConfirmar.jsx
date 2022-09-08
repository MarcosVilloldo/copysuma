import React from "react";
import { Modal, Button, Row, InputGroup, Form } from 'react-bootstrap';
import Styles from "./ModalConfirmar.module.css"

const ModalConfirmar = (props) => {

    const prepararPedido = () => {
        props.prepararPedido(props.pedidoActivo._id);
        props.handleClose();
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title>Confirmar pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}> Cancelar </Button>
                <Button className={Styles.boton} variant="dark" onClick={() => prepararPedido()}> Confirmar </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalConfirmar;