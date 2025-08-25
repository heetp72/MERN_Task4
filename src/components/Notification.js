import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Notification = () => {
  const { notifications } = useContext(GlobalContext);

  return (
    <div className="notification-container">
      {notifications.map((note) => (
        <div key={note.id} className="toast">
          {note.msg}
        </div>
      ))}
    </div>
  );
};

export default Notification;
