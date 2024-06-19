import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = ({ totalSessions, totalUnattendedSessions }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["total Sessions taken", "Unattended Sessions"],
        datasets: [
          {
            data: [totalSessions, totalUnattendedSessions],
            backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: "Total Sessions taken vs Unattended Sessions",
            fontSize: 20,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [totalSessions, totalUnattendedSessions]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
