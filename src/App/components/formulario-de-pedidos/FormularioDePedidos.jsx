import React, {useState} from "react";
import "./FormularioDePedidos.css"

const FormularioDePedidos = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.precioTotal);
    }

    return (
        <form className="col-md-12 row" onSubmit={handleSubmit}>
            <div className="col-md-2">
                <label className="col-form-label"> Cliente: 
                    <input className="form-control" type="text" name="cliente" value={inputs.cliente || ""} onChange={handleChange}/> 
                </label>
            </div>
            <div className="col-md-2">
                <label className="col-form-label"> Pedido:
                    <input className="form-control" type="text" name="pedido" value={inputs.pedido || ""} onChange={handleChange}/>
                </label>
            </div>
            <div className="col-md-2">
                <label className="col-form-label"> Celular:
                    <input className="form-control" type="text" name="celular" value={inputs.celular || ""} onChange={handleChange}/>
                </label>
            </div>
            <div className="col-md-2">
                <label className="col-form-label"> Precio total:
                    <input className="form-control" type="number" name="precioTotal"  value={inputs.precioTotal || ""}  onChange={handleChange}/>
                </label>
            </div>
            <button type="submit" className="btn boton-formulario-pedidos"> Confirmar </button>
        </form>
    )
};

export default FormularioDePedidos;