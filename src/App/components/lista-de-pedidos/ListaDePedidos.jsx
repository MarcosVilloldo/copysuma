import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import "./ListaDePedidos.css";

var paginas;

const ListaDePedidos = (props) => {
    paginas = Math.ceil(props.pedidos.length / 10);

    return (
        <>
            <ListGroup className="lista-de-pedidos">
                <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
                {agregarItemsAListaDePedidos(obtenerPaginado(props.pedidos, paginas), props.paginaActiva, props.finalizarPedido)}
                <ListGroup.Item className="pedido">
                    <Row>
                        <Col className="box-boton-anterior">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={props.paginaAnterior} style={{ visibility: props.boton.botonAnterior }}>
                                <i className="bi bi-arrow-left"></i>
                            </Button>
                        </Col>
                        <Col className="box-numero-pagina" id="paginado"> {props.paginaActiva} / {paginas} </Col>
                        <Col className="box-boton-siguiente">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={() => props.paginaSiguiente(paginas)} style={{ visibility: props.boton.botonSiguiente }}>
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

const agregarItemsAListaDePedidos = (pedidos, paginaActiva, finalizarPedido) => {
    return pedidos.get(paginaActiva).map((pedido, cantidad) => (
        <ListGroup id="item-pedido" key={cantidad.toString()} horizontal>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="cliente" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="celular" md="2" as={Col}> {pedido.celular} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="pedido" md="6" as={Col}> {pedido.pedido} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 boton-item-pedido" id="importe" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
            <ListGroup.Item className="rounded-0 item-finalizar-pedido" md="1" as={Col}>
                {pedido.finalizado === false
                    ? <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)}>finalizar</Button>
                    : <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)} disabled>finalizado</Button>
                }
            </ListGroup.Item>
        </ListGroup>
    ))
}

export default ListaDePedidos;