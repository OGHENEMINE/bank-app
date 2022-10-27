import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Analysis',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Transfer',
      data: labels.map(() => faker?.datatype?.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(30, 64, 175)',
    },
    {
      label: 'Withdrawal',
      data: labels.map(() => faker?.datatype?.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 255, 0)',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
