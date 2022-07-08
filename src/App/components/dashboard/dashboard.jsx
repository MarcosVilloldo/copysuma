import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line, Pie } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import jsonPedidos from "../../helpers/pedidos.json"

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Dashboard = () => {
    return (
        <Row>
            <Col md="6">
                <Row md="6">
                    <h2>Recaudado: <b>9599</b></h2>
                  
                </Row>
                <Row md="6">
                    <Line
                        datasetIdKey={1}
                        data={{
                            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'],
                            datasets: [
                                {
                                    id: 'id',
                                    label: 'Pedidos',
                                    tension: 0.3,
                                    data: [5, 6, 7],
                                    pointRadius: 6,
                                    borderColor: "rgb(75,192,192)",
                                    backgroundColor: "rgb(205,203,202)"
                                },
                            ],
                        }}
                    />
                </Row>
            </Col>
            <Col md="6">
                <Pie
                    data={{
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
                    }}
                />
            </Col>
        </Row>
    );
};

export default Dashboard;