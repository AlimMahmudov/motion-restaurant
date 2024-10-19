import React from "react";
import { CiSearch } from "react-icons/ci";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header_logo}>
            <h1>Restaurant</h1>
          </div>
          <div className={scss.header_search}>
            <a href="#">Interior</a>
            <a href="#">About Us</a>
            <a href="#">Menu</a>
            <a href="#">Contacts</a>
            <div className={scss.header_input}>
              <h1>{<CiSearch />}</h1>
              <input type="text" placeholder="Search..." />
            </div>
            <select>
              <option>En</option>
              <option>Ru</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
