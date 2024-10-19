"use client";
import React from "react";
import scss from "./CategoriesMenu.module.scss";
const categories = [
  { id: 1, title: "Desserts" },
  { id: 2, title: "Hot Drinks" },
  { id: 3, title: "Cold Drinks" },
  { id: 4, title: "National Foods" },
  { id: 5, title: "Eastern cuisine" },
  { id: 6, title: "Fast foods" },
];
const CategoriesMenu = () => {
  const [activeCategory, setActiveCategory] = React.useState("Desserts");
  return (
    <nav className={scss.CategoriesMenu}>
      <ul>
        {categories.map((el) => (
          <li
            key={el.id}
            onClick={() => setActiveCategory(el.title)}
            style={{
              background: activeCategory === el.title ? "#EF272C" : "",
            }}
          >
            <a
              style={{
                borderBottom: activeCategory === el.title ? "none" : "",
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesMenu;
