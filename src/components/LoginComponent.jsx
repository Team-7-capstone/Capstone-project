import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss"


const LoginComponent = () => {
    const [credentials, setCredentials] = useState({})
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>LoginComponent</h1>
            <div className="auth-inputs">
                <input
                    onChange={(event) =>
                        setCredentials({ ...credentials, email: event.target.value })}
                    className="common-input"
                    placeholder="Enter your Email"
                />
                <input
                    onChange={(event) =>
                        setCredentials({ ...credentials, password: event.target.value })}
                    className="common-input"
                    placeholder="Enter your Password"
                />

            </div>

            <button onClick={login} className="login-btn">Log in to Linkedin</button>
        </div>
    )
}

export default LoginComponent