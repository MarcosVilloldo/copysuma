import React from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import ListaDePedidos from "../../components/lista-de-pedidos/ListaDePedidos";

const Tabla = (props) => {
    const paginas = Math.ceil(props.pedidos.length / 10);

    return (
        <ListGroup className="lista-de-pedidos">
            <ListGroup.Item className="titulo-lista-pedidos"> Lista de pedidos </ListGroup.Item>
            <ListaDePedidos boton={props.boton}
                pedidos={props.pedidos}
                paginas={paginas}
                paginaActiva={props.paginaActiva}
                cambiarPagina={props.cambiarPagina}
                prepararPedido={props.prepararPedido} />
            <ListGroup.Item className="fila-paginado">
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

export default Tabla;