import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import DisplayTutor from "@/components/admin/DisplayTutor";
import UserProfile from "./UserProfile";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session?.user?.role === "admin") {
      return (
        <div className="w-full h-screen">
          <nav className="bg-white flex justify-between sticky top-0 left-0 z-50 items-center shadow-md p-3">
           <div className="flex">
           <Image src="/logo.png" alt="logo" width={50} height={50} />
           <Image src="/image.png" alt="logo" width={300} height={300} />
           </div>
            <UserProfile
              image={session.user.image}
              name={session.user.name}
              role={session.user.role}
            />
          </nav>
          <DisplayTutor />
        </div>
      );
    }
  } else {
    redirect("/");
  }
};

export default Admin;
