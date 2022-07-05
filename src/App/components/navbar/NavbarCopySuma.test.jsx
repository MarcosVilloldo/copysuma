import { render, screen } from '@testing-library/react'
import NavbarCopySuma from './NavbarCopySuma'

describe('Test para probar el renderizado del Navbar', () => {
    it('Deberia renderizar el elemento img correctamente', () => {
        render(<NavbarCopySuma />)
        expect(screen.getByRole('img'))
    })
})