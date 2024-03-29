import React from "react";
import { Modal, Button, Row, Col } from 'react-bootstrap';
import Styles from "./ModalConfirmar.module.css"

const ModalConfirmar = (props) => {

    const confirmar = () => {
        props.confirmar(props.pedidoActivo._id);
        props.handleClose();
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title> <i className="bi bi-check-circle-fill"></i> </Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.body}>
                <Row className={Styles.pregunta}> ¿ Quiere {props.accion} el pedido "{props.pedidoActivo.pedido}" ? </Row>
            </Modal.Body>
            <Modal.Footer className={Styles.footer}>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}> Cancelar </Button>
                <Button className={Styles.boton} variant="dark" onClick={() => confirmar()}> Confirmar </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalConfirmar;