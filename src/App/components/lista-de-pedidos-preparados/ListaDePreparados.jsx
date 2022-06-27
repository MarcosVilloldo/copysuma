import React from "react";
import { ListGroup } from 'react-bootstrap';
import './ListaDePreparados.css'

const ListaDePreparados = () => {
    return (
        <>
            <ListGroup className="lista-de-pedidos-preparados">
                <ListGroup.Item className="titulo-lista-pedidos-preparados"> Lista de pedidos preparados </ListGroup.Item>
            </ListGroup>
        </>
    );
};


export default ListaDePreparados;