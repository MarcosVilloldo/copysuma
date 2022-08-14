import { render, fireEvent } from '@testing-library/react'
import ListaDePedidosPreparados from './ListaDePedidosPreparados'

var jsonPedidos;

describe('Test para probar lista de pedidos preparados', () => {

    beforeEach(() => {
        jsonPedidos = {
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
    })

    it('Deberia renderizar el componente ListaDePedidosPreparados', () => {
        const contenedor = setup();

        expect(contenedor.getByText("Lista de pedidos preparados"))
    })

    it('Deberia renderizar una lista de 2 pedidos preparados', () => {
        const contenedor = setup();

        expect(contenedor.container.querySelectorAll('#item-pedido')).toHaveLength(2);
    })

    it('Deberia obtener el primer pedido preparado de la lista  y ser igual al esperado', () => {
        const contenedor = setup();

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

    it('Al hacer click en los botones finalizar de los pedidos se deberia modificar el valor del boton a finalizado', () => {
        const contenedor = setup();

        let botonFinalizar = contenedor.getAllByRole('button', { name: 'finalizar' })

        expect(botonFinalizar).toHaveLength(2);

        fireEvent.click(botonFinalizar[0]);
        fireEvent.click(botonFinalizar[1]);

        setup();

        expect(contenedor.getAllByRole('button', { name: 'finalizado' })).toHaveLength(2);
    })

})

const setup = () => {
    return (
        render(
            <ListaDePedidosPreparados
                paginaActiva={1}
                pedidos={jsonPedidos.pedidos}
                paginaSiguiente={paginaSiguiente}
                paginaAnterior={paginaAnterior}
                boton={boton}
                finalizarPedido={finalizarPedido}
            />
        )
    );
}

const paginaSiguiente = () => { }

const paginaAnterior = () => { }

const finalizarPedido = (idPedido) => {
    for (let item of jsonPedidos.pedidos) {
        item.id === idPedido ? item.finalizado = true : null
    }
}

const boton = { botonAnterior: "hidden", botonSiguiente: "hidden" };