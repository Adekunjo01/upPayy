import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// Assuming you have the data for series.monthDataSeries1
const monthDataSeries1 = {
  prices: [
0.85, 208.0, 422.9, 165.5, 365.5, 240.7, 240.7, 300.0,200.1,210.00,350.0,220.0
  ],
  dates: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
};

const ApexChart = () => {
  const [series] = useState([
    {
      name: "Terminal Usage",
      data: monthDataSeries1.prices,
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Remove the toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth', // Use smooth curve for rounded lines
      width: 0.8, // Line width
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
    colors: ['#000000'], // Change the color of the line
    title: {
      text: 'Daily Terminal Usage',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    labels: monthDataSeries1.dates,
    xaxis: {
      type: 'category', // Ensure xaxis type is 'category' for non-date labels
      labels: {
        rotate: -45, // Rotate x-axis labels for better readability
      },
    },
    yaxis: {
      min: 150, // Set minimum value of y-axis
      max: 600, // Set maximum value of y-axis
      opposite: true,
      grid: {
        color: 'transparent', // Change the color of the y-axis grid lines
        borderColor: '#f5f5f5', // Change the background color of the y-axis area
      }
    },
    grid: {
      borderColor: '#fafafa', // Change the color of the grid lines
      row: {
        colors: ['transparent', 'transparent'], // Alternating row colors for better readability
        opacity: 0.5,
      },
      column: {
        colors: ['transparent'], // Color of the column grid lines
        opacity: 0.1,
      },
    },
    legend: {
      show: true, // Enable the legend
      position: 'left', // Position the legend to the left
    },
  });

  return (
    <div>
      <div id="chart" className='py-3'>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChart;
