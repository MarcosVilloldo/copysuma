import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";
import './Tabla.css';

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
        <ListGroup className="tabla">
            <ListGroup.Item className="encabezado-de-lista"> Lista de pedidos </ListGroup.Item>
            <ListaDePedidos paginas={paginas} paginaActiva={props.paginaActiva} pedidos={props.pedidos} prepararPedido={props.prepararPedido} />
            <ListGroup.Item className="fila-paginado">
                <Row>
                    <Col className="box-boton-anterior">
                        <Button className="boton-de-lista" variant="dark" onClick={() => cambiarPagina('ANTERIOR', null)} style={{ visibility: props.boton.botonAnterior }}>
                            <i className="bi bi-arrow-left"></i>
                        </Button>
                    </Col>
                    {props.pedidos.length > 0
                        ? <Col className="box-numero-pagina"> {props.paginaActiva} / {paginas} </Col>
                        : <Col className="box-numero-pagina"><i> No hay pedidos preparados en la lista </i></Col>
                    }
                    <Col className="box-boton-siguiente">
                        <Button className="boton-de-lista" variant="dark" onClick={() => cambiarPagina('SIGUIENTE', paginas)} style={{ visibility: props.boton.botonSiguiente }}>
                            <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Tabla;