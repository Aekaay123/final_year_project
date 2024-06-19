import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import {AttendancePercentage} from "@/components/dashboard/attendancePercentage";

const Dashbaord = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session?.user?.role === "user") {
      return (
        <div className="p-10 flex flex-col space-y-4">
          <AttendancePercentage/>
        </div>
      );
    } else {
      redirect("/admin");
    }
  } else {
    redirect("/");
  }
};

export default Dashbaord;
