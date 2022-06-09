import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import "./ListaDeLibros.css"

import imagen from '../../img/imagen-prueba.png'

const ListaDeLibros = () => {

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 7 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={imagen} />
                            <Card.Body>
                            <Card.Title>El señor de los anillos</Card.Title>
                            <Card.Text>
                                Novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>        
        </>
    );
};


export default ListaDeLibros;