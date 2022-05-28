import { render, screen } from '@testing-library/react'
import ListaDePedidos from '../app/components/lista-de-pedidos/ListaDePedidos'

describe('Test para probar lista de pedidos', () => {
    it('Deberia renderizar el encabezado de la lista de pedidos', () => {
        render(<ListaDePedidos paginaActiva={1}/>)
      
        expect(screen.getByText("Lista de pedidos"))
    })

    it('Deberia renderizar una lista de 10 pedidos', () => {
        const {container} = render(<ListaDePedidos paginaActiva={1}/>)
    
        expect(container.querySelectorAll('#item-pedido')).toHaveLength(10)
    })
})