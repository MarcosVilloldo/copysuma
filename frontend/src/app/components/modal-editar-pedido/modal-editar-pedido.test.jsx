import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";

import ModalEditarPedido from './modal-editar-pedido'

const handleClose = () => setShow(false);

const jsonPedidos = {
    "pedidos": [
        {
            "id": 0,
            "cliente": "Marcos",
            "pedido": "El señor de los anillos",
            "celular": "11123232",
            "importe": 200,
            "finalizado": false
        },
        {
            "id": 1,
            "cliente": "Ciro",
            "pedido": "La granja de zenón",
            "celular": "11123232",
            "importe": 50,
            "finalizado": false
        }
    ]
};

const setup = () => {
    render(<ModalEditarPedido pedidos={jsonPedidos.pedidos} pedidoActivo={jsonPedidos.pedidos[0]} show={true} handleClose={handleClose}/>)
}

describe('Test para probar el renderizado del modal de editar pedido', () => {
    it('Deberia renderizar el modal de editar pedido', () => {
        setup();
    })
})