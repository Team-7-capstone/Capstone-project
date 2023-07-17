import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import MusicLogo from "../assets/musicLogo6.svg";
import MyoozikBlue from "../assets/myoozik-blue.svg";
import MyoozikOrange from "../assets/myoozik-orange.svg";
import MyoozikBlue2 from "../assets/myoozik2-blue.svg";
import MyoozikOrange2 from "../assets/myoozik2-orange.svg"
import GoogleButton from "react-google-button";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import ParticleEffect from "./Particle";

const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to Linkedin");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Please Check your Credentials");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div className="login-wrapper">
      <ParticleEffect />
      <img src={MusicLogo} className="musicLogo" />

      <div className="myoozik-wrapper">
        <img src={MyoozikBlue} className="myoozik" />
      </div>

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Find your inspiration</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
          <button onClick={login} className="login-btn">
            Sign in
          </button>
        </div>
        <hr data-content="or" className="hr-text" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={googleSignIn} />
          <p className="go-to-signup">
            New to myoozik?{" "}
            <span className="join-now" onClick={() => navigate("/register")}>
              Join Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
