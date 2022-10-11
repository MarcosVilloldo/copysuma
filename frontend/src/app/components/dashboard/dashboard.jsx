import React from "react";
import { Container, Row } from 'react-bootstrap';
import CardEstadisticas from "../card-estadisticas/CardEstadisticas";
import GraficoDeLineas from "../grafico-de-lineas/GraficoDeLineas";

import Styles from './Dashboard.module.css'

const Dashboard = (props) => {

    const calcularEstadisticasDiarias = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 };

        props.pedidos.map((pedido) => {
            let fechaActual = new Date();
            let fechaPedido = new Date(pedido.fechaBaja);

            if (fechaActual.getDate() === fechaPedido.getDate()) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

    const calcularEstadisticasMensuales = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 };

        props.pedidos.map((pedido) => {
            let fechaActual = new Date();
            let fechaPedido = new Date(pedido.fechaBaja);

            if (fechaActual.getMonth() === fechaPedido.getMonth()) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

    const calcularEstadisticasAnuales = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 };

        props.pedidos.map((pedido) => {
            if (pedido.fechaBaja) {
                estadisticas.importeTotal = estadisticas.importeTotal + pedido.importe;
                estadisticas.ventasTotales++;
            }
        })

        return estadisticas;
    }

    return (
        <Container className={Styles.contenedor}>
            <Row className={Styles.cardEstadisticas}>
                <CardEstadisticas titulo={'Estadística diaria'} estadisticas={calcularEstadisticasDiarias()} />
                <CardEstadisticas titulo={'Estadística mensual'} estadisticas={calcularEstadisticasMensuales()} />
            </Row>
            <Row>
                <CardEstadisticas titulo={'Estadística anual'} estadisticas={calcularEstadisticasAnuales()} />
            </Row>
            <hr />
            <Row className={Styles.graficos}>
                <GraficoDeLineas pedidos={props.pedidos} />
            </Row>
        </Container>
    );
};

export default Dashboard;