import React from "react";
import { Dropdown, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css";

const Buscador = (props) => {
    const handleInputChange = (event) => props.filtrar(event.target.value);

    return (
        <Col className="box-buscador">
            <Row className="row-datos-buscador">
                <Col md="10">
                    <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..." onChange={handleInputChange} />
                </Col>
                <Col md="2">
                    <Dropdown className="box-boton-buscar" align='end'>
                        <Dropdown.Toggle className="boton-buscar" variant="dark"> Buscar por {props.filtroDeBusqueda}</Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-buscar-menu-items" variant="dark">
                            {props.filtros.map((filtro, indice) =>
                                <Dropdown.Item onClick={() => props.modificarFiltroBusqueda(filtro)} key={indice.toString()}>{filtro}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Col>
    )
};

export default Buscador;