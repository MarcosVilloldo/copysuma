import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import "./ListaDePedidos.css"

const ListaDePedidos = (props) => {
    return (
        <>
            <ListGroup className="lista-de-pedidos">
                <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
                {agregarItemsAListaDePedidos(props.pedidos)}
                <ListGroup.Item className="pedido">
                    <Row>
                        <Col className="box-boton-anterior"> {boton("anterior", props.paginas, props.paginaActiva, props.paginaAnterior, props.boton)} </Col>
                        <Col className="box-numero-pagina" id="paginado"> {props.paginaActiva} / {props.paginas} </Col>
                        <Col className="box-numero-siguiente"> {boton("siguiente", props.paginas, props.paginaActiva, props.paginaSiguiente, props.boton)} </Col>
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
            <ListGroup.Item className="rounded-0" md="6" as={Col}> {pedido.pedido} </ListGroup.Item>
            <ListGroup.Item className="rounded-0" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 item-finalizar-pedido" md="1" as={Col}>
                <Button className="boton-finalizar-pedido" variant="dark" onClick={finalizarPedido}>finalizar</Button>
            </ListGroup.Item>
        </ListGroup>
    ))
}

const finalizarPedido = () => {
    console.log("se finalizó el pedido");
}

const boton = (orientacion, paginas, paginaActiva, cambiarPagina, boton) => {
    if (orientacion == "anterior") {
        return (
            <Button className="boton-lista-pedidos" variant="dark" onClick={() => pagina(orientacion, cambiarPagina)} style={{ visibility: boton.botonAnterior }}>
                <i className="bi bi-arrow-left-short"></i>
            </Button>
        );
    };
    if (orientacion == "siguiente" && paginas > paginaActiva) {
        return (
            <Button className="boton-lista-pedidos" variant="dark" onClick={() => pagina(orientacion, cambiarPagina)} style={{ visibility: boton.botonSiguiente }}>
                <i className="bi bi-arrow-right-short"></i>
            </Button>
        );
    };
}

const pagina = (orientacion, cambiarPagina) => {
    orientacion == 'siguiente' ? cambiarPagina() : null
    orientacion == 'anterior' ? cambiarPagina() : null
};

export default ListaDePedidos;