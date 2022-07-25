import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import "./ListaDeLibros.css"

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    return (
        <Row xs={1} md={4} className="lista-modulos">
            {props.biblioteca.map((modulo, indice) => (
                <Col key={indice}>
                    <Card className="modulo">
                        <Card.Img variant="top" src={RUTA_PORTADAS(modulo.portada)} />
                        <Card.Body>
                            <Card.Title>{modulo.titulo}</Card.Title>
                            <Card.Text>{modulo.descripcion}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ListaDeLibros;