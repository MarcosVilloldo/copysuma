import React from "react";
import printJS from 'print-js';
import { Modal, Button, Row, Image } from 'react-bootstrap';
import Styles from "./ModalCard.module.css";

const RUTA_PORTADAS = require.context('../../img', true);
const RUTA_PDF = require.context('C:/Users/Administrator/Desktop/uploads', true);

const ModalCard = (props) => {

    const imprimir = () => {
        props.obtenerModulo(props.moduloActivo);
        printJS(RUTA_PDF('./prueba.pdf'));
    }

    return (
        <Modal show={props.show} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header} />
            <Modal.Body className={Styles.body}>
                {props.moduloActivo.portada ? <Row><Image className={Styles.image} src={RUTA_PORTADAS(`./${props.moduloActivo.portada}`)} rounded /></Row> : <></>}
                <Row className={Styles.titulo}>{props.moduloActivo.titulo}</Row>
                <Row className={Styles.descripcion}>{props.moduloActivo.descripcion}</Row>
            </Modal.Body>
            <Modal.Footer className={Styles.footer}>
                <Button className={Styles.boton} variant="dark" onClick={() => imprimir()}><i className="bi bi-printer-fill" /></Button>
                <Button className={Styles.boton} variant="dark" onClick={props.handleClose}><i className="bi bi-x-lg" /></Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalCard;