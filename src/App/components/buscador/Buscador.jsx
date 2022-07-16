import React from "react";
import { useForm } from 'react-hook-form'
import { Button, ButtonGroup, Dropdown, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css"

const Buscador = (props) => {
    const { handleSubmit } = useForm();

    const handleInputChange = (event) => props.filtrar(event.target.value);

    const onSubmit = () => {};

    return (
        <Form className="box-buscador" onSubmit={handleSubmit(onSubmit)}>
            <Row className="row-datos-buscador">
                <Col md="10">
                    <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..." onChange={handleInputChange} />
                </Col>
                <Col md="2">
                    <Dropdown className="box-boton-buscar" as={ButtonGroup}>
                        <Button className="boton-buscar" variant="dark" type="submit">Buscar por {props.filtroDeBusqueda}<i className="bi bi-search"></i></Button>
                        <Dropdown.Toggle className="dropdown-buscar" variant="dark" split />
                        <Dropdown.Menu className="dropdown-buscar-menu-items" variant="dark">
                            {props.filtros.map((filtro, indice) => <Dropdown.Item onClick={() => props.modificarFiltroBusqueda(filtro)} key={indice.toString()}>{filtro}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Form>
    )
};

export default Buscador;