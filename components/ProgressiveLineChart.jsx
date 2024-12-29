// components/LineChart.js

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { CHART_CONFIG } from '@/utils/config/chart';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressiveLineChart = () => {
  return <Line data={CHART_CONFIG.data} options={CHART_CONFIG.options} />;
};

export default ProgressiveLineChart;
