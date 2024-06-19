"use client";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import UserInfo from "../../components/dashboard/UserInfo";
import Signout from "./Signout";
import { usePathname } from "next/navigation";


const sideBarItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard className="text-black" size={24} />,
  },
  {
    title: "Module",
    path: "/dashboard/modules",
    icon: <FaUsers className="text-black" size={24} />,
  },
];

const SidebarItems = () => {
  const path = usePathname();
  return (
    <>
      <div className=" flex ml-5 flex-col space-y-2 fixed top-0 left-0 md:block">
        <UserInfo />
        {sideBarItems.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.path}
              className={`text-slate-500 flex items-center hover:bg-gray-500 hover:text-white p-3 gap-2 rounded-xl ${
                path === item.path || path === `${item.path}` ? "bg-slate-900" : "bg-white"
              }`}
            >
              {item.icon} <span className="pl-4">{item.title}</span>
            </Link>
          );
        })}
        <Signout />
      </div>
    </>
  );
};

export default SidebarItems;
