import { render, screen } from '@testing-library/react'
import FormularioDePedidos from '../app/components/formulario-de-pedidos/FormularioDePedidos'

describe('Test para probar el renderizado del formulario de pedidos', () => {
    it('Deberia renderizar el formulario de pedidos', () => {
        render(<FormularioDePedidos />)

        screen.logTestingPlaygroundURL()
    })

    it('Deberia obtener el valor del cliente correctamente', () => {
        render(<FormularioDePedidos />)

        const inputCliente = screen.getByRole('textbox', { name: /cliente:/i });
        inputCliente.value = "Carlos";
   
        expect(inputCliente.value).toBe("Carlos")
    })

    it('Deberia obtener el valor del pedido correctamente', () => {
        render(<FormularioDePedidos />)

        const inputPedido = screen.getByRole('textbox', { name: /pedido:/i })
        inputPedido.value = "El señor de los anillos";
   
        expect(inputPedido.value).toBe("El señor de los anillos")
    })

    it('Deberia obtener el celular ingresado correctamente', () => {
        render(<FormularioDePedidos />)

        const inputCelular = screen.getByRole('textbox', { name: /celular:/i })
        inputCelular.value = "1161605555";
   
        expect(inputCelular.value).toBe("1161605555")
    })

    it('Deberia obtener el valor del precio total del pedido correctamente', () => {
        render(<FormularioDePedidos />)

        const inputPrecioTotal = screen.getByRole('spinbutton', { name: /precio total:/i })
        inputPrecioTotal.value = "100";
   
        expect(inputPrecioTotal.value).toBe("100")
    })
})