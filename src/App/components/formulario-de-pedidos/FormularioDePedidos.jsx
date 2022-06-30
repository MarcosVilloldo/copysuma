import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Button, Form, Row, Col } from 'react-bootstrap';
import ModalPedidoIngresado from "../modal-pedido-ingresado/modal-pedido-ingresado";

import "./FormularioDePedidos.css"

const inputsDefault = {
    id: 0,
    cliente: null,
    pedido: null,
    celular: null,
    importe: 0,
    finalizado: false, 
    fecha: null
}

const FormularioDePedidos = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [inputs, setInputs] = useState(inputsDefault);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        setInputs({
            ...inputs,
            cliente: data.cliente,
            pedido: data.pedido,
            celular: data.celular,
            importe: data.importe,
            finalizado: false
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
                            <Form.Control className="input-formulario-cliente" type="text" placeholder="Ingresar cliente..." name="cliente" {...register('cliente', { required: "Cliente es requerido" })} />
                            <div className="span-formulario"><span className="span-formulario text-danger"> {errors?.cliente && errors.cliente.message} </span></div>
                        </Form.Group>
                        <Form.Group className="dato-formulario" md="3" as={Col} >
                            <Form.Label>Celular</Form.Label>
                            <Form.Control className="input-formulario-celular" type="text" placeholder="Ingresar celular..." name="celular" {...register('celular', { required: "Celular es requerido" })} />
                            <div className="span-formulario"><span className="span-formulario text-danger"> {errors?.celular && errors.celular.message} </span></div>
                        </Form.Group>
                        <Form.Group className="dato-formulario" md="3" as={Col} >
                            <Form.Label>Importe</Form.Label>
                            <Form.Control className="input-formulario-importe" type="number" placeholder="Ingresar importe..." name="importe" {...register('importe', { required: "Importe es requerido" })} />
                            <div className="span-formulario"> <span className="text-danger"> {errors?.importe && errors.importe.message} </span></div>
                        </Form.Group>
                    </Row>
                    <Form.Group className="dato-formulario">
                        <Form.Label>Pedido</Form.Label>
                        <Form.Control className="input-formulario-pedido" type="text" placeholder="Ingresar pedido..." name="pedido" {...register('pedido', { required: "Pedido es requerido" })} />
                        <div className="span-formulario"><span className="span-formulario text-danger"> {errors?.pedido && errors.pedido.message} </span></div>
                    </Form.Group>
                    <Form.Group className="box-boton-formulario-pedidos">
                        <Button className="boton-formulario-pedidos" variant="dark" type="submit"><i className="bi bi-plus-circle"></i> Ingresar pedido </Button>
                    </Form.Group>
                </Form>
                <ModalPedidoIngresado inputs={inputs} show={show} agregarPedido={props.agregarPedido} handleClose={handleClose} />
            </div>
        </>
    )
};

export default FormularioDePedidos;