import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DownloadReport = ({ attendanceData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Student Attendance Report for BE 4IT(cryptography) till ${new Date().toLocaleDateString()}`, 20, 10);

    const tableColumn = ["Student ID", "Name", "Attendance Percentage"];
    const tableRows = [];

    attendanceData.forEach(student => {
      const studentData = [
        student.studentId,
        student.name,
        student.percentage.toFixed(2) + '%',
      ];
      tableRows.push(studentData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });

    doc.save('attendance_report.pdf');
  };

  return (
    <>
    <button className='bg-gray-400 p-2 rounded-md hover:bg-gray-400' onClick={generatePDF}>
      Download PDF Report
    </button>
    </>
  );
};

export default DownloadReport;
