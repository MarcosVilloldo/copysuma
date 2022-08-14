import React from "react";
import { ListGroup, Button, Col } from 'react-bootstrap';
import { obtenerPaginado } from '../../utils/paginado.js';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import Style from './ListaDePedidosPreparados.module.css';

const ListaDePedidosPreparados = (props) => {
    const paginado = obtenerPaginado(props.pedidos, props.paginas);

    return (
        <>
            <ListGroup className={props.StylesTabla.itemFila} horizontal>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={2} as={Col}> Entrega </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={2} as={Col}> Cliente </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={2} as={Col}> Celular </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={4} as={Col}> Pedido </ListGroup.Item>
                <ListGroup.Item className={props.StylesTabla.itemColumnaHeader} md={1} as={Col}> Importe </ListGroup.Item>
                <ListGroup.Item className={Style.itemBotonHeaderFinalizar} md={1} as={Col}> </ListGroup.Item>
            </ListGroup>
            {paginado.size > 0 ?
                paginado.get(props.paginaActiva).map((pedido, indice) => (
                    <ListGroup className={props.StylesTabla.itemFila} key={indice.toString()} horizontal>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={2} as={Col}> {formatearFecha(pedido.fechaEntrega)} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={2} as={Col}> {pedido.cliente} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={2} as={Col}> {pedido.celular} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={4} as={Col}> {pedido.pedido} </ListGroup.Item>
                        <ListGroup.Item className={props.StylesTabla.itemColumna} md={1} as={Col}> $ {pedido.importe} </ListGroup.Item>
                        <ListGroup.Item className={Style.itemBotonFinalizar} md={1} as={Col}>
                            {pedido.finalizado === false
                                ? <Button className={Style.botonFinalizar} variant={'dark'} onClick={() => props.finalizarPedido(pedido.id)}>finalizar</Button>
                                : <Button className={Style.botonFinalizar} variant={'dark'} onClick={() => props.finalizarPedido(pedido.id)} disabled>finalizado</Button>
                            }
                        </ListGroup.Item>
                    </ListGroup>
                )) : null
            }
        </>
    );
};

export default ListaDePedidosPreparados;