import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
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
import AddTutorButton from "../AddTutor";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  handleDeleteTutor: (id: string) => void;

}

export function DataTable<TData, TValue>({
  columns,
  data,
  handleDeleteTutor,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex justify-between mb-1">
        <div className="flex justify-between mx-8 w-full p-3">
          <input
            placeholder="Search tutor by name..."
            className=" outline-none border-[1.5px] rounded-md text-black p-2"
            value={table.getColumn("Name")?.getFilterValue() as string || ""}
            onChange={(e) =>
              table.getColumn("Name")?.setFilterValue(e.target.value)
            }
          ></input>
          <AddTutorButton />
        </div>
      </div>
      <div className="rounded-md border-2 mx-10">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className=" text-center text-md font-bold"
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
          <TableBody>
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
                  <TableCell key={row.id}>
                    <button 
                      onClick={() => {
                        handleDeleteTutor(row.original.id);
                      }}
                    >
                      <AiOutlineDelete
                        size={24}
                        className="hover:font-bold"
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                 loading
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between mx-10 space-x-2 py-4">
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
