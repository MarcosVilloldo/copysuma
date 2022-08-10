import React from "react";
import { useForm } from 'react-hook-form';
import { Image, Button, Form, Row, Col } from 'react-bootstrap';
import Logo from "../../img/logo-copysuma.png";
import Styles from './FormularioDeLogin.module.css';

const FormularioDeLogin = () => {
    return (
        <Form className={Styles.body} as={Row}>
            <Image className={Styles.image} src={Logo} as={Col} />
            <Form.Group className={Styles.input}>
                <Form.Label> Usuario </Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Form.Group className={Styles.input}>
                <Form.Label> Contraseña </Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Button className={Styles.boton} variant='dark' type='submit'> Iniciar </Button>
        </Form>
    );
};

export default FormularioDeLogin;