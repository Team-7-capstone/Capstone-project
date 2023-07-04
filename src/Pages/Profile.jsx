import React, { useEffect, useState } from "react";
import ProfileComponent from "../components/ProfileComponent";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firbaseConfig";
import { useNavigate } from "react-router";
import Loader from "../components/common/Loader";

const Profile = ({ currentUser }) => {
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
      return loading ? <Loader /> :<ProfileComponent currentUser = {currentUser}/>
}

export default Profile