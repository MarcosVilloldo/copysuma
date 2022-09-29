import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Image, Button, Form, Row, Col } from 'react-bootstrap';
import Logo from "../../img/logo-copysuma.png";
import Styles from './FormularioDeLogin.module.css';

const FormularioDeLogin = (props) => {
    const { register, handleSubmit } = useForm();
    const [errorCredenciales, setErrorCredenciales] = useState('');

    const onSubmit = async (data) => {
        axios.post('http://localhost:9000/login', {
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
        <Form className={Styles.body} onSubmit={handleSubmit(onSubmit)}>
            <Row className={Styles.rowImage}>
                <Image className={Styles.image} src={Logo} as={Col} />
            </Row>
            <Form.Group className={Styles.input}>
                <Form.Label> Usuario </Form.Label>
                <Form.Control type='text' placeholder='Ingresar usuario...' {...register('usuario')} />
            </Form.Group>
            <Form.Group className={Styles.input}>
                <Form.Label> Contraseña </Form.Label>
                <Form.Control type='password' placeholder='Ingresar contraseña...' {...register('contrasenia')} />
            </Form.Group>
            <Row className={Styles.rowBoton}>
                <Button className={Styles.boton} variant='dark' type='submit'> Iniciar </Button>
                <span className={Styles.span}>{errorCredenciales}</span>
            </Row>
        </Form>
    );
};

export default FormularioDeLogin;