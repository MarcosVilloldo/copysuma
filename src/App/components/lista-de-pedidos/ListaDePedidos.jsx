import React, { useState } from "react";
import { ListGroup, Row, Col } from 'react-bootstrap';
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
                <Row>
                    <Col className="box-boton-anterior"> {boton("anterior", pedidos, setPedidos, listaDePedidos.size)} </Col>
                    <Col className="box-numero-pagina"> {props.paginaActiva} / {listaDePedidos.size} </Col>
                    <Col className="box-numero-siguiente"> {boton("siguiente", pedidos, setPedidos, listaDePedidos.size)} </Col>
                </Row>
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
    let listaDePedidos = [
        { cliente: "Marcos", pedido: "El señor de los anillos", celular: "11123232", importe: 200 }, 
        { cliente: "Ciro", pedido: "La granja de zenón", celular: "11123232", importe: 50 },
        { cliente: "Celeste", pedido: "Matematica IV", celular: "11123232", importe: 150 },
        { cliente: "Silvia", pedido: "Historia del siglo XX", celular: "11123232", importe: 150 },
    ]

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
    return pedidos.map((valor, cantidad) => (
        <ListGroup key={cantidad.toString()} horizontal>
            <ListGroup.Item className="rounded-0" md="2" as={Col}> {valor.cliente} </ListGroup.Item>
            <ListGroup.Item className="rounded-0" md="2" as={Col}> {valor.celular} </ListGroup.Item>
            <ListGroup.Item className="rounded-0" md="7" as={Col}> {valor.pedido} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 item-importe" md="1" as={Col}> $ {valor.importe} </ListGroup.Item>
        </ListGroup>
    ))
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