import React from "react";
import { ListGroup, Button, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import './ListaDePedidosPreparados.css';

const ListaDePedidosPreparados = (props) => {
    const paginado = obtenerPaginado(props.pedidos, props.paginas);

    return (
        paginado.size > 0 ?
            paginado.get(props.paginaActiva).map((pedido, indice) => (
                <ListGroup className="item-fila" key={indice.toString()} horizontal>
                    <ListGroup.Item className="item-columna" md="2" as={Col}> {formatearFecha(pedido.fechaEntrega)} </ListGroup.Item>
                    <ListGroup.Item className="item-columna" md="2" as={Col}> {pedido.cliente} </ListGroup.Item>
                    <ListGroup.Item className="item-columna" md="2" as={Col}> {pedido.celular} </ListGroup.Item>
                    <ListGroup.Item className="item-columna" md="4" as={Col}> {pedido.pedido} </ListGroup.Item>
                    <ListGroup.Item className="item-columna" md="1" as={Col}> $ {pedido.importe} </ListGroup.Item>
                    <ListGroup.Item className="item-boton-finalizar" md="1" as={Col}>
                        {pedido.finalizado === false
                            ? <Button className="boton-finalizar-pedido" variant="dark" onClick={() => props.finalizarPedido(pedido.id)}>finalizar</Button>
                            : <Button className="boton-finalizar-pedido" variant="dark" onClick={() => props.finalizarPedido(pedido.id)} disabled>finalizado</Button>
                        }
                    </ListGroup.Item>
                </ListGroup>
            )) : null
    );
};

export default ListaDePedidosPreparados;