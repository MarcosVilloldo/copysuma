import React from "react";
import { Card } from 'react-bootstrap';
import "./ListaDeLibros.css"


const ListaDeLibros = () => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>El señor de los anillos</Card.Title>
                    <Card.Text>
                        Una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkie.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};


export default ListaDeLibros;