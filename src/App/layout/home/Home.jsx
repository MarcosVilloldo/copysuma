import React, { useState } from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import jsonPedidos from "../../helpers/pedidos.json"

var paginaActiva = 1;

const Home = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);

    const estadoBotonSiguiente = pedidos.length > 10 ? "visible" : "hidden";

    const [boton, setBoton] = useState({
        botonAnterior: "hidden",
        botonSiguiente: estadoBotonSiguiente
    });

    const agregarPedido = (pedidoNuevo) => {
        setPedidos([...pedidos, pedidoNuevo])

        if (pedidos.length >= 10) {
            setBoton({ botonSiguiente: "visible" })
            setBoton({ botonAnterior: "hidden" })
        }
    };

    const paginaSiguiente = (paginas) => {
        paginaActiva++;
        paginas <= paginaActiva ? setBoton({ botonSiguiente: "hidden" }) : null;

        return paginaActiva;
    }

    const paginaAnterior = () => {
        paginaActiva--;
        paginaActiva == 1 ? setBoton({ botonAnterior: "hidden" }) : null;

        return paginaActiva;
    }

    return (
        <>
            <FormularioDePedidos agregarPedido={agregarPedido} />
            <hr />
            <ListaDePedidos paginaActiva={paginaActiva} pedidos={pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton} />
        </>
    );
};

export default Home;