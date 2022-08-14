import React from "react";
import { useForm } from 'react-hook-form';
import { Image, Button, Form, Row, Col } from 'react-bootstrap';
import Logo from "../../img/logo-copysuma.png";
import Styles from './FormularioDeLogin.module.css';

const FormularioDeLogin = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.usuario == 'admin' && data.contrasenia == 'admin') {
            props.setIsLogged(true);
        }
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
            </Row>
        </Form>
    );
};

export default FormularioDeLogin;