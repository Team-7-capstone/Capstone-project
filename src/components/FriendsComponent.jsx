import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/FirestoreAPI";
import Friends from "./common/Friends";
import "../Sass/FriendsComponent.scss";

export default function FriendsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return users.length > 1 ? (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <Friends currentUser={currentUser} user={user} />
        );
      })}
    </div>
  ) : (
    <div className="connections-main">No Connections Added Yet</div>
  );
}
