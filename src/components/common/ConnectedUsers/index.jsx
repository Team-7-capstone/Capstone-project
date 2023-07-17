import React, { useEffect, useState } from "react";
import { PiMusicNotesPlus } from "react-icons/pi";
import { getConnections } from "../../../api/FirestoreAPI";

export default function ConnectedUsers({ user, getCurrentUser, currentUser }) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected);
  }, [currentUser.id, user.id]);

  return isConnected ? (
    <></>
  ) : (
    <div className="grid-child">
      <img src={user.imageLink} />
      <p className="name">{user.name}</p>
      <p className="headline">{user.headline}</p>

      <button
        onClick={() => {
          getCurrentUser(user.id);
        }}
      >
        <PiMusicNotesPlus size={20} />
        Harmonize
      </button>
    </div>
  );
}
