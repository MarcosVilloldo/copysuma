import React from "react";
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
    return (
        <form class="col-md-12 row">
            <div class="col-md-3">
                <label className="col-form-label"> Cliente: 
                    <input className="form-control" type="text" /> 
                </label>
            </div>
            <div class="col-md-3">
                <label className="col-form-label"> Pedido:
                    <input className="form-control" type="text" />
                </label>
            </div>
            <div class="col-md-3">
                <label className="col-form-label"> Celular:
                    <input className="form-control" type="text" />
                </label>
            </div>
            <div class="col-md-2">
                <label className="col-form-label"> Precio total:
                    <input className="form-control" type="number" />
                </label>
            </div>
            <button type="submit" className="btn boton-formulario-pedidos"> Confirmar </button>
        </form>
    )
};

export default FormularioDePedidos;