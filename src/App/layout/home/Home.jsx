import React, { useState } from "react";
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import FormularioDePedidos from "../../components/formulario-de-pedidos/FormularioDePedidos";
import jsonPedidos from "../../helpers/pedidos.json"

const Home = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);

    const estadoBotonSiguiente = pedidos.length > 10 ? "visible" : "hidden";

    const [boton, setBoton] = useState({
        botonAnterior: "hidden",
        botonSiguiente: estadoBotonSiguiente
    });

    const [paginaActiva, setPaginaActiva] = useState(1);

    const agregarPedido = (pedidoNuevo) => {
        setPedidos([...pedidos, pedidoNuevo])

        if (pedidos.length >= (paginaActiva * 10)) {  setBoton({ botonSiguiente: "visible" }) }
        if (paginaActiva == 1) { setBoton({ botonAnterior: "hidden" }) }
    };

    const paginaSiguiente = (paginas) => {
        let paginaActivaNueva = paginaActiva + 1;
        setPaginaActiva(paginaActivaNueva);
        paginas <= paginaActivaNueva ? setBoton({ botonSiguiente: "hidden" }) : setBoton({ botonSiguiente: "visible" });

        return paginaActiva;
    }

    const paginaAnterior = () => {
        let paginaActivaNueva = paginaActiva - 1;
        setPaginaActiva(paginaActivaNueva);
        paginaActivaNueva == 1 ? setBoton({ botonAnterior: "hidden" }) : setBoton({ botonAnterior: "visible" });

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