import { parseISO } from 'date-fns';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: false,
    elements: {},
    plugins: {
      scales: {
        beginAtZero: true,
      },
      legend: {
        display: false,
        labels: {
          display: true,
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: 'Weekly Sales',
        font: {
          size: 15,
          color: 'rgb(146 102 235)',
        },
      },
    },
  };

  const completedCount = [0, 0, 0, 0, 0, 0, 0];
  chartData.forEach(
    (data) => (completedCount[parseISO(data.created_at).getDay()] += 1)
  );

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const data = {
    labels: labels,
    datasets: [
      {
        data: completedCount,
        fill: false,
        borderColor: 'rgb(146 102 235)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='canvas-div'>
      <Line data={data} height={400} width={700} options={options} />
    </div>
  );
};

export default Chart;
