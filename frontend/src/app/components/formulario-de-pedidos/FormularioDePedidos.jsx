import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { formatearFechaToISOString } from '../../utils/formateador-de-fecha.js';
import ModalPedidoIngresado from '../modal-pedido-ingresado/modal-pedido-ingresado';
import Styles from './FormularioDePedidos.module.css'

const FormularioDePedidos = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [inputs, setInputs] = useState(
        {
            id: 0,
            cliente: null,
            pedido: null,
            celular: null,
            importe: 0,
            finalizado: false,
            fechaPedido: null,
            fechaEntrega: null,
            fechaBaja: null
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
            importe: data.importe,
            fechaEntrega: formatearFechaToISOString(data.fechaEntrega),
            fechaBaja: null
        });

        handleShow();
    }

    return (
        <>
            <Form className={Styles.body} onSubmit={handleSubmit(onSubmit)}>
                <Row mb={6}>
                    <Form.Group md={4} as={Col}>
                        <Form.Label> Cliente </Form.Label>
                        <Form.Control className={Styles.input} type='text' placeholder='Ingresar cliente...' {...register('cliente', { required: 'Cliente es requerido' })} />
                        <Col className={Styles.span}><span className={Styles.span}>{errors?.cliente && errors.cliente.message}</span></Col>
                    </Form.Group>
                    <Form.Group md={3} as={Col}>
                        <Form.Label> Celular </Form.Label>
                        <Form.Control className={Styles.input} type='text' placeholder='Ingresar celular...' {...register('celular', { required: 'Celular es requerido' })} />
                        <Col className={Styles.span}><span className={Styles.span}> {errors?.celular && errors.celular.message} </span></Col>
                    </Form.Group>
                    <Form.Group md={3} as={Col}>
                        <Form.Label> Fecha de Entrega </Form.Label>
                        <Form.Control className={Styles.input} type='date' placeholder='Ingresar fecha de entrega...' {...register('fechaEntrega', { required: 'Fecha de entrega es requerida' })} />
                        <Col className={Styles.span}><span className={Styles.span}> {errors?.fechaEntrega && errors.fechaEntrega.message} </span></Col>
                    </Form.Group>
                    <Form.Group md={2} as={Col}>
                        <Form.Label> Importe </Form.Label>
                        <Form.Control className={Styles.input} type='number' placeholder='Ingresar importe...' {...register('importe', { required: 'Importe es requerido' })} />
                        <Col className={Styles.span}><span className={Styles.span}>{errors?.importe && errors.importe.message}</span></Col>
                    </Form.Group>
                </Row>
                <Row mb={6}>
                    <Form.Group as={Col}>
                        <Form.Label> Pedido </Form.Label>
                        <Form.Control className={Styles.input} type='text' placeholder='Ingresar pedido...' {...register('pedido', { required: 'Pedido es requerido' })} />
                        <Col className={Styles.span}><span className={Styles.span}>{errors?.pedido && errors.pedido.message}</span></Col>
                    </Form.Group>
                </Row>
                <Row className={Styles.rowBoton}>
                    <Button className={Styles.boton} variant='dark' type='submit'><i className='bi bi-plus-circle'></i> Ingresar pedido </Button>
                </Row>
            </Form>
            <ModalPedidoIngresado inputs={inputs} show={show} agregarPedido={props.agregarPedido} handleClose={handleClose} />
        </>
    )
};

export default FormularioDePedidos;