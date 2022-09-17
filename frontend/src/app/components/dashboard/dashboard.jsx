import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";
import GraficoDeLineas from "../../components/grafico-de-lineas/GraficoDeLineas";
import GraficoDeTortas from "../../components/grafico-de-tortas/GraficoDeTortas";

import Styles from './Dashboard.module.css'

const Dashboard = (props) => {

    const calcularRecaudacionDiaria = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 }

        props.pedidos.map((pedido) => {
            let fechaActual = new Date();
            let fechaPedido = new Date(pedido.fechaEntrega);

            if (fechaActual.getDay() === fechaPedido.getDay() && pedido.finalizado) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

    const calcularRecaudacionMensual = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 }

        props.pedidos.map((pedido) => {
            let fechaActual = new Date();
            let fechaPedido = new Date(pedido.fechaEntrega);

            if (fechaActual.getMonth() === fechaPedido.getMonth() && pedido.finalizado) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

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
                <CardEstadisticas titulo={'Estadística diaria'} estadisticas={calcularRecaudacionDiaria()} />
                <CardEstadisticas titulo={'Estadística mensual'} estadisticas={calcularRecaudacionMensual()} />
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