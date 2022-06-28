import React from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css"

const Buscador = () => {
    return (
        <>
            <Form className="box-buscador-pedidos-preparados">
                <Row className="row-datos-buscador" md="12">
                    <Form.Group md="11" as={Col} >
                        <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..." />
                    </Form.Group>
                    <Form.Group className="box-boton-buscar" md="1" as={Col} >
                        <Button className="boton-buscar" variant="dark" type="submit"> Buscar <i className="bi bi-search"></i></Button>
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
};

export default Buscador;