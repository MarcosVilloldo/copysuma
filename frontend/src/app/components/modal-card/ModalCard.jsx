import React from "react";
import { Modal, Button, Row, Image } from 'react-bootstrap';
import Styles from "./ModalCard.module.css";

const RUTA_PORTADAS = require.context('../../img', true);

const ModalCard = (props) => {
    return (
        <Modal show={props.show} size={'lg'} backdrop='static' keyboard={false} centered>
            <Modal.Body>
                {props.moduloActivo.portada ? <Image src={RUTA_PORTADAS(`./${props.moduloActivo.portada}`)}></Image> : <></>}
                <Row className={Styles.descripcion}>Descripción</Row>
                <Row>{props.moduloActivo.descripcion}</Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalCard;