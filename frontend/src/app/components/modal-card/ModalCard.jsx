import React from "react";
import { Modal, Button, Row, Image, Card } from 'react-bootstrap';
import Styles from "./ModalCard.module.css";

const RUTA_PORTADAS = require.context('../../img', true);

const ModalCard = (props) => {
    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header} />
            <Modal.Body className={Styles.body}>
                {props.moduloActivo.portada ? <Row><Image className={Styles.image} src={RUTA_PORTADAS(`./${props.moduloActivo.portada}`)} rounded /></Row> : <></>}
                <Row className={Styles.titulo}>{props.moduloActivo.titulo}</Row>
                {props.moduloActivo.descripcion ? <Row>{props.moduloActivo.descripcion}</Row> : <Row> Sin descripcion </Row>}
            </Modal.Body>
            <Modal.Footer className={Styles.footer}>
                <Button variant="secondary" onClick={props.handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalCard;