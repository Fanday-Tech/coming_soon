import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={Logo} alt="" />
        <p>© 2022 Fanday LLP</p>
      </div>
      <div className="footer__right">
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Linkedin</p>
      </div>
    </footer>
  );
}

export default Footer;
