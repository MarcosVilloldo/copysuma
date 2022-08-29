import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import ListaDePedidosPreparados from "../lista-de-pedidos-preparados/ListaDePedidosPreparados";
import Styles from './Tabla.module.css';

const Tabla = (props) => {
    const paginas = Math.ceil(props.pedidos.length / 10);

    const cambiarPagina = (orientacion, paginas) => {
        let paginaActivaNueva;

        if (orientacion === 'ANTERIOR') {
            paginaActivaNueva = props.paginaActiva - 1;
            paginaActivaNueva == 1 ? props.setBoton({ botonAnterior: 'hidden' }) : props.setBoton({ botonAnterior: 'visible' });
        }

        if (orientacion === 'SIGUIENTE') {
            paginaActivaNueva = props.paginaActiva + 1;
            paginas <= paginaActivaNueva ? props.setBoton({ botonSiguiente: 'hidden' }) : props.setBoton({ botonSiguiente: 'visible' });
        }

        props.setPaginaActiva(paginaActivaNueva);
    }

    return (
        <ListGroup className={Styles.tabla}>
            <ListGroup.Item className={Styles.encabezado}> {props.encabezado} </ListGroup.Item>
            {props.encabezado === 'Lista de pedidos'
                ? <ListaDePedidos paginas={paginas} paginaActiva={props.paginaActiva} pedidos={props.pedidos} prepararPedido={props.prepararPedido} modificarPedido={props.modificarPedido} StylesTabla={Styles} />
                : <ListaDePedidosPreparados paginas={paginas} paginaActiva={props.paginaActiva} pedidos={props.pedidos} finalizarPedido={props.finalizarPedido} StylesTabla={Styles} />
            }
            <ListGroup.Item className={Styles.filaPaginado}>
                <Row>
                    <Col className={Styles.boxBotonAnterior}>
                        <Button className={Styles.boton} variant="dark" onClick={() => cambiarPagina('ANTERIOR', null)} style={{ visibility: props.paginaActiva !== 1 ? 'visible' : 'hidden' }}>
                            <i className="bi bi-arrow-left"></i>
                        </Button>
                    </Col>
                    {props.pedidos.length > 0
                        ? <Col className={Styles.boxNumeroPagina}> {props.paginaActiva} / {paginas} </Col>
                        : <Col className={Styles.boxNumeroPagina}><i> No hay pedidos en la lista </i></Col>
                    }
                    <Col className={Styles.boxBotonSiguiente}>
                        <Button className={Styles.boton} variant="dark" onClick={() => cambiarPagina('SIGUIENTE', paginas)} style={{ visibility: props.pedidos.length > (props.paginaActiva * 10) ? 'visible' : 'hidden' }}>
                            <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Tabla;