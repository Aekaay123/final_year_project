"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const TypewriterEffectDemo = () => {
  const words = [
    {
      text: "Welcome ",
    },
    {
      text: "to",
    },
    {
      text: "our",
    },
   
    {
      text: "Smart",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Attendance",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Manager",
      className: "text-black dark:text-blue-500",
    },
    
    

  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
    </div>
  );
};

export default TypewriterEffectDemo;
