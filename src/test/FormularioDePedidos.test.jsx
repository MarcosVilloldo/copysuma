import React, { useDebugValue } from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import FormularioDePedidos from '../app/components/formulario-de-pedidos/FormularioDePedidos'

describe('Test para probar el renderizado del formulario de pedidos', () => {
    it('Deberia renderizar el formulario de pedidos', () => {
        render(<FormularioDePedidos />)

        screen.logTestingPlaygroundURL()
    })

    it('Deberia obtener el valor del cliente correctamente', () => {
        render(<FormularioDePedidos />)

        const inputCliente = screen.getByRole('textbox', { name: /cliente:/i });
        fireEvent.input(inputCliente, {target: {value: 'Carlos'}});
   
        expect(inputCliente.value).toBe("Carlos")
    })

    it('Deberia obtener el valor del pedido correctamente', () => {
        render(<FormularioDePedidos />)

        const inputPedido = screen.getByRole('textbox', { name: /pedido:/i });
        fireEvent.input(inputPedido, {target: {value: 'El señor de los anillos'}});
   
        expect(inputPedido.value).toBe("El señor de los anillos")
    })

    it('Deberia obtener el celular ingresado correctamente', () => {
        render(<FormularioDePedidos />)

        const inputCelular = screen.getByRole('textbox', { name: /celular:/i });
        fireEvent.input(inputCelular, {target: {value: '1161605555'}});
   
        expect(inputCelular.value).toBe("1161605555")
    })

    it('Deberia obtener el valor del precio total del pedido correctamente', () => {
        render(<FormularioDePedidos />)

        const inputPrecioTotal = screen.getByRole('textbox', { name: /precio total:/i });
        fireEvent.input(inputPrecioTotal, {target: {value: '100'}});
   
        expect(inputPrecioTotal.value).toBe("100")
    })

    it('Deberia obtener todos los valores del pedido ingresados correctamente', async () => {
        render(<FormularioDePedidos />)

        const inputCliente = screen.getByRole('textbox', { name: /cliente/i });
        const inputPedido = screen.getByRole('textbox', { name: /pedido/i });
        const inputCelular = screen.getByRole('textbox', { name: /celular/i });
        const inputPrecioTotal = screen.getByRole('textbox', { name: /precio total/i });
        
        fireEvent.input(inputCliente, {target: {value: 'Carlos'}});
        fireEvent.input(inputPedido, {target: {value: 'El señor de los anillos'}});
        fireEvent.input(inputCelular, {target: {value: '1161605555'}});
        fireEvent.input(inputPrecioTotal, {target: {value: '100'}});

        fireEvent.click(screen.getByText(/Ingresar pedido/i));

        expect((await screen.getByDisplayValue("Carlos").value)).toBe(inputCliente.value)
        expect((await screen.getByDisplayValue("El señor de los anillos").value)).toBe(inputPedido.value)
        expect((await screen.getByDisplayValue("1161605555").value)).toBe(inputCelular.value)
        expect((await screen.getByDisplayValue("100").value)).toBe(inputPrecioTotal.value)
    })
})