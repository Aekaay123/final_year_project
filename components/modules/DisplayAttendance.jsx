import React from 'react'
import { studentData } from "@/lib/data";
import {columns} from "@/components/studentinfo/Column"
import { DataTable } from '@/components/studentinfo/DataTable';

const DisplayAttendance = () => {
  return (
    <div>
      <DataTable columns={columns} data={studentData} />
    </div>
  )
}

export default DisplayAttendance
