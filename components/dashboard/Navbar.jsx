"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="bg-white text-slate-500 shadow-md border-1 p-3 sticky top-0 left-0 z-50">
      <p className="capitalize text-3xl">{decodeURIComponent(path.split("/").pop())}</p>
    </div>
  );
};

export default Navbar;
