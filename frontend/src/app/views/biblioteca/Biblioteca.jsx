import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Spinner, Col } from 'react-bootstrap';
import ListaDeLibros from "../../components/lista-de-libros/ListaDeLibros";
import Buscador from "../../components/buscador/Buscador";

const filtro = { TITULO: 'titulo', TIPO: 'tipo' }

const Biblioteca = () => {
    const [biblioteca, setBiblioteca] = useState([]);
    const [actualizo, setActualizo] = useState(false);
    const [seFiltro, setSeFiltro] = useState(false);
    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState(filtro.TITULO);
    const [textoBusqueda, setTextBusqueda] = useState('');

    useEffect(() => {
        obtenerModulos(setActualizo, setBiblioteca);
    }, []);

    useEffect(() => {
        let modulosFiltrados;

        if (filtroDeBusqueda === filtro.TITULO) modulosFiltrados = biblioteca.filter(modulo => modulo.titulo.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());
        if (filtroDeBusqueda === filtro.TIPO) modulosFiltrados = biblioteca.filter(modulo => modulo.tipo.toLocaleLowerCase() === textoBusqueda.toLocaleLowerCase());

        if (modulosFiltrados.length > 0) {
            setBiblioteca(modulosFiltrados);
            setSeFiltro(true);
        } else if(seFiltro){
            obtenerModulos(setActualizo, setBiblioteca);
            setSeFiltro(false);
        }

    }, [textoBusqueda, filtroDeBusqueda]);

    const filtrarModulo = (busqueda) => setTextBusqueda(busqueda);

    const modificarFiltroBusqueda = (filtro) => setFiltroDeBusqueda(filtro);

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header"> Buscador </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <Buscador filtros={[filtro.TITULO, filtro.TIPO]}
                            filtroDeBusqueda={filtroDeBusqueda}
                            filtrar={filtrarModulo}
                            modificarFiltroBusqueda={modificarFiltroBusqueda} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            {actualizo ?
                <Col className="spinner"><Spinner animation="border" role="status" /></Col> : <ListaDeLibros biblioteca={biblioteca} />
            }
        </>
    );
};

const obtenerModulos = async (setActualizo, setBiblioteca) => {
    setActualizo(true);
    const modulosObtenidos = await axios.get('http://localhost:9000/modulos');
    setBiblioteca(modulosObtenidos.data);
    setActualizo(false);
}

export default Biblioteca;