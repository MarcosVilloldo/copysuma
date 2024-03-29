import React, { useState } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { formatearTexto } from '../../utils/formateador-de-texto.js';
import ModalAgregarModulo from "../modal-agregar-modulo/ModalAgregarModulo";
import ModalCard from "../modal-card/ModalCard";
import Styles from "./ListaDeLibros.module.css";

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    const [moduloActivo, setModuloActivo] = useState({});
    const [show, setShow] = useState(false);
    const [showcard, setShowCard] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = (reset) => {
        setShow(false)
        reset();
    };

    const handleShowCard = () => setShowCard(true);
    const handleCloseCard = () => setShowCard(false);

    const mostrarModalCard = (data) => {
        setModuloActivo(data);
        handleShowCard();
    }

    return (
        <Container>
            <Row md={4} className={Styles.body}>
                {props.biblioteca.slice(0, 7).map((modulo, indice) => (
                    <Col className={Styles.card} key={indice}>
                        <Card className={Styles.modulo} key={indice} onClick={() => mostrarModalCard(modulo)}>
                            <Card.Img variant="top" src={RUTA_PORTADAS(`./${modulo.portada}`)} />
                            <Card.Body>
                                <Card.Title>{modulo.titulo}</Card.Title>
                                <Card.Text>{formatearTexto(modulo.descripcion)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col className={Styles.cardAgregar}>
                    <Card className={Styles.modulo} onClick={() => handleShow()}>
                        <Card.Body className={Styles.bodyCard} >
                            <i className={'bi bi-plus'}></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalAgregarModulo show={show} handleClose={handleClose} agregarModulo={props.agregarModulo} />
            <ModalCard show={showcard} handleClose={handleCloseCard} moduloActivo={moduloActivo} />
        </Container>
    );
};

export default ListaDeLibros;