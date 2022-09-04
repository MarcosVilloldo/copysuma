import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { formatearTexto } from '../../utils/formateador-de-texto.js';
import ModalAgregarModulo from "../modal-agregar-modulo/ModaloAgregarModulo";
import Styles from "./ListaDeLibros.module.css"

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onClick = () => {
        handleShow();
    }

    return (
        <>
            <Row md={4} className={Styles.body}>
                {props.biblioteca.map((modulo, indice) => (
                    <Col key={indice}>
                        <Card className={Styles.modulo} key={indice}>
                            <Card.Img variant="top" src={RUTA_PORTADAS(modulo.portada)} />
                            <Card.Body>
                                <Card.Title>{modulo.titulo}</Card.Title>
                                <Card.Text>{formatearTexto(modulo.descripcion)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col>
                    <Card className={Styles.modulo}>
                        <Card.Body className={Styles.bodyCard} onClick={onClick}>
                            <i className={'bi bi-plus'}></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalAgregarModulo show={show} handleClose={handleClose} />
        </>
    );
};

export default ListaDeLibros;