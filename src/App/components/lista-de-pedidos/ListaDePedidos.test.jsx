import { render, screen } from '@testing-library/react'
import ListaDePedidos from './ListaDePedidos'
import jsonPedidos from "../../helpers/pedidos.json"

const boton = {
    botonAnterior: "hidden",
    botonSiguiente: "hidden"
};

const paginaSiguiente = () => {}
const paginaAnterior = () => {}

describe('Test para probar lista de pedidos', () => {
    it('Deberia renderizar el encabezado de la lista de pedidos', () => {
        render(<ListaDePedidos paginaActiva={1} pedidos={jsonPedidos.pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton}/>)
      
        expect(screen.getByText("Lista de pedidos"))
    })

    it('Deberia renderizar una lista de 10 pedidos', () => {
        render(<ListaDePedidos paginaActiva={1} pedidos={jsonPedidos.pedidos} paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior} boton={boton}/>)
    
        expect(screen.getAllByTestId("item-pedido")).toHaveLength(10);
    })
})