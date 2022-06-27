import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom";
import FormularioDePedidos from './FormularioDePedidos'

const pedido = {
    inputCliente: "",
    inputPedido: "",
    inputCelular: "",
    inputImporte: 0
}

const agregarPedido = (pedidoNuevo) => { console.log(pedidoNuevo)};

const setup = () => {
    render(<FormularioDePedidos agregarPedido={agregarPedido}/>)

    pedido.inputCliente = screen.getByPlaceholderText('Ingresar cliente...')
    pedido.inputPedido = screen.getByPlaceholderText('Ingresar pedido...')
    pedido.inputCelular = screen.getByPlaceholderText('Ingresar celular...')
    pedido.inputImporte = screen.getByPlaceholderText('Ingresar importe...')
}

describe('Test para probar el renderizado del formulario de pedidos', () => {
    it('Deberia renderizar el formulario de pedidos', () => {
        setup();
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

    it('Al ingresar el pedido un nuevo pedido se debe mostrar los datos ingresados de forma correcta', async () => {
        setup();

        fireEvent.input(pedido.inputCliente, { target: { value: 'Carlos' } });
        fireEvent.input(pedido.inputPedido, { target: { value: 'El señor de los anillos' } });
        fireEvent.input(pedido.inputCelular, { target: { value: '1161605555' } });
        fireEvent.input(pedido.inputImporte, { target: { value: 100 } });

        let botonFinalizar = screen.getByRole('button', { name: 'Ingresar pedido' })

        //Hay que de mockear el contenedor, porque cuando hace el submit 
        fireEvent.submit(botonFinalizar);
    })
})