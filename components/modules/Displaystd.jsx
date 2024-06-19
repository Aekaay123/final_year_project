"use client";
import React from "react";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Displaystd = ({data}) => {
  const CenteredHeader = (params) => {
    return <div style={{ display: "flex", justifyContent: "center" }}>{params.value}</div>;
  };

  const [colDef, setColDef] = useState([
   
    { field: "StudentNo", filter: "true",width:200, style: { textAlign: "center" } },
    { field: "Name", filter: "true",width:300 },
    {
      field: "Status",
      editable: true,

      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ["absent", "present"] },
      cellClassRules: {
        "bg-red-200": (params) => params.value === "absent",
      },
    },
    { field: "Email",headerName:"Email",width:300 },
  ]);
  return (
    <>
    <div
      className="ag-theme-quartz text-center flex flex-col mx-auto"
      style={{ height: 500, width: "90%" }}
    >
     
      <AgGridReact
        rowData={data}
        style={{ height: 500, width: "100%" }}
        className="text-center"
        columnDefs={colDef}
        pagination={true}
        domLayout="autoHeight"
       
        paginationPageSize={12}
        suppressHorizontalScroll={false}
        suppressVerticalScroll={true}
      />
    </div>
    </>
  );
};
export default Displaystd;
