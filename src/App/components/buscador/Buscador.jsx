import React, {useState} from "react";
import { useForm } from 'react-hook-form'
import { Button, ButtonGroup, Dropdown, Form, Row, Col } from 'react-bootstrap';
import "./Buscador.css"

const Buscador = () => {
    const { register, handleSubmit } = useForm();

    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState('pedido');

    const onSubmit = (data) => {
        console.log(data.busqueda);
        console.log(filtroDeBusqueda);
    }

    return (
        <>
            <Form className="box-buscador-pedidos-preparados"onSubmit={handleSubmit(onSubmit)}>
                <Row className="row-datos-buscador" md="12">
                    <Col md="10">
                        <Form.Control className="input-buscador" type="text" placeholder="Ingresar busqueda..."  {...register('busqueda')}/>
                    </Col>
                    <Col md="2">
                        <Dropdown className="box-boton-buscar" md="3" as={ButtonGroup}>
                            <Button className="boton-buscar" variant="dark" type="submit">Buscar por {filtroDeBusqueda}<i className="bi bi-search"></i></Button>
                            <Dropdown.Toggle className="dropdown-buscar" variant="dark" split />
                            <Dropdown.Menu className="dropdown-buscar-menu-items" variant="dark">
                                <Dropdown.Item onClick={() => setFiltroDeBusqueda('pedido')}>Pedido</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFiltroDeBusqueda('cliente')}>Cliente</Dropdown.Item>
                                <Dropdown.Item onClick={() => setFiltroDeBusqueda('celular')}>Celular</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Form>
        </>
    )
};

export default Buscador;