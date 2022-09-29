import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

import Styles from './CardEstadisticas.module.css';

const CardEstadisticas = (props) => {

    return (
        <Col className={Styles.box}>
            <Row className={Styles.header}> {props.titulo} </Row>
            <Row className={Styles.body}>
                <Card className={Styles.card} as={Col}>
                    <Card.Body>
                        <Card.Title> Ventas </Card.Title>
                        {props.estadisticas ?
                            <Card.Text className={Styles.valor}> {props.estadisticas.ventasTotales} </Card.Text> :
                            <Card.Text className={Styles.valor}> 0 </Card.Text>
                        }
                    </Card.Body>
                </Card>
                <Card className={Styles.card} as={Col}>
                    <Card.Body>
                        <Card.Title> Recaudación </Card.Title>
                        {props.estadisticas ?
                            <Card.Text className={Styles.valor}> {'$ ' + new Intl.NumberFormat('de-DE').format(props.estadisticas.importeTotal)} </Card.Text> :
                            <Card.Text className={Styles.valor}> {'$ ' + 0} </Card.Text>
                        }
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    );
};

export default CardEstadisticas;