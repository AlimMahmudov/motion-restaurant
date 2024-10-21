"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import scss from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu";

const links = [
  {
    name: "interior",
    link: "/",
  },

  {
    name: "About Us",
    link: "/person",
  },
  {
    name: "Menu",
    link: "/game",
  },
  {
    name: "Contacts",
    link: "/videowars",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header_logo}>
            <h1>Restaurant</h1>
          </div>

          <div className={scss.header_search}>
            {isMobile ? (
              <>
                <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                  Burger
                </button>
                <BurgerMenu links={links} isOpen={isOpen} />
              </>
            ) : (
              <>
                <div className={scss.nav}>
                  <ul
                    style={{
                      display: "flex",
                      gap: "80px",
                      justifyContent: "center",
                    }}
                  >
                    {links.map((item, index) => (
                      <div className={scss.link} key={index}>
                        <a href={item.link}>{item.name}</a>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className={scss.header_input}>
                  <h1>{<CiSearch />}</h1>
                  <input type="text" placeholder="Search..." />
                </div>
                <select>
                  <option>En</option>
                  <option>Ru</option>
                </select>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
