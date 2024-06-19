"use client"
import React, { useState, useEffect } from "react";
import { collection, getFirestore, onSnapshot, deleteDoc,doc } from "firebase/firestore";
import { app } from "@/firebase";
import { columns } from "@/components/admin/tutorsinfo/Column";
import { DataTable } from "@/components/admin/tutorsinfo/DataTable";
import toast from "react-hot-toast";

const DisplayTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDeleteTutor = async (id) => {
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "tutors", id);
  
      const response=await deleteDoc(docRef);
      toast.success("deleted tutor successfully!");
      
    } catch (error) {
      toast.error("Error deleting tutor:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const db = getFirestore(app);
    const collectionRef = collection(db, "tutors");

    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const fetchedTutors = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTutors(fetchedTutors);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={tutors} handleDeleteTutor={handleDeleteTutor} isloading={loading} />
    </div>
  );
};

export default DisplayTutor;
