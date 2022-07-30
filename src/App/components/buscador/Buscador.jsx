import React from 'react';
import { Dropdown, Form, Row, Col } from 'react-bootstrap';
import StylesBuscador from './Buscador.module.css';

const Buscador = (props) => {
    const handleInputChange = (event) => props.filtrar(event.target.value);

    return (
        <Col className={StylesBuscador.body}>
            <Row className={StylesBuscador.rowBody}>
                <Col md={10}>
                    <Form.Control className={StylesBuscador.input} type="text" placeholder="Ingresar busqueda..." onChange={handleInputChange} />
                </Col>
                <Col md={2}>
                    <Dropdown className={StylesBuscador.boxBotonBuscar} align='end'>
                        <Dropdown.Toggle className={StylesBuscador.botonBuscar} variant="dark"> Buscar por {props.filtroDeBusqueda}</Dropdown.Toggle>
                        <Dropdown.Menu className={StylesBuscador.dropdownBuscarMenuItems} variant="dark">
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