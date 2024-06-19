import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
const layout = ({ children }) => {
  return (
    <div className="w-full h-full flex  text-white">
      <div className=" w-1/6 border shadow-md">
        <Sidebar />
      </div>
      <div className="w-5/6  bg-white">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
