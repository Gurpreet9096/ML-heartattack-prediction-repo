import React, { useRef, useEffect } from 'react';
import { ChartData } from '../../types';

interface RiskFactorsChartProps {
  data: ChartData;
}

declare global {
  interface Window {
    Chart: any;
  }
}

const RiskFactorsChart: React.FC<RiskFactorsChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const loadChart = async () => {
      if (!window.Chart) {
        const Chart = await import('chart.js/auto');
        window.Chart = Chart;
      }
      
      if (chartRef.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          chartInstance.current = new window.Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: {
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Impact Score',
                  },
                  max: 100,
                },
              },
              animation: {
                duration: 1000,
                easing: 'easeOutQuart',
              },
            },
          });
        }
      }
    };

    loadChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default RiskFactorsChart;