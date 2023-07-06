import React, { useEffect, useState } from "react";
import ConnectionsComponent from "../components/ConnectionsComponent";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firbaseConfig";
import { useNavigate } from "react-router";
import Loader from "../components/common/Loader";

const Connections = ({ currentUser }) => {
  const [loading, setLoading] = useState(false);
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
  return loading ? (
    <Loader />
  ) : (
    <ConnectionsComponent currentUser={currentUser} />
  );
};

export default Connections;
