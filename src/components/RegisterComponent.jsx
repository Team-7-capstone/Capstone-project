import React, { useState } from "react";
import { useNavigate } from "react-router";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import MusicLogo from "../assets/musicLogo6.svg";
import GoogleButton from "react-google-button";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { postUserData } from "../api/FirestoreAPI";
import { getUniqueID } from "../helpers/getUniqueId";

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({userId: getUniqueID() ,name: credentials.name, email: credentials.email, imageLink: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"})
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (error) {
      console.log(error);
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div className="login-wrapper">
      <img src={MusicLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
          <button onClick={register} className="login-btn">
            Agree & Join
          </button>
        </div>
        <hr data-content="or" className="hr-text" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={googleSignIn} />
          <p className="go-to-signup">
            Already on LinkedIn?{" "}
            <span className="join-now" onClick={() => navigate("/")}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
