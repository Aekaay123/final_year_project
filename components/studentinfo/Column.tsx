"use client";
import { ColumnDef } from "@tanstack/react-table";
import { TbArrowsUpDown } from "react-icons/tb";

export type StudentInfo = {
  SlNo: Number;
  StudentNo: Number;
  Name: string;
  Date: Date;
  status: boolean;
  email: string;
};

export const columns: ColumnDef<StudentInfo>[] = [
  // {
  //   accessorKey: "SlNo",
  //   header: "Serail No"
  // },
  {
    accessorKey: "StudentNo",
    header:({ column }) => {
      return (
        <button className="flex items-center"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Student Number <TbArrowsUpDown/>
        </button>
      );
    },
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <>
          <select
            className="bg-gray-900 group-hover:bg-white p-2 outline-none rounded-md"
            defaultValue={"Present"}
          >
            <option>Present</option>
            <hr></hr>
            <option>Absent</option>
          </select>
        </>
      );
    },
  },

  {
    accessorKey: "Email",
    header: "Email",
  },
];
