//import React from 'react';
//import React, { useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);


const MyChartComponent = () => {
    const canvasRef = useRef(null); // Reference to the canvas HTML element
    let chartInstance = useRef(null); // Store the chart instance
  
    useEffect(() => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart
      }
      const ctx = canvasRef.current.getContext('2d');
      // Define your chart
      chartInstance.current = new Chart(ctx, {
        type: 'pie', // Example chart type
        data: {}, // Your chart data
        options: {}, // Your chart options
      });
  
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Cleanup chart on component unmount
        }
      };
    }, []); // Depend on specific props/state if your chart data/options depend on them
  
    return <canvas ref={canvasRef}></canvas>;
  };

export default function PieChart({ transactions }) {
  // Aggregate amounts by category
  const categoryAmounts = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    acc[category] = (acc[category] || 0) + Math.abs(amount);
    return acc;
  }, {});

  // Prepare data for the pie chart
  const data = {
    labels: Object.keys(categoryAmounts),
    datasets: [
      {
        data: Object.values(categoryAmounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
          '#445ce2',
          '#e244b1',
          // Add more colors as needed
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
          '#445ce2',
          '#e244b1',
          // Add more colors as needed
        ],
      },
    ],
  };

  return (
    <div>
        <h3>Category Pie Chart</h3> {/* Title for the pie chart */}
        {/* The rest of your component's return statement */}
     <Pie data={data} />;
     </div> )
}
