import React, { useState } from "react";
import { createUserWithEmailAndPassword, signOut} from "firebase/auth"; 
import {auth} from '../config/firebase-config';

const Signup = () => {
  const [error, setError] = useState("")
  const[registerEmail, setRegisterEmail] = useState("");
  const[registerPassword, setRegisterPassword] = useState("");
  const [RegisterpasswordConfirm, setRegisterpasswordConfirm] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] = useState(false);

  const register = async () => {

    if (registerPassword !== RegisterpasswordConfirm) {
      alert(registerPassword + " Passwords do not match" + RegisterpasswordConfirm)
    }

    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
    alert("Failed to log in");

  };

    
  return (
    <div>
      <div className="container">
        <div className="container-left">
          <div className="contenu">
            <div className="signLogo">
              <img className="logo-img" src="./logo.svg" alt="" />
              <p className="p-logo">
                <a href="/"> Appolo X</a>
              </p>
            </div>
            <div className="sign-title">
              <h2 className="creatAccount">Create your account</h2>
              <p className="p">
                Let's create your account and take advantage of 30-day trial.
              </p>
            </div>
            <div className="form">
              <form action="">
                <div className="inputBox">
                  <span className="sign-span">Username</span>
                  <input
                    className="sign-input"
                    placeholder="Username"
                    type="text"
                  />
                </div>

                <div className="inputBox">
                  <span className="sign-span">Email</span>
                  <input
                    className="sign-input"
                    placeholder="Email"
                    type="email"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="inputBox">
                  <span className="sign-span">Password</span>
                  <input
                    className="sign-input"
                    placeholder="Password"
                    type={passwordIsVisible ? "text" : "password"}
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <i
                    className={
                      passwordIsVisible
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  ></i>
                </div>

                <div className="inputBox">
                  <span className="sign-span">Confirm your password</span>

                  <input
                    className="sign-input"
                    placeholder="Confirm your password"
                    type={confirmPasswordIsVisible ? "text" : "password"}
                    onChange={(event) => {
                      setRegisterpasswordConfirm(event.target.value);
                    }}
                  />
                  <i
                    className={
                      confirmPasswordIsVisible
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                    onClick={() =>
                      setConfirmPasswordIsVisible(!confirmPasswordIsVisible)
                    }
                  ></i>
                </div>
                <input
                  className="btn-submit"
                  type="submit"
                  value="Create account"
                  onClick={(event) => {
                    register();
                    window.location.href = "/login";
                  }}
                />

                <div className="connection">
                  <a className="btn-log" href="">
                    <img className="imgGoogle" src="./google.svg" alt="" />
                    Sign with Google
                  </a>

                  <a className="btn-log" href="">
                    <img className="imgTwitter" src="./twitter.svg" alt="" />
                    Sign with Twitter
                  </a>
                </div>

                <div className="redirectLogin">
                  <p className="sign-p">Already have an account?</p>
                  <a className="sign-login" href="./login">
                    Log in
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;