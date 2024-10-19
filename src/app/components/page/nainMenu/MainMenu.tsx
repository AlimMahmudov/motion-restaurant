import React from "react";
import scss from "./MainMenu.module.scss";
import CategoriesMenu from "../categoriesMenu/CategoriesMenu";
import SectionTitles from "../title/SectionTitle";
const MainMenu = () => {
  const foodItems = [
    {
      title: "Beer Brewery",
      price: 824,
      description:
        "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    },
    {
      title: "Burger&Pasta",
      price: 814,
      description:
        "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    },
    {
      title: "Burger&Pasta",
      price: 814,
      description:
        "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    },
    {
      title: "Burger&Pasta",
      price: 814,
      description:
        "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    },
    {
      title: "Burger&Pasta",
      price: 814,
      description:
        "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    },
  ];
  return (
    <section className={scss.MainMenu}>
      <div className="container">
        <SectionTitles
          title="Main Menu"
          subtitle="Exceptional Quality. Delightfully Delicious"
        />
        <div className={scss.MainMenu__inner}>
          <CategoriesMenu />
          <div className={scss.FoodItems}>
            {foodItems.map((el) => (
              <div key={el.title} className={scss.foodItems__content}>
                <div className={scss.foodItems__content__top}>
                  <h3>{el.title}</h3>
                  <i>
                    ....................................................................
                  </i>
                  <span>{el.price}</span>
                </div>
                <p>{el.description}</p>
                <div className={scss.foodItems__button}>
                  <button>Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
