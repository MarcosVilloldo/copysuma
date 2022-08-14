import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";

import ModalPedidoIngresado from './modal-pedido-ingresado'

const handleClose = () => {};

const agregarPedido = () => {};

const jsonInputs = {
    "id": 0,
    "cliente": "Marcos",
    "pedido": "El señor de los anillos",
    "celular": "11123232",
    "importe": 200,
    "finalizado": false
};

const setup = () => {
    render(<ModalPedidoIngresado inputs={jsonInputs} show={true} agregarPedido={agregarPedido} handleClose={handleClose}/>)
}

describe('Test para probar el renderizado el modal de pedido ingresado', () => {
    it('Deberia renderizar el modal de pedidos ingresado', () => {
        setup();
    })
})