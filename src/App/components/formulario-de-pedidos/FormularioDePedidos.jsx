import React, { useState } from "react";
import "./FormularioDePedidos.css"


const FormularioDePedidos = () => {
    const [inputs, setInputs] = useState(
        {
            cliente: null,
            pedido: null,
            celular: null,
            importe: 0
        }
    );
    
    const handleSubmit = (event) => {
        event.preventDefault();

        setInputs({...inputs, 
            cliente: $("#cliente").val(),
            pedido: $("#pedido").val(),
            celular: $("#celular").val(),
            importe:$("#importe").val()
        });

        $('#modal-pedidos').modal("show");
    }

    return (
        <div className="box-formulario">
            <form className="col-md-12 row formulario" onSubmit={handleSubmit}>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Cliente:
                        <input className="form-control input-formulario" id="cliente" type="text" />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label "> Pedido:
                        <input className="form-control input-formulario" id="pedido" type="text" />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Celular:
                        <input className="form-control input-formulario" id="celular" type="text" />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Importe:
                        <input className="form-control input-formulario" id="importe" type="number" />
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