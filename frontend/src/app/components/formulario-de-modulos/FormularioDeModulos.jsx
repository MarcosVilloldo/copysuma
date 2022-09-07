import React from "react";
import { Form, Col } from 'react-bootstrap';
import Styles from './FormularioDeModulos.module.css';

const FormularioDeModulos = (props) => {
    return (
        <Form>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Titulo </Form.Label>
                <Form.Control className={Styles.placeholder} type='text' placeholder='Ingresar titulo...' {...props.register('titulo', { required: 'titulo es requerido' })} />
                <Col className={Styles.span}>{props.errors?.titulo && props.errors.titulo.message}</Col>
            </Form.Group>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Portada </Form.Label>
                <Form.Control className={Styles.placeholder} type='file' {...props.register('portada')} />
            </Form.Group>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Descripcion </Form.Label>
                <Form.Control className={Styles.placeholder} as="textarea" placeholder='Ingresar descripcion...' {...props.register('descripcion')} />
            </Form.Group>
        </Form>
    );
};

export default FormularioDeModulos;