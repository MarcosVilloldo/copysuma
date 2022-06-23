import { render, screen } from '@testing-library/react'
import ListaDePedidos from './ListaDePedidos'
import jsonPedidos from "../../helpers/pedidos-test.json"

const boton = {
    botonAnterior: "hidden",
    botonSiguiente: "hidden"
};

const paginaSiguiente = () => { }
const paginaAnterior = () => { }

describe('Test para probar lista de pedidos', () => {

    it('Deberia renderizar el componente ListaDePedidos', () => {
        render(<ListaDePedidos paginaActiva={1} pedidos={jsonPedidos.pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton} />)

        expect(screen.getByText("Lista de pedidos"))
    })

    it('Deberia renderizar una lista de 2 pedidos', () => {
        const contenedor = render(<ListaDePedidos paginaActiva={1} pedidos={jsonPedidos.pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton} />)

        expect(contenedor.container.querySelectorAll('#item-pedido')).toHaveLength(2);
    })

    it('Deberia obtener el primer valor de la lista de pedidos y ser igual al esperado', () => {
        const contenedor = render(<ListaDePedidos paginaActiva={1} pedidos={jsonPedidos.pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton} />)

        const pedidoEsperado = {
            cliente: ' Marcos ',
            celular: ' 11123232 ',
            pedido: ' El señor de los anillos ',
            importe: ' $ 200 '
        }

        const pedidosObtenidos = contenedor.container.querySelectorAll('#item-pedido');

        const pedidoObtenido = {
            cliente: pedidosObtenidos.item(0).querySelector('#cliente').textContent,
            celular: pedidosObtenidos.item(0).querySelector('#celular').textContent,
            pedido: pedidosObtenidos.item(0).querySelector('#pedido').textContent,
            importe: pedidosObtenidos.item(0).querySelector('#importe').textContent
        }

        expect(pedidoObtenido).toEqual(pedidoEsperado);
    })

})