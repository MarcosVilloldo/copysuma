import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import "./ListaDeLibros.css"

const RUTA_PORTADAS = require.context('../../img', true);

const ListaDeLibros = (props) => {
    return (
        <Row xs={1} md={4} className="g-4">
            {props.biblioteca.map((producto, indice) => (
                <Col key={indice}>
                    <Card >
                        <Card.Img variant="top" src={RUTA_PORTADAS(producto.portada)} />
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                            <Card.Text>{producto.descripcion}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};


export default ListaDeLibros;