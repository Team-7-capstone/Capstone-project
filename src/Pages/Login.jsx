import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firbaseConfig";
import { useNavigate } from "react-router";
import Loader from "../components/common/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
