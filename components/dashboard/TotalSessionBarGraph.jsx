import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TotalSessionBarGraph = ({ sessionData, children }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !sessionData) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const labels = sessionData.map(
      (student) => `${student.name} (${student.studentId})`
    );
    const data = sessionData.map((student) => student.count);

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Session records",
            data: data,
            
          backgroundColor:"black",
            borderColor: "rgba(54, 162, 235, 1)",
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
            text: "Session records for BE 4IT (Cryptography)",
            fontSize: 20,
          },
        },
        scales: {
          y: {
            max: 100,
            beginAtZero: true,
            title: {
              display: true,
              text: "Total session count",
            },
          },
          x: {
            title: {
              display: true,
              text: "Students",
              fontSize: 20,
            },
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [sessionData]);

  return (
    <div className=" border-1 shadow-sm p-8 max-w-5xl bg-gray-300 mx-auto">
     <div className="max-w-[350px] mx-auto">
     {children}
     </div>
      
      
      <canvas ref={chartRef} className="mt-8 w-full" />
    
  </div>

  );
};

export default TotalSessionBarGraph;
