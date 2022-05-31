import React, { useState } from "react";
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="box-formulario">
            <form className="col-md-12 row formulario" onSubmit={handleSubmit}>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Cliente:
                        <input className="form-control input-formulario" type="text" name="cliente" value={inputs.cliente || ""} onChange={handleChange} />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label "> Pedido:
                        <input className="form-control input-formulario" type="text" name="pedido" value={inputs.pedido || ""} onChange={handleChange} />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Celular:
                        <input className="form-control input-formulario" type="text" name="celular" value={inputs.celular || ""} onChange={handleChange} />
                    </label>
                </div>
                <div className="col-md-3 dato-formulario">
                    <label className="col-form-label"> Importe:
                        <input className="form-control input-formulario" type="number" name="importe" value={inputs.importe || ""} onChange={handleChange} />
                    </label>
                </div>
                <div className="col-md-12 box-boton-formulario-pedidos">
                    <button type="submit" className="btn boton-formulario-pedidos" data-toggle="modal" data-target="#myModal"> Ingresar pedido </button>
                </div>
            </form>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmar pedido</h5>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body" role="dialog">
                            <p><b>Cliente: </b>{inputs.cliente}</p>
                            <p><b>Pedido: </b>{inputs.pedido}</p>
                            <p><b>Celular: </b>{inputs.celular}</p>
                            <p><b>Importe: </b>{inputs.importe}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormularioDePedidos;