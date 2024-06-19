"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Linechart = ({classname,record}) => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "percentage",
        data: record,
        fill:true,
        borderColor: "black",
        pointBorderColor: "white",
        pointBackgroundColor: "white",
        tension: 0.5,
        fontSize: 24,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    animations: {
      tension: {
        duration: 10000,
        easing: "",
        from: 1,
        to: 0,
        loop: true,
      },
      borderWidth: {
        duration: 1000,
        from: 4,
        to: 1,
        loop: true,
      },
    },
    responsive: true,
    Tooltip: {
      enabled: true,
      label: (context) => {
        const label = context.dataset.label;
        const value = context.parsed.y;
        return `${label}: ${value}%`;
      },
    },
    plugins: {
      legend: true,
      background: {
        color: "white",
      },
      title: {
        display: true,
        text: `Weekly attendance record for ${classname}`,
        fontSize:"40",
        fontColor: "white",
      },
    },
    scales: {
      x:{gridLines:{
        color:"white"
      }},
      y: { min: 0, max:100,color:"white", ticks: {
        callback: (value) => `${value}%`,
      }, },
    },
  };

  return (
    <div className="p-[30px] max-w-5xl mx-auto border shadow-md ">
      <div className="bg-gray-200 shadow-sm rounded-md">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Linechart;
