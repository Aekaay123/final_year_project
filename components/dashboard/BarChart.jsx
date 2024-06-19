import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import DownloadReport from "./DownloadReport"

const AttendanceBarGraph = ({ attendanceData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !attendanceData) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const labels = attendanceData.map(
      (student) => `${student.name} (${student.studentId})`
    );
    const data = attendanceData.map((student) => student.percentage);

    const backgroundColors = data.map((percentage) => {
      return percentage < 90
        ? "rgba(255, 99, 132, 0.6)"
        : "black";
    });

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Present records",
            data: data,
            backgroundColor: backgroundColors,
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
            text: "Attendance Records for BE 4IT(crytography)",
            fontSize: "40",
            backgroundColor:"black"
          },
        },
        scales: {
          y: {
            max: 100,
            beginAtZero: true,
            title: {
              display: true,
              text: "Attendance %",
            },
          },
          x: {
            title: {
              display: true,
              text: "Students",
              fontSize: "20",
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
  }, [attendanceData]);

  return (
    <div
      className="border shadow-sm p-[30px] max-w-5xl mb-10 rounded-md bg-gray-300 mx-auto h-400px]"
      style={{ overflowX: "auto", maxHeight: "800px" }}
    >
      <DownloadReport attendanceData={attendanceData}/>
      <canvas ref={chartRef} />
    </div>
  );
};

export default AttendanceBarGraph;
