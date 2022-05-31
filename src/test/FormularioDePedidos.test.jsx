import React, { useDebugValue } from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import FormularioDePedidos from '../app/components/formulario-de-pedidos/FormularioDePedidos'

const pedido = {
    inputCliente: "",
    inputPedido: "",
    inputCelular: "",
    inputPrecioTotal: ""
}

const setup = () => {
    render(<FormularioDePedidos />)

    pedido.inputCliente = screen.getByRole('textbox', { name: /cliente/i });
    pedido.inputPedido = screen.getByRole('textbox', { name: /pedido/i });
    pedido.inputCelular = screen.getByRole('textbox', { name: /celular/i });
    pedido.inputPrecioTotal = screen.getByRole('textbox', { name: /precio total/i });

    fireEvent.input(pedido.inputCliente, { target: { value: 'Carlos' } });
    fireEvent.input(pedido.inputPedido, { target: { value: 'El señor de los anillos' } });
    fireEvent.input(pedido.inputCelular, { target: { value: '1161605555' } });
    fireEvent.input(pedido.inputPrecioTotal, { target: { value: '100' } });
}

describe('Test para probar el renderizado del formulario de pedidos', () => {
    it('Deberia renderizar el formulario de pedidos', () => {
        setup();
        screen.logTestingPlaygroundURL()
    })

    it('Deberia obtener el valor del cliente correctamente', async () => {
        setup();

        expect(await screen.getByDisplayValue("Carlos").value).toBe(pedido.inputCliente.value)
    })

    it('Deberia obtener el valor del pedido correctamente', async () => {
        setup();

        expect(await screen.getByDisplayValue("El señor de los anillos").value).toBe(pedido.inputPedido.value)
    })

    it('Deberia obtener el celular ingresado correctamente', async () => {
        setup();

        expect(await screen.getByDisplayValue("1161605555").value).toBe(pedido.inputCelular.value)
    })

    it('Deberia obtener el valor del precio total del pedido correctamente', async () => {
        setup();

        expect(await screen.getByDisplayValue("100").value).toBe(pedido.inputPrecioTotal.value)
    })
})