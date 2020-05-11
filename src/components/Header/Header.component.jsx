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
      <header className="header-mobile">
        <div className="phone-top-bar">
          <h5 className="phone-time">9:41</h5>
          <div className="status-bar">
            <img
              src={require("../../assets/images/Cellular Connection.png")}
              alt="Cellular-Connection"
            />
            <img src={require("../../assets/images/Shape.png")} alt="Shape" />

            <img
              src={require("../../assets/images/Battery.png")}
              alt="Battery"
            />
          </div>
        </div>
        <div className="header-menu">
          <img
            src={require("../../assets/images/menu icon.png")}
            alt="menu-icon"
          />
          <h5>Logo</h5>
          <img
            src={require("../../assets/images/avatar.png")}
            alt="profile-picture"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
