import React, { useState } from "react";
import { ListGroup, Row, Col } from 'react-bootstrap';
import "./ListaDePedidos.css"

const ListaDePedidos = (props) => {
    return (
        <>
            <ListGroup className="lista-de-pedidos">
                <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
                {agregarItemsAListaDePedidos(props.pedidos)}
                <ListGroup.Item className="pedido">
                    <Row>
                        <Col className="box-boton-anterior"> {boton("anterior", props.pedidos, props.setPedidos, props.listaDePedidos.size, props.paginaActiva)} </Col>
                        <Col className="box-numero-pagina"> {props.paginaActiva} / {props.listaDePedidos.size} </Col>
                        <Col className="box-numero-siguiente"> {boton("siguiente", props.pedidos, props.setPedidos, props.listaDePedidos.size, props.paginaActiva)} </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

const agregarItemsAListaDePedidos = (pedidos) => {
    return pedidos.map((pedido, cantidad) => (
        <ListGroup key={cantidad.toString()} horizontal>
            <ListGroup.Item className="rounded-0" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
            <ListGroup.Item className="rounded-0" md="2" as={Col}> {pedido.celular} </ListGroup.Item>
            <ListGroup.Item className="rounded-0" md="7" as={Col}> {pedido.pedido} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 item-importe" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
        </ListGroup>
    ))
}

const boton = (orientacion, pedidos, setPedidos, cantidadDePaginas, paginaActiva) => {
    if (orientacion == "anterior") {
        return <button style={{ visibility: "hidden" }} id="boton-anterior" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas, paginaActiva)}><i className="bi bi-arrow-left-short"></i></button>
    }
    if (orientacion == "siguiente" && cantidadDePaginas > paginaActiva) {
        return <button style={{ visibility: "visible" }} id="boton-siguiente" type="button" className="btn boton-lista-pedidos" onClick={() => pagina(orientacion, pedidos, setPedidos, cantidadDePaginas, paginaActiva)}><i className="bi bi-arrow-right-short"></i></button>
    }
}

const pagina = (orientacion, pedidos, setPedidos, cantidadDePaginas, paginaActiva) => {
    orientacion == "anterior" ? paginaActiva = paginaActiva - 1 : null
    orientacion == "siguiente" ? paginaActiva = paginaActiva + 1 : null
    pedidos = obtenerListaDePedidos().get(paginaActiva);
    setPedidos(pedidos);
    visibilidadDePaginado(cantidadDePaginas);
};

const visibilidadDePaginado = (cantidadDePaginas, paginaActiva) => {
    document.getElementById("paginado").innerText = paginaActiva + " / " + cantidadDePaginas;
    mostrarBoton(cantidadDePaginas, paginaActiva);
};

const mostrarBoton = (cantidadDePaginas, paginaActiva) => {
    cantidadDePaginas <= paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'hidden' : null
    cantidadDePaginas > paginaActiva ? document.getElementById("boton-siguiente").style.visibility = 'visible' : null
    paginaActiva == 1 ? document.getElementById("boton-anterior").style.visibility = 'hidden' : null
    paginaActiva != 1 ? document.getElementById("boton-anterior").style.visibility = 'visible' : null
};

export default ListaDePedidos;