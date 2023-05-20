import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { updateUserChapitre1, getUserChapitre1 } from "../config/database";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  // Save the user logged in
  const [user, setUser] = useState(null);
  const [chapitre1, setChapitre1] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status and update user status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      fetchChapitre1();
    });
    // Unsubscribe from the authentication observer when cleaning
    return () => unsubscribe();
  }, []);

  const handleButtonClick = async () => {
    if (user) {
      const newChapitre1Value = !chapitre1;
      setChapitre1(newChapitre1Value);
      await updateUserChapitre1(user.uid, newChapitre1Value);
    } else {
      console.error("User not logged in");
    }
  };

  const fetchChapitre1 = async () => {
    if (user) {
      const chapitre1Value = await getUserChapitre1(user.uid);
      setChapitre1(chapitre1Value);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  function toggleMenu() {
    const sommaire = document.querySelector(".sommaire");
    sommaire.style.transform = "translateX(0)";
  }

  function closeMenu() {
    const sommaire = document.querySelector(".sommaire");
    sommaire.style.transform = "translateX(-120%)";
  }

  return (
    <div>
      <div className="menu-effect">
        <button className="btneffect" onClick={toggleMenu}>
          {" "}
          <span className="material-symbols-outlined icon">
            arrow_forward_ios
          </span>
        </button>
      </div>
      <div className="sommaire" data-aos="fade-right" data-aos-duration="900">
        <div className="logo-dash">
          <img className="logo-img" src="./logo.svg" alt="" />
          <p className="p-logo">
            {" "}
            <a href="/"> Appolo X</a>
          </p>
          <button onClick={closeMenu}>
            <span className="material-symbols-outlined icon iconClose">
              close
            </span>
          </button>
        </div>

        <div className="menu">
          <div className="menu-header">
            <ul>
              <li>
                <a href="./Dashboard">
                  <span className="material-symbols-outlined">home</span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="./Course">
                  <span className="material-symbols-outlined">menu_book</span>
                  Course
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">equalizer</span>
                  Progression
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">local_mall</span>
                  Business plan
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-bottom">
            <ul>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">bug_report</span>
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="separation"></div>
        <div className="profil">
          <img className="logo-img" src="./logo.svg" alt="" />
          <div className="info">
            <p className="name">{user?.pseudo}</p>
            <p className="email">{user?.email}</p>
          </div>
          <button onClick={logout}>
            <span className="material-symbols-outlined deco">login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
