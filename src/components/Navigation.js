import React from "react";

const Navigation = () => {
  return (
    <div>
      <header>
        <nav className="nav-bar">
          <p className="brand">
            <a href="/">Appolo X</a>
          </p>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#overview" className="nav-link">
                Overview
              </a>
            </li>
            <li className="nav-item">
              <a href="#security" className="nav-link">
                Security
              </a>
            </li>
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                Learn
              </a>
            </li>
          </ul>
          <a className="button-start" href="./signup">
            Start
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
