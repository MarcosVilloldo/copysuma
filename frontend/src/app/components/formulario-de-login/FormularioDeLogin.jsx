import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Container, Col, Row, Image, Button, Form } from 'react-bootstrap';
import Logo from "../../img/logo-copysuma.png";
import Styles from './FormularioDeLogin.module.css';

const FormularioDeLogin = (props) => {
    const { register, handleSubmit } = useForm();
    const [errorCredenciales, setErrorCredenciales] = useState('');

    const onSubmit = async (data) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            user: data.usuario,
            password: data.contrasenia
        }).then(
            response => {
                if (response.data.usuario !== undefined) {
                    props.setIsLogged(true);
                    props.setSession(response.data);
                } else {
                    setErrorCredenciales('Las credenciales ingresadas son incorrectas');
                }
            }
        ).catch(
            error => { console.log(error); }
        )
    };

    return (
        <Form className={Styles.formulario} onSubmit={handleSubmit(onSubmit)}>
            <Container className={Styles.contenedor}>
                <Image className={Styles.logo} src={Logo} as={Col} />
                <Form.Group className={Styles.input}>
                    <Form.Label> Usuario </Form.Label>
                    <Form.Control className={Styles.textInput} type='text' placeholder='Ingresar usuario...' {...register('usuario')} />
                </Form.Group>
                <Form.Group className={Styles.input}>
                    <Form.Label> Contraseña </Form.Label>
                    <Form.Control className={Styles.textInput} type='password' placeholder='Ingresar contraseña...' {...register('contrasenia')} />
                </Form.Group>
                <Row className={Styles.rowBoton}>
                    <Button className={Styles.boton} variant='dark' type='submit'> Iniciar </Button>
                </Row>
                <Row className={Styles.span}>{errorCredenciales}</Row>
            </Container>
        </Form>
    );
};

export default FormularioDeLogin;