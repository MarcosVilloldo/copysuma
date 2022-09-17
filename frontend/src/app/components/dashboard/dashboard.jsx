import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";
import GraficoDeLineas from "../../components/grafico-de-lineas/GraficoDeLineas";
import GraficoDeTortas from "../../components/grafico-de-tortas/GraficoDeTortas";

import Styles from './Dashboard.module.css'

const Dashboard = (props) => {

    const calcularRecaudacionAnual = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 }

        props.pedidos.map((pedido) => {
            if (pedido.finalizado) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

    return (
        <>
            <Row>
                <CardEstadisticas titulo={'Estadística diaria'} />
                <CardEstadisticas titulo={'Estadística mensual'} />
            </Row>
            <Row>
                <CardEstadisticas titulo={'Estadística anual'} estadisticas={calcularRecaudacionAnual()} />
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