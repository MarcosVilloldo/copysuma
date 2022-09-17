import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import GraficoDeLineas from "../../components/grafico-de-lineas/GraficoDeLineas";
import GraficoDeTortas from "../../components/grafico-de-tortas/GraficoDeTortas";
import jsonPedidos from "../../helpers/pedidos.json"

import Styles from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <>
            <Row>
                <Col className={Styles.box}>
                    <Row className={Styles.header}> Estadística diarias </Row>
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
                <Col className={Styles.box}>
                    <Row className={Styles.header}> Estadística mensuales </Row>
                    <Row className={Styles.body}>
                        <Card className={Styles.cardEstadisticas} as={Col}>
                            <Card.Body>
                                <Card.Title> Ventas </Card.Title>
                                <Card.Text className={Styles.valorCard}> 5 </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={Styles.card} as={Col}>
                            <Card.Body>
                                <Card.Title> Recaudación </Card.Title>
                                <Card.Text className={Styles.valorCard}> {'$ ' + calcularTotalRecaudado()} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className={Styles.box}>
                    <Row className={Styles.header}> Estadistica anual </Row>
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
            </Row>
            <hr />
            <Row className={Styles.boxGraficos}>
                <Col>
                    <GraficoDeLineas />
                </Col>
                <Col className={Styles.graficoTortas} >
                    <GraficoDeTortas />
                </Col>
            </Row>
        </>
    );
};

const calcularTotalRecaudado = () => {
    let totalRecaudado = 0;
    jsonPedidos.pedidos.map((pedido) => {
        totalRecaudado = totalRecaudado + pedido.importe;
    })

    return totalRecaudado;
}

export default Dashboard;