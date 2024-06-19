import React, { useEffect, useState } from "react";
import AttendanceRecords from "./AttendanceRecords";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const SelectSession = ({course_id}) => {
  const [sessioninfo, setsessioninfo] = useState([]);
  const [sessionNo, setSessionNo] = useState(null);

  useEffect(() => {
    const fetchsessions = async () => {
      try {
        const response = await fetch("/api/getsession",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({course_id}),
        });

        const data = await response.json();
        data.sort((a, b) => a.session_no - b.session_no);
        setsessioninfo(data);

        if (data.length > 0) {
          setSessionNo(data[0].session_no);
        }
        else{
          setSessionNo(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchsessions();
  },[course_id]);
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger  className="ml-16 p-2 px-6 bg-black rounded-md mb-2">
      
            <p className="text-white">{sessionNo ? `Session ${sessionNo}` : "Select Session"}</p>
          
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Module sessions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sessioninfo.map((session) => {
            return (
              <DropdownMenuItem
                onClick={() => setSessionNo(session.session_no)}
                key={session.id}
              >
                session {session.session_no}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
     <div >
     {sessionNo && <AttendanceRecords sessionNo={sessionNo} />}
     </div>
    </>
  );
};

export default SelectSession;
