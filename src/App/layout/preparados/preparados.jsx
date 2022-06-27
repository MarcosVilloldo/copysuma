import React, {useState} from "react";
import ListaDePedidosPreparados from "../../components/lista-de-pedidos-preparados/ListaDePedidosPreparados";
import jsonPedidos from "../../helpers/pedidos-preparados.json"

const Preparados = () => {
    const [pedidos, setPedidos] = useState(jsonPedidos.pedidos);

    const estadoBotonSiguiente = pedidos.length > 10 ? "visible" : "hidden";

    const [boton, setBoton] = useState({
        botonAnterior: "hidden",
        botonSiguiente: estadoBotonSiguiente
    });

    const [paginaActiva, setPaginaActiva] = useState(1);

    const finalizarPedido = (idPedido) => setPedidos(pedidos.map((pedido) => pedido.id === idPedido ? { ...pedido, finalizado: true } : { ...pedido }));

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
            <ListaDePedidosPreparados pedidos={pedidos} paginaActiva={paginaActiva} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton} finalizarPedido={finalizarPedido} />
        </>
    );
};

export default Preparados;