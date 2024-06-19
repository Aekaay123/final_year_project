"use client";
import React from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logout from "./Logout";

const UserProfile = ({ image, name, role }) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center space-x-2 bg-slate-50 cursor-pointer">
          <div className="">
              <p className="text-sm">{name}</p>
              <p className="capitalize text-xs text-gray-400">{role}</p>
            </div>
            <Image
              src={image}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile pic"
            />
        
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-2 w-48 bg-white text-center">
          <Logout />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserProfile;
