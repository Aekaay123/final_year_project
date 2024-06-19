"use client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
export type tutorsInfo = {
  SlNo: Number;
  Name: string;
  email: string;
  Number:Number;
  Date: Date; 
};

export const columns: ColumnDef<tutorsInfo>[] = [
  {
    accessorKey: "Name",
    header:"Name"
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "PhoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "Time",
    header: "Date",
    cell: (date) => {

      const formattedDate = moment(date).format('MMMM Do, YYYY'); // "May 10, 2024"

      return formattedDate;
    },
  },
]
