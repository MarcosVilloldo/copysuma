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
                        <Col className="box-boton-anterior">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={props.paginaAnterior} style={{ visibility: props.boton.botonAnterior }}>
                                <i className="bi bi-arrow-left-short"></i>
                            </Button>
                        </Col>
                        <Col className="box-numero-pagina" id="paginado"> {props.paginaActiva} / {props.paginas} </Col>
                        <Col className="box-numero-siguiente">
                            <Button className="boton-lista-pedidos" variant="dark" onClick={props.paginaSiguiente} style={{ visibility: props.boton.botonSiguiente }}>
                                <i className="bi bi-arrow-right-short"></i>
                            </Button>
                        </Col>
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

export default ListaDePedidos;