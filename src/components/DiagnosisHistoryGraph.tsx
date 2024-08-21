import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

interface DiagnosisHistoryGraphProps {
  labels: string[];
  systolicValues: number[];
  diastolicValues: number[];
}

const DiagnosisHistoryGraph: React.FC<DiagnosisHistoryGraphProps> = ({
  labels,
  systolicValues,
  diastolicValues,
}) => {
  const reversedLabels = [...labels].reverse();
  const reversedSystolicValues = [...systolicValues].reverse();
  const reversedDiastolicValues = [...diastolicValues].reverse();

  return (
    <Line
      data={{
        labels: reversedLabels,
        datasets: [
          {
            label: 'Systolic',
            data: reversedSystolicValues,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 5,
            pointHoverRadius: 5,
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: 'Diastolic',
            data: reversedDiastolicValues,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5,
            pointHoverRadius: 5,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 11,
                family: "'Poppins', sans-serif",
              },
              color: '#072635',
            },
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${context.raw} mmHg`,
            },
            backgroundColor: '#ffffff',
            titleColor: '#072635',
            bodyColor: '#072635',
            borderColor: '#072635',
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 11, family: "'Poppins', sans-serif" },
              color: '#072635',
              padding: 10,
            },
          },
          y: {
            grid: { color: 'rgba(200, 200, 200, 0.3)' },
            ticks: {
              font: { size: 11, family: "'Poppins', sans-serif" },
              color: '#072635',
            },
          },
        },
      }}
    />
  );
};

export default DiagnosisHistoryGraph;
