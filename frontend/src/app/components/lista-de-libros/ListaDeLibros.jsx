import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { formatearTexto } from '../../utils/formateador-de-texto.js';
import Styles from "./ListaDeLibros.module.css"

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    return (
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
        </Row>
    );
};

export default ListaDeLibros;