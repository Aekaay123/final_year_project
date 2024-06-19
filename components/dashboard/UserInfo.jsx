"use client"
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react"; 

const UserInfo = () => {
  const {data:session}=useSession();
  return (
    <div className="flex items-center space-x-2 p-[10px] border-b-2">
      <Image
        src={session?.user?.image}
        width={40}
        height={40}
        alt="profile pic"
        title="profile_Picture"
        className="rounded-full"
      />
    <div className="text-slate-500">
      <p>{session?.user?.name}</p>
      <p className="text-xs">{session?.user?.email}</p>
    </div>
    </div>
  );
};

export default UserInfo;
