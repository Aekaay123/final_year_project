import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/firebase";
import Displaystd from "../../components/modules/Displaystd";

const AttendanceRecords = ({ sessionNo }) => {
  // State to store the array of records
  const [recordsArray, setRecordsArray] = useState([]);
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const db = getFirestore(app);
        const sessionsRef = collection(db, "sessions");
        const q = query(sessionsRef, where("session_no", "==", sessionNo));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const sessionDoc = querySnapshot.docs[0];
          const recordsRef = collection(sessionDoc.ref, "records");
          const recordsSnapshot = await getDocs(recordsRef);

          const recordsArray = [];
          recordsSnapshot.forEach((doc, index) => {
            const studentId = doc.data().studentId;
            const email = `${studentId}.cst@rub.edu.bt`;

            const recordObj = {
              identity:doc.data().photoUrl,
              StudentNo: studentId,
              Name: doc.data().name,
              date: doc.data().date,
              Status: doc.data().status,
              Email: email,
            };

            recordsArray.push(recordObj);
          });

          setRecordsArray(recordsArray);
        } else {
          setRecordsArray([]);
          
        }
      } catch (error) {
        console.error("Error fetching records: ", error);
      }
    };

    if (sessionNo !== null) {
      fetchRecords();
    }
  }, [sessionNo]);

  return (
    <div className=" ">
      <Displaystd data={recordsArray} />
    </div>
  );
};

export default AttendanceRecords;
