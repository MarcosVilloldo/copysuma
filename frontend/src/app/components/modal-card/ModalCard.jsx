import React from "react";
import { Modal, Button } from 'react-bootstrap';

const ModalAgregarModulo = (props) => {
    return (
        <Modal show={props.show} size={'lg'} backdrop='static' keyboard={false} centered>
            <Modal.Header >
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body >
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAgregarModulo;