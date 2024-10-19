import React from "react";
import scss from "./Best.module.scss";
import img19 from "../../../../assets/Frame 19.png";
import img20 from "../../../../assets/Frame 20.png";
import img38 from "../../../../assets/Frame 38.png";
import img10 from "../../../../assets/Frame 10.png";

import Image from "next/image";

const Best = () => {
  return (
    <div>
      <div className="container">
        <div className={scss.best}>
          <div className={scss.best_sellers}>
            <Image src={img10} alt="img" />
            <h1>Best Sellers</h1>
          </div>
          <div className={scss.best_block}>
            <div className={scss.best_text}>
              <h1>You Only Reserve Exception</h1>
              <p>
                Each location has a menu that`s curated just for them. See what
                new at your Cafesio and You`ll find Cafesio Covent Carden
                moments.
              </p>
            </div>
            <div className={scss.best_image}>
              <Image src={img19} alt="img" />
              <Image src={img20} alt="img" />
              <Image src={img38} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
