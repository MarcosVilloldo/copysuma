import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import { formatearFecha } from '../../utils/formateador-de-fecha.js';

import Styles from './GraficoDeLineas.module.css'

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const GraficoDeLineas = (props) => {
    const dataLine = {
        labels: ObtenerEstadisticasPedidosDiarios(props.pedidos).map((pedido) => formatearFecha(pedido.fecha)),
        datasets: [
            {
                id: 'id',
                label: 'Pedidos',
                tension: 0.3,
                data: ObtenerEstadisticasPedidosDiarios(props.pedidos).map((pedido) => pedido.cantidad),
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
            y: { min: 0, max: 10 }
        },
        plugins: {
            legend: { display: false }
        }
    }

    return (
        <Line datasetIdKey={1} data={dataLine} options={optionsLine} />
    );
};

const ObtenerEstadisticasPedidosDiarios = (pedidos) => {
    let diasUsados = [];
    let fechas = [];

    pedidos.map((pedido) => {
        let auxFecha = new Date(pedido.fechaBaja);

        if (pedido.fechaBaja && !diasUsados.includes(auxFecha.getDay())) {
            diasUsados.push(auxFecha.getDay());
            fechas.push({ fecha: auxFecha, cantidad: pedidos.filter(i => new Date(i.fechaBaja).getDay() === auxFecha.getDay()).length });
        }
    });

    return fechas.sort((a, b) => a.fecha - b.fecha);
}

export default GraficoDeLineas;