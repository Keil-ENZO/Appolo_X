import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { auth } from '../config/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //Check and change if necessary the authentication state of currentUser
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/course");
      }
    });

    // Unsubscribe from the authentication observer when cleaning
    return () => unsubscribe();
  }, []);

  const log1 = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="container-left">
          <div className="contenu">
            <div className="logo">
              <img className="logo-img" src="./logo.svg" alt="" />
              <p className="p-logo">Appolo X</p>
            </div>
            <div className="sign-title">
              <h3>Log in</h3>
            </div>
            <div className="form">
              <form onSubmit={log1}>
                <div className="inputBox">
                  <span className="log-span">Email</span>
                  <input
                    className="log-input"
                    placeholder="Email"
                    type="email"
                    value={loginEmail}
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="inputBox">
                  <span className="log-span">Password</span>

                  <input
                    className="log-input"
                    placeholder="Password"
                    type={passwordIsVisible ? "text" : "password"}
                    value={loginPassword}
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
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

                <div className="contenteBtn">
                  <button className="btn-submit" type="submit">
                    Log in
                  </button>

                  <img className="arrow" src="./arrow.svg" alt="" />
                </div>

                <div className="connection">
                  <a className="btn-log" href="/#">
                    <img className="imgGoogle" src="./google.svg" alt="" />
                    Continue with Google
                  </a>

                  <a className="btn-log" href="/#">
                    <img className="imgTwitter" src="./twitter.svg" alt="" />
                    Continue with Twitter
                  </a>
                </div>
                <div className="login">
                  <p className="sign-p">No account?</p>
                  <a className="sign-login" href="./signup">
                    Create one
                  </a>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
