import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Cours from "./pages/Cours";
import Guide from "./pages/Guide";
import Patrimoine from "./pages/Patrimoine";
import Bridge from "./pages/Bridge";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { FirebaseAppProvider } from "reactfire";
import { auth, firebaseConfig } from "./config/firebase-config";
AOS.init();

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/course" element={<Course />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/patrimoine" element={<Patrimoine />} />
          <Route path="/bridge" element={<Bridge />} />
        </Routes>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
};

export default App;
