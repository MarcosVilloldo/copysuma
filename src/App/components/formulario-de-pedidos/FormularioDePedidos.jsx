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
                    <button type="submit" className="btn boton-formulario-pedidos"> Ingresar pedido </button>
                </div>
            </form>
        </div>
    )
};

export default FormularioDePedidos;