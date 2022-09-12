import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { formatearTexto } from '../../utils/formateador-de-texto.js';
import ModalAgregarModulo from "../modal-agregar-modulo/ModalAgregarModulo";
import ModalCard from "../modal-card/ModalCard";
import Styles from "./ListaDeLibros.module.css";

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    const [show, setShow] = useState(false);
    const [showcard, setShowCard] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = (reset) => {
        setShow(false)
        reset();
    };

    const handleShowCard = () => setShowCard(true);
    const handleCloseCard = () => setShowCard(false);

    return (
        <>
            <Row md={4} className={Styles.body}>
                {props.biblioteca.slice(0, 7).map((modulo, indice) => (
                    <Col key={indice}>
                        <Card className={Styles.modulo} key={indice}>
                            <Card.Img variant="top" src={RUTA_PORTADAS(`./${modulo.portada}`)} />
                            <Card.Body onClick={() => handleShowCard()}>
                                <Card.Title>{modulo.titulo}</Card.Title>
                                <Card.Text>{formatearTexto(modulo.descripcion)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col>
                    <Card className={Styles.modulo}>
                        <Card.Body className={Styles.bodyCard} onClick={() => handleShow()}>
                            <i className={'bi bi-plus'}></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalAgregarModulo show={show} handleClose={handleClose} agregarModulo={props.agregarModulo}/>
            <ModalCard show={showcard} handleClose={handleCloseCard}/>
        </>
    );
};

export default ListaDeLibros;