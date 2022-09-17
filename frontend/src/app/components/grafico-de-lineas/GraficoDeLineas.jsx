import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';
import jsonPedidos from "../../helpers/pedidos.json"

import Styles from './GraficoDeLineas.module.css'

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const GraficoDeLineas = () => {
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

    const optionsLine = {
        fill: true,
        scales: {
            y: {
                min: 0,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

    return (
        <Line datasetIdKey={1} data={dataLine} options={optionsLine} />
    );
};

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

export default GraficoDeLineas;