import React from "react";
import { Modal, Button } from 'react-bootstrap';
import FormularioDeModulos from "../formulario-de-modulos/FormularioDeModulos";
import Styles from './ModalAgregarModulo.module.css';

const ModalAgregarModulo = (props) => {

    const ingresarModulo = () => {
        props.handleClose();
    }

    return (
        <Modal show={props.show} size={'lg'} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title>Agregar modulo</Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.body}>
                <FormularioDeModulos />
            </Modal.Body>
            <Modal.Footer className={Styles.footer}>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}>Cancelar</Button>
                <Button className={Styles.boton} variant="dark" onClick={() => ingresarModulo()}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAgregarModulo;