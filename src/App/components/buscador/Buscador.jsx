import React from "react";
import { Button, ButtonGroup, Dropdown, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css"

const Buscador = () => {
    return (
        <>
            <Form className="box-buscador-pedidos-preparados">
                <Row className="row-datos-buscador" md="12">
                    <Col md="10">
                        <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..." />
                    </Col>
                    <Col md="2">
                        <Dropdown className="box-boton-buscar" md="3" as={ButtonGroup}>
                            <Button className="boton-buscar" variant="dark" type="submit">Buscar por pedido<i className="bi bi-search"></i></Button>
                            <Dropdown.Toggle className="dropdown-buscar" variant="dark" split />
                            <Dropdown.Menu className="dropdown-buscar-menu-items" variant="dark">
                                <Dropdown.Item >Pedido</Dropdown.Item>
                                <Dropdown.Item >Cliente</Dropdown.Item>
                                <Dropdown.Item >Celular</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Form>
        </>
    )
};

export default Buscador;