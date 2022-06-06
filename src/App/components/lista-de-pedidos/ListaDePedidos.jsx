import React, { useState } from "react";
import { ListGroup, Row, Col } from 'react-bootstrap';
import "./ListaDePedidos.css"

var paginaActiva;

const ListaDePedidos = (props) => {
    usarConstructor(() => {
        paginaActiva = props.paginaActiva;
    });

    const [pedidos, setPedidos] = useState(props.listaDePedidos.get(props.paginaActiva));

    return (
        <>
            <ListGroup className="lista-de-pedidos">
                <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
                {generarListaDePedidos(pedidos)}
                <ListGroup.Item className="pedido">
                    <Row>
                        <Col className="box-boton-anterior"> {boton("anterior", pedidos, setPedidos, props.listaDePedidos.size)} </Col>
                        <Col className="box-numero-pagina"> {props.paginaActiva} / {props.listaDePedidos.size} </Col>
                        <Col className="box-numero-siguiente"> {boton("siguiente", pedidos, setPedidos, props.listaDePedidos.size)} </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

const usarConstructor = (callBack = () => { }) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    setHasBeenCalled(true);
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