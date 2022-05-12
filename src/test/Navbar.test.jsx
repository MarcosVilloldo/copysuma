import { render, screen } from '@testing-library/react'
import Navbar from '../App/components/navbar/Navbar'

describe('Test para probar el renderizado de Navbar', () => {
    it('Deberia renderizar el componente correctamente', () => {
        render(<Navbar />)
        expect(screen.getByRole('img'))
    })
})