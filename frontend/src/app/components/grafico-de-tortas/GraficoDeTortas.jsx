import React from "react";
import { Pie } from 'react-chartjs-2';

const GraficoDeTortas = () => {
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

    return (
        <Pie data={dataPie} />
    );
};

export default GraficoDeTortas;