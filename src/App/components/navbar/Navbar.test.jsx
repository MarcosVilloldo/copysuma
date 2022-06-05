import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Test para probar el renderizado del Navbar', () => {
    it('Deberia renderizar el elemento img correctamente', () => {
        render(<Navbar />)
        expect(screen.getByRole('img'))
    })
})