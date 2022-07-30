import React from 'react';
import { Dropdown, Form, Row, Col } from 'react-bootstrap';
import StylesBuscador from './Buscador.module.css';

const Buscador = (props) => {
    const handleInputChange = (event) => props.filtrar(event.target.value);

    return (
        <Row className={StylesBuscador.body}>
            <Col md={9}>
                <Form.Control className={StylesBuscador.input} type='text' placeholder='Ingresar busqueda...' onChange={handleInputChange} />
            </Col>
            <Col md={3}>
                <Dropdown align='end' as={Row}>
                    <Dropdown.Toggle className={StylesBuscador.boton} variant='dark'> Buscar por {props.filtroDeBusqueda}</Dropdown.Toggle>
                    <Dropdown.Menu className={StylesBuscador.dropdownMenu} variant='dark'>
                        {props.filtros.map((filtro, indice) =>
                            <Dropdown.Item className={StylesBuscador.dropdownMenuItem} onClick={() => props.modificarFiltroBusqueda(filtro)} key={indice.toString()}>{filtro}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    )
};

export default Buscador;