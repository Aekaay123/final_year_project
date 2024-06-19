import React from "react";
import xlsx, { IJsonSheet } from "json-as-xlsx";
import { studentData } from "@/lib/data";

export const downloadPdfReport = () => {
  let columns: IJsonSheet[] = [
    {
      sheet: "StudentReport",
      columns: [
        { label: "SL No", value: "SlNo" },
        { label: "Name", value: "Name" },
        { label: "StudenNo", value: "StudentNo" },
        { label: "Email", value: "Email" },
      ],
      content: studentData,
    },
  ];
  let settings = {
    fileName: "Report",
  };
  xlsx(columns, settings);
};
