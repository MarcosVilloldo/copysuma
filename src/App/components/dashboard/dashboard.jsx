import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Dashboard = () => (
    <>
        <Line
            datasetIdKey= {1}
            data={{
                labels: ['Jun', 'Jul', 'Aug'],
                datasets: [
                    {
                        id: 1,
                        label: '',
                        data: [5, 6, 7],
                        borderColor: "rgb(75,192,192)"
                    },
                ],
            }}
        />
    </>
);

export default Dashboard;