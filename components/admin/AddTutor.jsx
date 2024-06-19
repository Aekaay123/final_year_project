"use client";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { addtutor } from "@/actions/addtutor";
import { z } from "zod";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email().endsWith("@rub.edu.bt", {
    message:
      "Invalid email address.Please enter college email address of the tutor",
  }),
  phonenumber: z
    .string()
    .min(8, { message: "Phone number should be at least 8 digits long" }),
});
const AddTutorButton = () => {
  const [isopen, setisopen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (FormData) => {
    setLoading(true);
    const data = {
      name: FormData.get("name"),
      email: FormData.get("email"),
      phonenumber: FormData.get("PhoneNumber"),
    };
    const result = formSchema.safeParse(data);
    let errorMssage = "";
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        errorMssage += " " + issue.message;
      });
      toast.error(errorMssage);
      setLoading(false);
    } else {
      const response = await addtutor({ data });
      if (response?.message) {
        toast.success(response?.message);
        setLoading(false);
        setisopen(false);
      }
    }
  };
  return (
    <>
      <Dialog open={isopen} onOpenChange={setisopen}>
        <DialogTrigger
          onClick={() => setisopen(true)}
          className="bg-primary p-2 rounded-md hover:bg-slate-600 outline-none text-white shadow"
        >
          Add tutor
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-lg">
              Add New Tutor
            </DialogTitle>
          </DialogHeader>
          <form action={handlesubmit} className="flex flex-col space-y -2">
            <div className="flex flex-col">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="Name"
                name="name"
                className="p-2 outline-none text-black rounded-md border"
                placeholder="name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                className="p-2 text-black outline-none rounded-md border"
                type="text"
                id="email"
                name="email"
                placeholder="email address"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="PhoneNumber">Phone Number:</label>
              <input
                id="PhoneNumber"
                type="tel"
                name="PhoneNumber"
                className="p-2 text-black outline-none rounded-md border"
                placeholder="Phone number"
              />
            </div>

            <div className="flex w-full text-center justify-between mt-8">
              <button
                type="submit"
                className="bg-black hover:bg-gray-700 text-white w-full px-4 py-2 rounded-md"
              >
                {loading ? "ADDING" : "ADD"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddTutorButton;
