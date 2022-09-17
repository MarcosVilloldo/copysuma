import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";
import GraficoDeLineas from "../../components/grafico-de-lineas/GraficoDeLineas";
import GraficoDeTortas from "../../components/grafico-de-tortas/GraficoDeTortas";

import Styles from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <>
            <Row>
                <CardEstadisticas titulo={'Estadística diaria'} />
                <CardEstadisticas titulo={'Estadística mensual'} />
            </Row>
            <Row>
                <CardEstadisticas titulo={'Estadística anual'} />
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

export default Dashboard;