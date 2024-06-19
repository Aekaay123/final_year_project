"use client";
import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { app } from "@/firebase";
import AttendanceBarGraph from "./BarChart";
import TotalSessionBarGraph from "./TotalSessionBarGraph";
import DoughnutChart from "./DoughnutChart";

export const AttendancePercentage = () => {
  const [attendancePercentage, setAttendancePercentage] = useState([]);
  const [sessionCounts, setSessionCounts] = useState([]); 
  const [totalSessions, setTotalSessions] = useState(0); // State for total sessions attended
  const TOTAL_SESSIONS = 60; // Assuming there are 60 sessions in total

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const db = getFirestore(app);
        const sessionsRef = collection(db, "sessions");
        const querySnapshot = await getDocs(sessionsRef);

        let totalSessionsCount = 0;
        let attendanceCount = {};
        let sessionCount = {}; // Object to hold session counts

        for (const sessionDoc of querySnapshot.docs) {
          totalSessionsCount++;
          const recordsRef = collection(sessionDoc.ref, "records");
          const recordsSnapshot = await getDocs(recordsRef);

          // If records exist, update attendance count
          if (!recordsSnapshot.empty) {
            recordsSnapshot.forEach((doc) => {
              const studentId = doc.data().studentId;
              const status = doc.data().status;
              const name = doc.data().name;

              if (!attendanceCount[studentId]) {
                attendanceCount[studentId] = { present: 0, total: 0, name: doc.data().name };
              }

              if (!sessionCount[studentId]) {
                sessionCount[studentId] = 0;
              }

              attendanceCount[studentId].total += 1;
              if (status === "present") {
                attendanceCount[studentId].present += 1;
                sessionCount[studentId] += 1; // Increment session count for present status
              }
            });
          }
        }

        // Calculate attendance percentage once all sessions are processed
        const attendancePercentage = Object.keys(attendanceCount).map((studentId) => ({
          studentId,
          name: attendanceCount[studentId].name,
          percentage: (attendanceCount[studentId].present / totalSessionsCount) * 100,
        }));

        // Sort attendancePercentage array by studentId in ascending order
        attendancePercentage.sort((a, b) => a.studentId.localeCompare(b.studentId));

        // Prepare session counts for rendering
        const sessions = Object.keys(sessionCount).map((studentId) => ({
          studentId,
          name: attendanceCount[studentId].name,
          count: sessionCount[studentId],
        }));

        // Update state with sorted arrays
        setAttendancePercentage(attendancePercentage);
        setSessionCounts(sessions);
        setTotalSessions(totalSessionsCount); // Set total sessions state
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
      }
    };

    fetchAttendanceData();
  }, []);

  const totalUnattendedSessions = TOTAL_SESSIONS - totalSessions;

  return (
    <div className="text-black bg-gray-200 rounded-md">
      <AttendanceBarGraph attendanceData={attendancePercentage} />
      <TotalSessionBarGraph sessionData={sessionCounts}>
        <DoughnutChart totalSessions={totalSessions} totalUnattendedSessions={totalUnattendedSessions} />
      </TotalSessionBarGraph>
    </div>
  );
};

export default AttendancePercentage;
