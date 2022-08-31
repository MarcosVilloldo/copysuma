import React from "react";
import { Modal, Button } from 'react-bootstrap';
import FormularioDeModulos from "../formulario-de-modulos/FormularioDeModulos";

const ModalAgregarModulo = (props) => {

    const ingresarModulo = () => {
        props.handleClose();
    }

    return (
        <Modal show={props.show} size={'lg'} backdrop='static' keyboard={false} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregar modulo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormularioDeModulos />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => ingresarModulo()}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAgregarModulo;