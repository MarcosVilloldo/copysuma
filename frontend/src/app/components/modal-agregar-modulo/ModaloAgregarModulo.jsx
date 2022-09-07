import React from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import FormularioDeModulos from "../formulario-de-modulos/FormularioDeModulos";
import Styles from './ModalAgregarModulo.module.css';

const ModalAgregarModulo = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const agregarModulo = (data) => {
        let moduloNuevo = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            tipo: "Libro",
            portada: data.portada.length === 1 ? data.portada[0].name : 'imagen-prueba.png'
        };

        AgregarModuloNuevo(moduloNuevo);
    }

    return (
        <Modal show={props.show} size={'lg'} backdrop='static' keyboard={false} centered>
            <Modal.Header className={Styles.header}>
                <Modal.Title>Agregar modulo</Modal.Title>
            </Modal.Header>
            <Modal.Body className={Styles.body}>
                <FormularioDeModulos register={register} errors={errors} />
            </Modal.Body>
            <Modal.Footer className={Styles.footer}>
                <Button className={Styles.boton} variant="secondary" onClick={props.handleClose}>Cancelar</Button>
                <Button className={Styles.boton} variant="dark" type='submit' onClick={handleSubmit(agregarModulo)}>Confirmar</Button>
            </Modal.Footer>
        </Modal>
    )
};

const AgregarModuloNuevo = async (moduloNuevo) => {
    await axios.post('http://localhost:9000/modulos/agregar', moduloNuevo);
}

export default ModalAgregarModulo;