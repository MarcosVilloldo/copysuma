import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import './ListaDePedidosPreparados.css';

const ListaDePedidosPreparados = (props) => {
    const paginas = Math.ceil(props.pedidos.length / 10);

    return (
        <ListGroup className="lista-de-pedidos-preparados">
            <ListGroup.Item className="titulo-lista-pedidos-preparados"> Lista de pedidos preparados </ListGroup.Item>
            {agregarItemsAListaDePedidos(obtenerPaginado(props.pedidos, paginas), props.paginaActiva, props.finalizarPedido)}
            <ListGroup.Item className="fila-paginado-preparados">
                <Row>
                    <Col className="box-boton-anterior">
                        <Button className="boton-lista-pedidos" variant="dark" onClick={() => props.cambiarPagina('ANTERIOR', null)} style={{ visibility: props.boton.botonAnterior }}>
                            <i className="bi bi-arrow-left"></i>
                        </Button>
                    </Col>
                    {props.pedidos.length > 0
                        ? <Col className="box-numero-pagina"> {props.paginaActiva} / {paginas} </Col>
                        : <Col className="box-numero-pagina"><i> No hay pedidos preparados en la lista </i></Col>
                    }
                    <Col className="box-boton-siguiente">
                        <Button className="boton-lista-pedidos" variant="dark" onClick={() => props.cambiarPagina('SIGUIENTE', paginas)} style={{ visibility: props.boton.botonSiguiente }}>
                            <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
};

const agregarItemsAListaDePedidos = (pedidos, paginaActiva, finalizarPedido) => {
    if (pedidos.size > 0) {
        return pedidos.get(paginaActiva).map((pedido, indice) => (
            <ListGroup id="item-pedido" key={indice.toString()} horizontal>
                <ListGroup.Item className="rounded-0 boton-item-pedido-preparado" id="cliente" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
                <ListGroup.Item className="rounded-0 boton-item-pedido-preparado" id="celular" md="2" as={Col}> {pedido.celular} </ListGroup.Item>
                <ListGroup.Item className="rounded-0 boton-item-pedido-preparado" id="pedido" md="6" as={Col}> {pedido.pedido} </ListGroup.Item>
                <ListGroup.Item className="rounded-0 boton-item-pedido-preparado" id="importe" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
                <ListGroup.Item className="rounded-0 item-finalizar-pedido" md="1" as={Col}>
                    {pedido.finalizado === false
                        ? <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)}>finalizar</Button>
                        : <Button className="boton-finalizar-pedido" variant="dark" onClick={() => finalizarPedido(pedido.id)} disabled>finalizado</Button>
                    }
                </ListGroup.Item>
            </ListGroup>
        ))
    }
}

export default ListaDePedidosPreparados;