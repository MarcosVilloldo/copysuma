import React from "react";
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
    return (
        <form class="row g-3">
            <div class="col-auto">
                <label className="col-form-label">Cliente:
                    <input className="form-control" type="text" />
                </label>
            </div>
            <div class="col-auto">
                <label className="col-form-label"> Descripción:
                    <input  className="form-control" type="text" />
                </label>
            </div>
            <button type="submit" className="btn boton-formulario-pedidos">Confirmar</button>
        </form>
    )
};

export default FormularioDePedidos;