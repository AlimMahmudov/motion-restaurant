import { foodItems } from "@/shared/const/foodItems";
import CImage from "@/shared/ui/Image";
import React, { memo } from "react";
import scss from "./MenuCard.module.scss";
const MenuCard = memo(
  ({
    name,
    price,
    imageSrc,
    ingredients,
  }: Omit<(typeof foodItems)[0], "id">) => {
    return (
      <>
        <figure className={scss.image_figure}>
          <CImage url={imageSrc} alt={name} width={329} height={195} />
        </figure>
        <div className={scss.content} data-content="true">
          <div className={scss.column}>
            <h4>{name}</h4>
            <ul data-ingredients="true" className={scss.ingredients}>
              {ingredients.slice(0, 4).map((ingredient, idx) => (
                <li key={ingredient}>
                  {ingredient}
                  {idx < ingredients.length - 1 && ","}
                </li>
              ))}
            </ul>
          </div>
          <span>${price.toFixed(2)}</span>
        </div>
      </>
    );
  }
);
export default MenuCard;
