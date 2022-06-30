import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom";

import Buscador from './Buscador'

const setup = () => {
    render(<Buscador />)
}

describe('Test para probar el renderizado del buscador', () => {
    it('Deberia renderizar el buscador de pedidos preparados', () => {
        setup();
    })
})