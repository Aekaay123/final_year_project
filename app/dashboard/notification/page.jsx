import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/auth";
import NotificationCard from "../../../components/notification/NotificationCard";

const Notification = async () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 bg-neutral-900 p-3">
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
};

export default Notification;
