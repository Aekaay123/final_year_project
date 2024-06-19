"use client";
import React from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import TypewriterEffectDemo from "./typerwrite-effect";
import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-scroll">
      <div className="absolute inset-0 bg-[url('/attendance.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-50 blur-sm "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold flex flex-col items-center justify-center"
          >
            <TypewriterEffectDemo />
          </motion.div>
          
          <motion.button
            onClick={() => signIn("google")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" text-black font-bold py-3 px-6 rounded-full  flex  items-center gap-2 shadow-lg transition duration-300 absolute top-4 right-4"
          >
            Sign in with <FcGoogle size={24}/>
          </motion.button>

          {/* <motion.a
            href="/aboutus"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-black hover:underline p-3 font-bold absolute top-8 left-0 "
          >
            About us
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
