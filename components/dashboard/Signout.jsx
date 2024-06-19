import React from "react";
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import Modal from "react-modal";
import { useState } from "react";

const Signout = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <button className="p-3 flex rounded-xl" onClick={() => setisopen(true)}>
        <IoMdLogOut size={24} className="text-black" /> <span className="pl-6 text-slate-500 ">Log out</span>
      </button>
      <Modal
        isOpen={isopen}
        ariaHideApp={false}
        onrequestclose={() => setisopen(false)}
        className="w-[300px] h-[200px] bg-black text-white flex flex-col space-y-6 justify-center p-3 absolute top-56 left-1/2 mx-auto  shadow-md -translate-x-1/2 border-2 rounded-md"
      >
        <p className="text-center w-full ">Are you sure you want to log out?</p>
        <div className="flex w-full space-x-4 justify-center">
          <button
            className="bg-blue-500 p-2 rounded-md w-1/3 hover:scale-105 text-white"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Yes
          </button>
          <button className="p-2 hover:scale-105 bg-blue-500 rounded-md w-1/3 text-white" onClick={() => setisopen(false)}>No</button>
        </div>
      </Modal>
    </>
  );
};

export default Signout;
