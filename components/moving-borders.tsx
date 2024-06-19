"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import {signIn} from "next-auth/react";

const  MovingBorderDemo=()=> {
  return (
    <div>
      <Button
       onclick={()=>signIn("google")}
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Sign in
      </Button>
    </div>
  );
}

export default MovingBorderDemo;
