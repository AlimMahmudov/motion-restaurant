import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_text}>
            <div className={scss.logo}>
              <h1>Restaurant</h1>
            </div>
            <div className={scss.a_tegs}>
              <a href="">interior</a>
              <a href="">About Us</a>
              <a href="">Menu</a>
              <a href="">Contacts</a>
            </div>
            <div className={scss.telegram}>
              <h1>
                <FaTelegramPlane />
              </h1>
              <h1>
                <AiFillInstagram />
              </h1>
            </div>
          </div>
          <hr />
          <h3>c 2023 Motion Study LLC</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
