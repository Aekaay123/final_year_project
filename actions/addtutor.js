"use server";
import {app} from '../firebase'
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
export async function addtutor({data}) {
  try {
    const session =await getServerSession(authOptions);
    const db=getFirestore(app);
    const collectionref = collection(db, "tutors");
    const success =await addDoc(collectionref, {
      Name:data.name,
      Email:data.email,
      PhoneNumber:data.phonenumber,
      Time:serverTimestamp(),
      AddedBy:session?.user?.userID
    });
    if (success) {
       return {
        message:"Successfully added"
       } 
    } else {
       return{
        error:"Failed to add"
       }
    }  
  } catch (error) {
    return{
      message:"something went wrong"
    }
  }
}
