import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Button, ButtonGroup, Dropdown, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css"

const Buscador = (props) => {
    const { register, handleSubmit } = useForm();
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(props.filtros[0]);

    const onSubmit = (data) => props.filtrar(data.busqueda, filtroDeBusqueda);

    return (
        <Form className="box-buscador" onSubmit={handleSubmit(onSubmit)}>
            <Row className="row-datos-buscador">
                <Col md="10">
                    <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..." {...register('busqueda')} />
                </Col>
                <Col md="2">
                    <Dropdown className="box-boton-buscar" as={ButtonGroup}>
                        <Button className="boton-buscar" variant="dark" type="submit">Buscar por {filtroDeBusqueda}<i className="bi bi-search"></i></Button>
                        <Dropdown.Toggle className="dropdown-buscar" variant="dark" split />
                        <Dropdown.Menu className="dropdown-buscar-menu-items" variant="dark">
                            {props.filtros.map((filtro, indice) => <Dropdown.Item onClick={() => setFiltroDeBusqueda(filtro)} key={indice.toString()}>{filtro}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Form>
    )
};

export default Buscador;