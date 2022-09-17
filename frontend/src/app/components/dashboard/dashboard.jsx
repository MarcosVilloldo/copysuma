import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line, Pie } from 'react-chartjs-2';
import { Row, Col, Card, Navbar } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import jsonPedidos from "../../helpers/pedidos.json"

import Styles from './Dashboard.module.css'

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Dashboard = () => {
    const dataLine = {
        labels: pedidosDiarios().map((pedido) => formatearFecha(pedido.fechaPedido)),
        datasets: [
            {
                id: 'id',
                label: 'Pedidos',
                tension: 0.3,
                data: pedidosDiarios().map((pedido) => pedido.cantidad),
                pointRadius: 3,
                borderColor: "rgba(255, 99, 132, 0.2)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBackgroundColor: "rgba(0, 0, 0, 0.3)"
            },
        ],
    }

    const dataPie = {
        labels: ['Libros', 'Fotocopias', 'Otros'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [55, 16, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
            },
        ],
    }

    const optionsLine = {
        fill: true,
        scales: {
            y: {
                min: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

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
                    <Row className={Styles.tituloGraficoLineas}> Historial de ventas </Row>
                    <Line datasetIdKey={1} data={dataLine} options={optionsLine} />
                </Col>
                <Col className={Styles.boxGraficoTortas} >
                    <Pie data={dataPie} />
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

const pedidosDiarios = () => {
    let pedidosPorDia = [];
    let fechaAux = null;

    jsonPedidos.pedidos.map((pedido) => {
        if (pedido.fechaPedido !== fechaAux) {
            fechaAux = pedido.fechaPedido;
            let estadistica = {
                fechaPedido: pedido.fechaPedido,
                cantidad: jsonPedidos.pedidos.filter(i => i.fechaPedido === pedido.fechaPedido).length
            }
            pedidosPorDia.push(estadistica);
        }
    })

    return pedidosPorDia;
}

export default Dashboard;