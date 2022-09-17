import React from "react";
import { Row, Col } from 'react-bootstrap';
import CardEstadisticas from "../../components/card-estadisticas/CardEstadisticas";
import GraficoDeLineas from "../../components/grafico-de-lineas/GraficoDeLineas";
import GraficoDeTortas from "../../components/grafico-de-tortas/GraficoDeTortas";

import Styles from './Dashboard.module.css'

const Dashboard = (props) => {

    const calcularEstadisticasDiarias = () => {
        let estadisticas = { ventasTotales: 0, importeTotal: 0 };

        props.pedidos.map((pedido) => {
            let fechaActual = new Date();
            let fechaPedido = new Date(pedido.fechaBaja);

            if (fechaActual.getDay() === fechaPedido.getDay()) {
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
        <>
            <Row>
                <CardEstadisticas titulo={'Estadística diaria'} estadisticas={calcularEstadisticasDiarias()} />
                <CardEstadisticas titulo={'Estadística mensual'} estadisticas={calcularEstadisticasMensuales()} />
            </Row>
            <Row>
                <CardEstadisticas titulo={'Estadística anual'} estadisticas={calcularEstadisticasAnuales()} />
            </Row>
            <hr />
            <Row className={Styles.graficos}>
                <Col><GraficoDeLineas /></Col>
                {/* <Col><GraficoDeTortas /></Col> */}
            </Row>
        </>
    );
};

export default Dashboard;