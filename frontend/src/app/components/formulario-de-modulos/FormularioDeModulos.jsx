import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Form, Row } from 'react-bootstrap';
import Styles from './FormularioDeModulos.module.css';

const FormularioDeModulos = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <Form>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Titulo </Form.Label>
                <Form.Control className={Styles.placeholder} type='text' placeholder='Ingresar titulo...' {...register('titulo')} />
            </Form.Group>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Portada </Form.Label>
                <Form.Control className={Styles.placeholder} type='file' {...register('portada')} />
            </Form.Group>
            <Form.Group className={Styles.inputs}>
                <Form.Label> Descripcion </Form.Label>
                <Form.Control className={Styles.placeholder} as="textarea" placeholder='Ingresar descripcion...' {...register('descripcion')} />
            </Form.Group>
        </Form>
    );
};

export default FormularioDeModulos;