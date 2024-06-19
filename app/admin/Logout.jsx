"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <button
        className=" text-black text-md rounded-md"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
