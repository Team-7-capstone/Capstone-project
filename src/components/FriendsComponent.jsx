import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import Friends from "./common/Friends";
import "../Sass/FriendsComponent.scss";

export default function FriendsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <Friends
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
    </div>
  ) : (
    <div className="connections-main">No Connections Added Yet</div>
  );
}
