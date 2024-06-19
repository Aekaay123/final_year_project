"use client";
import React from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { downloadPdfReport } from "@/lib/report";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting,setsorting]=React.useState<SortingState>([]);
  const[columnFilters,setColumnFilters]=React.useState<ColumnFiltersState>([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel:getSortedRowModel(),
    onSortingChange:setsorting,
    onColumnFiltersChange:setColumnFilters,
    getFilteredRowModel:getFilteredRowModel(),
    state:{
      sorting,
      columnFilters
    }
  });

  return (
    <>
   <div className="flex justify-between mb-2 mt-2">
   <div >
      <input placeholder="Search student by name..." className=" outline-none border-[1.5px] rounded-md text-black p-2" value={table.getColumn("Name")?.getFilterValue() as string|| ""} onChange={(e)=>table.getColumn("Name")?.setFilterValue(e.target.value)}></input>
    </div>
    <button className="border text-black px-2 rounded-md hover:bg-black/20" onClick={()=>downloadPdfReport()}>Download the report
    </button>
   </div>
      <div className="rounded-none border-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-black text-center text-md font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-gray-900 rounded-md">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="text-center hover:bg-white group hover:text-black"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results found for your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between space-x-2 py-4">
        <button
          type="button"
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <IoIosArrowBack size={24} className="active:font-bold"></IoIosArrowBack>
        </button>

        <button
          type="button"
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
        >
          <IoChevronForward size={24}></IoChevronForward>
        </button>
      </div>
    </>
  );
}
