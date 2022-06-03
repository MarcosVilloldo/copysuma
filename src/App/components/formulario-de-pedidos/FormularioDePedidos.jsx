import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
    const {register, errors, handleSubmit} = useForm();

    const [inputs, setInputs] = useState(
        {
            cliente: null,
            pedido: null,
            celular: null,
            importe: 0
        }
    );
    
    const onSubmit = (data) => {
        setInputs({...inputs, 
            cliente: data.cliente,
            pedido: data.pedido,
            celular: data.celular,
            importe: data.importe
        });

        $('#modal-pedidos').modal("show");
    }

    return (
        <div className="box-formulario">
            <form className="col-md-12 row formulario" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Cliente:
                        <input className="form-control input-formulario" type="text" {...register('cliente')}/>
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label "> Pedido:
                        <input className="form-control input-formulario" type="text" {...register('pedido')}/>
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Celular:
                        <input className="form-control input-formulario" type="text" {...register('celular')}/>
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Importe:
                        <input className="form-control input-formulario" type="number" {...register('importe')}/>
                    </label>
                </div>
                <div className="col-md-12 box-boton-formulario-pedidos">
                    <button type="submit" className="btn boton-formulario-pedidos"> Ingresar pedido </button>
                </div>
            </form>
            {Modal(inputs)}
        </div>
    )
};

const Modal = (inputs) => {
    return (
        <div className="modal fade" id="modal-pedidos">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirmar pedido</h5>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body" id="datos-modal" role="dialog">
                        <p><b>Cliente: </b>{inputs.cliente}</p>
                        <p><b>Pedido:  </b>{inputs.pedido} </p>
                        <p><b>Celular: </b>{inputs.celular}</p>
                        <p><b>Importe: </b>{inputs.importe}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormularioDePedidos;