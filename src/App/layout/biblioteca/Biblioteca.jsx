import React, { useState } from "react";
import { Accordion } from 'react-bootstrap';
import ListaDeLibros from "../../components/lista-de-libros/ListaDeLibros";
import Buscador from "../../components/buscador/Buscador";
import jsonBiblioteca from "../../helpers/biblioteca.json";

const Biblioteca = () => {
    const [biblioteca, setBiblioteca] = useState(jsonBiblioteca.biblioteca);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(['titulo']);
    const [textoBusqueda, setTextBusqueda] = useState('');

    const filtrarPedidos = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="accordion-item-preparados" eventKey="0">
                    <Accordion.Header className="accordion-header-preparados"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body-preparados">
                        <Buscador filtros={['titulo']} filtroDeBusqueda={filtroDeBusqueda} filtrar={filtrarPedidos} modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <ListaDeLibros biblioteca={biblioteca}/>
        </>
    );
};

export default Biblioteca;