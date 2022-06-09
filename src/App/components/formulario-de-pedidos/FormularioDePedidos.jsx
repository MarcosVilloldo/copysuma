import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import "./FormularioDePedidos.css"

const FormularioDePedidos = (props) => {
    const { register, errors, handleSubmit } = useForm();

    const [inputs, setInputs] = useState(
        {
            cliente: null,
            pedido: null,
            celular: null,
            importe: 0
        }
    );

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        setInputs({
            ...inputs,
            cliente: data.cliente,
            pedido: data.pedido,
            celular: data.celular,
            importe: data.importe
        });

        handleShow();
    }

    return (
        <>
            <div className="box-formulario">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="row-datos-formulario" md="12" as={Col}>
                        <Form.Group className="dato-formulario" md="6" as={Col} >
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control className="input-formulario-cliente" type="text" {...register('cliente')} />
                        </Form.Group>
                        <Form.Group className="dato-formulario" md="3" as={Col} >
                            <Form.Label>Celular</Form.Label>
                            <Form.Control className="input-formulario-celular" type="text" {...register('celular')} />
                        </Form.Group>
                        <Form.Group className="dato-formulario" md="3" as={Col} >
                            <Form.Label>Importe</Form.Label>
                            <Form.Control className="input-formulario-importe" type="number" {...register('importe')} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="dato-formulario">
                        <Form.Label>Pedido</Form.Label>
                        <Form.Control className="input-formulario-pedido" type="text" {...register('pedido')} />
                    </Form.Group>
                    <Form.Group className="box-boton-formulario-pedidos">
                        <Button className="boton-formulario-pedidos" variant="dark" type="submit"> Ingresar pedido </Button>
                    </Form.Group>
                </Form>
                {mostrarInformacionPedidoNuevo(inputs, show, props.agregarPedido, handleClose)}
            </div>
        </>
    )
};

const mostrarInformacionPedidoNuevo = (inputs, isVisible, agregarPedido, handleClose) => {
    return (
        <>
            <Modal show={isVisible} backdrop='static' keyboard={false} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pedido ingresado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>Cliente: </b>{inputs.cliente}</p>
                    <p><b>Pedido:  </b>{inputs.pedido} </p>
                    <p><b>Celular: </b>{inputs.celular}</p>
                    <p><b>Importe: </b>{inputs.importe}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => ingresarPedido(inputs, agregarPedido, handleClose)}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

const ingresarPedido = (inputs, agregarPedido, handleClose) => {
    agregarPedido(inputs)
    handleClose();
}

export default FormularioDePedidos;