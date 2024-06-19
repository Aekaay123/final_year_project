"use client"
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
const Navbar = () => {
  return (
    <div className="p-3 bg-black/80 flex justify-between items-center ">
      <Image
        src={"/collegeLogo.png"}
        width={80}
        height={80}
        alt="college logo"
        className="rounded-full"
      />
      <h1 className="text-white text-4xl">Smart Attendance Manager</h1>
      <button className="bg-black/20 text-white text-2xl p-2 rounded-xl hover:bg-black/80"
        onClick={()=>signIn("google")
        }
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
