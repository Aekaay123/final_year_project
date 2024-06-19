import { NextResponse } from 'next/server';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/firebase";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const db = getFirestore(app);
    const collectionRef = collection(db, "tutors");
    const querySnapshot = await getDocs(collectionRef);

    let isRegisteredTutor = false;
    querySnapshot.forEach((doc) => {
      if (doc.data().Email=== email.toLowerCase().trim()) {
        isRegisteredTutor = true;
        return; 
      }
    });

    return NextResponse.json({ isRegisteredTutor });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error checking registration" });
  }
}
