import React, { useEffect, useState } from "react";
import { Accordion } from 'react-bootstrap';
import ListaDeLibros from "../../components/lista-de-libros/ListaDeLibros";
import Buscador from "../../components/buscador/Buscador";
import jsonBiblioteca from "../../helpers/biblioteca.json";

const filtro = { TITULO: 'titulo', TIPO: 'tipo' }

const Biblioteca = () => {
    const [biblioteca, setBiblioteca] = useState(jsonBiblioteca.biblioteca);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.TITULO);
    const [textoBusqueda, setTextBusqueda] = useState('');

    useEffect(() => {
        let modulosFiltrados;

        if (filtroDeBusqueda === filtro.TITULO) modulosFiltrados = biblioteca.filter(modulo => modulo.titulo.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.TIPO) modulosFiltrados = biblioteca.filter(modulo => modulo.tipo.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());

        if (modulosFiltrados.length > 0) {
            setBiblioteca(modulosFiltrados);
        } else {
            setBiblioteca(jsonBiblioteca.biblioteca);
        }

    }, [textoBusqueda, filtroDeBusqueda]);

    const filtrarModulo = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="accordion-item-preparados" eventKey="0">
                    <Accordion.Header className="accordion-header-preparados"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body-preparados">
                        <Buscador filtros={[filtro.TITULO, filtro.TIPO]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarModulo}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <ListaDeLibros biblioteca={biblioteca} />
        </>
    );
};

export default Biblioteca;