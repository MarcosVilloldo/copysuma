import React, { useState } from "react";
import { ListGroup } from 'react-bootstrap';
import "./ListaDePedidos.css"

var paginaActiva;
var listaDePedidos;

const ListaDePedidos = (props) => {
    usarConstructor(() => {
        paginaActiva = props.paginaActiva;
    });

    listaDePedidos = obtenerListaDePedidos();
    const [pedidos, setPedidos] = useState(listaDePedidos.get(props.paginaActiva));

    return (
        <ListGroup className="lista-de-pedidos">
            <ListGroup.Item className="titulo-lista-pedidos">Lista de pedidos</ListGroup.Item>
                {generarListaDePedidos(pedidos)}
            <ListGroup.Item className="pedido">
                <div className="row">
                    <div className="col box-boton-anterior">
                        {boton("anterior", pedidos, setPedidos, listaDePedidos.size)}
                    </div>
                    <div className="col box-numero-pagina">
                        <p id="paginado" className="paginado">{props.paginaActiva} / {listaDePedidos.size}</p>
                    </div>
                    <div className="col box-boton-siguiente">
                        {boton("siguiente", pedidos, setPedidos, listaDePedidos.size)}
                    </div>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

const usarConstructor = (callBack = () => { }) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    setHasBeenCalled(true);
}

const obtenerListaDePedidos = () => {
    let listaDePedidos = ["Señor de los anillos", "El psicoanalista", "Game of throne", "Rayuela"]

    let cantidadDePaginas = Math.ceil(listaDePedidos.length / 10);
    let iteraciones = 0;
    let paginado = new Map();
    while (iteraciones < cantidadDePaginas) {
        paginado.set((iteraciones + 1), listaDePedidos.slice(iteraciones + '0', (iteraciones + 1) + '0'));
        iteraciones++;
    }
    return paginado;
}

const generarListaDePedidos = (pedidos) => {
    return pedidos.map((valor, cantidad) =>
        cantidad < 10 ? <ListGroup.Item className="pedido" id="item-pedido" key={cantidad.toString()}> {valor} </ListGroup.Item> : <></>
    );
}

const boton = (orientacion, pedidos, setPedidos, cantidadDePaginas) => {
    if (orientacion == "anterior") {
        return <button style={{ visibility: "hidden" }} id="boton-anterior" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas)}><i className="bi bi-arrow-left-short"></i></button>
    }
    if (orientacion == "siguiente" && cantidadDePaginas > paginaActiva) {
        return <button style={{ visibility: "visible" }} id="boton-siguiente" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas)}><i className="bi bi-arrow-right-short"></i></button>
    }
}

const pagina = (orientacion, pedidos, setPedidos, cantidadDePaginas) => {
    orientacion == "anterior" ? paginaActiva = paginaActiva - 1 : null
    orientacion == "siguiente" ? paginaActiva = paginaActiva + 1 : null
    pedidos = obtenerListaDePedidos().get(paginaActiva);
    setPedidos(pedidos);
    visibilidadDePaginado(cantidadDePaginas);
};

const visibilidadDePaginado = (cantidadDePaginas) => {
    document.getElementById("paginado").innerText = paginaActiva + " / " + cantidadDePaginas;
    mostrarBoton(cantidadDePaginas);
};

const mostrarBoton = (cantidadDePaginas) => {
    cantidadDePaginas <= paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'hidden' : null
    cantidadDePaginas > paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'visible' : null
    paginaActiva == 1 ? document.getElementById("boton-anterior").style.visibility = 'hidden' : null
    paginaActiva != 1 ? document.getElementById("boton-anterior").style.visibility = 'visible' : null
};

export default ListaDePedidos;