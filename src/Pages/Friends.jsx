import React, { useEffect, useState } from "react";
import FriendsComponent from "../components/FriendsComponent.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firbaseConfig";
import Loader from "../components/common/Loader";

export default function Friends({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <FriendsComponent currentUser={currentUser} />;
}
