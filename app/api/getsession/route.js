import { NextResponse } from 'next/server';
import { collection, getDocs, getFirestore ,where,query} from "firebase/firestore";
import { app } from "@/firebase";

export async function POST(req) {
    const {course_id}=await req.json()
    const db=getFirestore(app);
    const collectionRef = collection(db, "sessions");
    const q=query(collectionRef,where("course_id","==",course_id));

    try{
        const querySnapshot = await getDocs(q);
        const sessions = [];
        querySnapshot.forEach((doc) => {
          sessions.push({ id: doc.id, ...doc.data() });
        });
        return NextResponse.json(sessions);
    }
    catch(error){
        throw new Error("error fetching the data")
    }
}