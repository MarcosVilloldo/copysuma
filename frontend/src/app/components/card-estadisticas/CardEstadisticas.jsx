import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

import Styles from './CardEstadisticas.module.css';

const CardEstadisticas = (props) => {

    return (
        <Col className={Styles.box}>
            <Row className={Styles.header}> {props.titulo} </Row>
            <Row className={Styles.body}>
                <Card className={Styles.cardEstadisticas} as={Col}>
                    <Card.Body>
                        <Card.Title> Ventas </Card.Title>
                        <Card.Text className={Styles.valorCard}> 0 </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={Styles.cardEstadisticas} as={Col}>
                    <Card.Body>
                        <Card.Title> Recaudación </Card.Title>
                        <Card.Text className={Styles.valorCard}> {'$ ' + 0} </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    );
};

export default CardEstadisticas;