import React from "react";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h5>Logo</h5>
        <nav>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">discovery</a>
            </li>
            <li>
              <a href="#">photos</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <img
                src={require("../../assets/images/profile-pic.png")}
                alt="profile picture"
              />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
