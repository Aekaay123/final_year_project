"use client";
import { useSearchParams } from "next/navigation";
import SelectSession from "@/components/modules/selectSession";

const Page = ({ params }) => {
  const mname =  params.Mname; 
// filter characters like % and numbers from mname
const filteredmname = mname.replace(/[%\d]/g, " ");


  const searchparams=useSearchParams();
  const courseid=searchparams.get('id');
  return (
    <div>
      <p className="font-bold text-xl text-slate-500 text-center">
        Attendance Record for {filteredmname}
      </p>
      <SelectSession course_id={courseid} />
    </div>
  );
};

export default Page;
