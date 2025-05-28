import React, { useRef, useEffect } from 'react';
import { ChartData } from '../../types';

interface AgeDistributionChartProps {
  data: ChartData;
}

declare global {
  interface Window {
    Chart: any;
  }
}

const AgeDistributionChart: React.FC<AgeDistributionChartProps> = ({ data }) => {
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
            type: 'bar',
            data: data,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Prevalence (%)',
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: 'Age Group',
                  },
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

export default AgeDistributionChart;