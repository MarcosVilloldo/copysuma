import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom";
import FormularioDePedidos from '../app/components/formulario-de-pedidos/FormularioDePedidos'

const pedido = {
    inputCliente: "",
    inputPedido: "",
    inputCelular: "",
    inputImporte: 0
}

const setup = () => {
    render(<FormularioDePedidos />)

    pedido.inputCliente = screen.getByRole('textbox', { name: /cliente/i });
    pedido.inputPedido = screen.getByRole('textbox', { name: /pedido/i });
    pedido.inputCelular = screen.getByRole('textbox', { name: /celular/i });
    pedido.inputImporte = screen.getByRole('spinbutton', { name: /importe/i });
}

describe('Test para probar el renderizado del formulario de pedidos', () => {
    it('Deberia renderizar el formulario de pedidos', () => {
        setup();
        screen.logTestingPlaygroundURL()
    })

    it('Al ingresar un valor al input se deberia obtener el valor del cliente correctamente', async () => {
        setup();

        fireEvent.input(pedido.inputCliente, { target: { value: 'Carlos' } });

        expect(await screen.getByDisplayValue("Carlos").value).toBe(pedido.inputCliente.value)
    })

    it('Al ingresar un valor al input se deberia obtener el valor del pedido correctamente', async () => {
        setup();

        fireEvent.input(pedido.inputPedido, { target: { value: 'El señor de los anillos' } });

        expect(await screen.getByDisplayValue("El señor de los anillos").value).toBe(pedido.inputPedido.value)
    })

    it('Al ingresar un valor al input se deberia obtener el celular ingresado correctamente', async () => {
        setup();

        fireEvent.input(pedido.inputCelular, { target: { value: '1161605555' } });

        expect(await screen.getByDisplayValue("1161605555").value).toBe(pedido.inputCelular.value)
    })

    it('Al ingresar un valor al input se deberia obtener el valor del importe del pedido correctamente', async () => {
        setup();

        fireEvent.input(pedido.inputImporte, { target: { value: 100 } });

        expect(await screen.getByDisplayValue(100).value).toBe(pedido.inputImporte.value)
    })

    it('Al ingresar un valor que no sea numerico en el input de importe no se deberia registrar', async () => {
        setup();

        fireEvent.input(pedido.inputImporte, { target: { value: "10a0" } });

        expect(await pedido.inputImporte.value).toBe("")
    })
})