import React from "react";
import { useForm } from 'react-hook-form';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Logo from "../../img/logo-copysuma.png";
import Styles from './FormularioDeLogin.module.css';

const FormularioDeLogin = () => {
    return (
        <Form className={Styles.body}>
            <img src={Logo} />
            <Form.Group >
                <Form.Label> Usuario </Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Form.Group >
                <Form.Label> Contraseña </Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Button variant='dark' type='submit'> Iniciar </Button>
        </Form>
    );
};

export default FormularioDeLogin;