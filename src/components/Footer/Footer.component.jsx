import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="navigation-section">
          <h3>Logo</h3>
          <div className="navigation-lists">
            <ul>
              <li>Home</li>
              <li>Discovery</li>
              <li>Photos</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Guidlines</li>
            </ul>
            <ul>
              <li>Testimonials</li>
              <li>Adverise</li>
              <li>Integrations</li>
              <li>Careers </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="email-me-section">
            <div className="input-container">
              <input type="email" placeholder="Email" />
              <img src={require("../../assets/images/send.png")} alt="send" />
            </div>

            <p>Stay in touch with us for the freshest products!</p>
          </div>
          <div className="soacial-section">
            <img
              src={require("../../assets/images/instagram.png")}
              alt="instagram"
            />
            <img
              src={require("../../assets/images/twitter.png")}
              alt="twitter"
            />
            <img
              src={require("../../assets/images/facebook.png")}
              alt="facebook"
            />
            <img src={require("../../assets/images/web.png")} alt="web" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
