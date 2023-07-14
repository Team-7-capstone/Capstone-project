import React, { useEffect, useState, useMemo } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  getConnections,
  deleteConnection,
  getSingleConnection,
} from "../../../api/FirestoreAPI";

export default function Friends({ user, currentUser }) {
  const [isConnected, setIsConnected] = useState(false);
  const [connection, setConnection] = useState([]);

  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected);
  }, [currentUser.id, user.id]);

  useMemo(() => {
    getSingleConnection(currentUser.id, user.id, setConnection);
  }, []);

  return isConnected ? (
    <div className="grid-child">
      <img src={user.imageLink} />
      <p className="name">{user.name}</p>
      <p className="headline">{user.headline}</p>

      <button
        onClick={() => {
          deleteConnection(connection.id);
        }}
      >
        <AiOutlineUsergroupAdd size={20} />
        Disconnect
      </button>
    </div>
  ) : (
    <></>
  );
}
