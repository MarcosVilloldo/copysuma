import React from 'react';
import { Dropdown, Form, Container, Row, Col } from 'react-bootstrap';
import Styles from './Buscador.module.css';

const Buscador = (props) => {
    const handleInputChange = (event) => props.filtrar(event.target.value);

    return (
        <Container className={Styles.contenedor}>
            <Col className={Styles.input}>
                <Form.Control className={Styles.texto} type='text' placeholder='Ingresar busqueda...' onChange={handleInputChange} />
            </Col>
            <Col className={Styles.boton}>
                <Dropdown align='end' as={Row}>
                    <Dropdown.Toggle className={Styles.dropdownToggle} variant='dark'> Buscar por {props.filtroDeBusqueda}</Dropdown.Toggle>
                    <Dropdown.Menu className={Styles.dropdownMenu} variant='dark'>
                        {props.filtros.map((filtro, indice) =>
                            <Dropdown.Item className={Styles.dropdownMenuItem} onClick={() => props.modificarFiltroBusqueda(filtro)} key={indice.toString()}>{filtro}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Container>
    )
};

export default Buscador;