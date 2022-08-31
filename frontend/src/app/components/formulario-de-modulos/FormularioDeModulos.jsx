import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Form, Row } from 'react-bootstrap';

const FormularioDeModulos = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <Form>
            <Form.Group>
                <Form.Label> Titulo </Form.Label>
                <Form.Control type='text' placeholder='Ingresar titulo...' {...register('titulo')} />
            </Form.Group>
            <Form.Group>
                <Form.Label> Portada </Form.Label>
                <Form.Control type='file' {...register('portada')} />
            </Form.Group>
            <Form.Group>
                <Form.Label> Descripcion </Form.Label>
                <Form.Control as="textarea" placeholder='Ingresar descripcion...' {...register('descripcion')} />
            </Form.Group>
        </Form>
    );
};

export default FormularioDeModulos;