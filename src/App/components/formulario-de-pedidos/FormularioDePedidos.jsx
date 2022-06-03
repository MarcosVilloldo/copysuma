import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Modal, Button } from 'react-bootstrap';
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
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
                <form className="col-md-12 row formulario" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-3 dato-formulario">
                        <label className="col-form-label"> Cliente:
                            <input className="form-control input-formulario" type="text" {...register('cliente')} />
                        </label>
                    </div>
                    <div className="col-md-3 dato-formulario">
                        <label className="col-form-label "> Pedido:
                            <input className="form-control input-formulario" type="text" {...register('pedido')} />
                        </label>
                    </div>
                    <div className="col-md-3 dato-formulario">
                        <label className="col-form-label"> Celular:
                            <input className="form-control input-formulario" type="text" {...register('celular')} />
                        </label>
                    </div>
                    <div className="col-md-3 dato-formulario">
                        <label className="col-form-label"> Importe:
                            <input className="form-control input-formulario" type="number" {...register('importe')} />
                        </label>
                    </div>
                    <div className="col-md-12 box-boton-formulario-pedidos">
                        <Button className="boton-formulario-pedidos" variant="dark" type="submit"> Ingresar pedido </Button>
                    </div>
                </form>
                {mostrarInformacionPedidoNuevo(inputs, show, handleClose)}
            </div>
        </>
    )
};

const mostrarInformacionPedidoNuevo = (inputs, isVisible, handleClose) => {
    return (
        <>
            <Modal show={isVisible} backdrop='static' keyboard={false} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Pedido ingresado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>Cliente: </b>{inputs.cliente}</p>
                    <p><b>Pedido:  </b>{inputs.pedido} </p>
                    <p><b>Celular: </b>{inputs.celular}</p>
                    <p><b>Importe: </b>{inputs.importe}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default FormularioDePedidos;