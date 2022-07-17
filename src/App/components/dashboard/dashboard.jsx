import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line, Pie } from 'react-chartjs-2';
import { Row, Col, Card } from 'react-bootstrap';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import jsonPedidos from "../../helpers/pedidos.json"

import './dashboard.css'

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Dashboard = () => {
    const dataLine = {
        labels: pedidosDiarios().map((pedido) => formatearFecha(pedido.fecha)),
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
        <Row className="box-dashboard">
            <Col md="6">
                <Row className="box-cantidad-recaudacion" md="6" >
                    <Col className="card-recaudacion" md="6">
                        <Card>
                            <Card.Body>
                                <Card.Title> Recaudación diaria </Card.Title>
                                <Card.Text className="texto-recaudacion"><b>{'$ ' + 0}</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="card-recaudacion" md="6">
                        <Card>
                            <Card.Body>
                                <Card.Title> Recaudación total </Card.Title>
                                <Card.Text className="texto-recaudacion"><b>{'$ ' + calcularTotalRecaudado()}</b></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="box-grafico-de-lineas" md="6">
                    <Line datasetIdKey={1} data={dataLine} options={optionsLine} />
                </Row>
            </Col>
            <Col className="columna-pie" md="6">
                <Pie data={dataPie} />
            </Col>
        </Row>
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
        if (pedido.fecha !== fechaAux) {
            fechaAux = pedido.fecha;
            let estadistica = {
                fecha: pedido.fecha,
                cantidad: jsonPedidos.pedidos.filter(i => i.fecha === pedido.fecha).length
            }
            pedidosPorDia.push(estadistica);
        }
    })

    return pedidosPorDia;
}

export default Dashboard;