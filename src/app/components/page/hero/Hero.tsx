import React from "react";
import scss from "./Hero.module.scss";
import buttonImg1 from "../../../../assets/Frame 9.png";
import buttonImg2 from "../../../../assets/Frame 10.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div id={scss.Hero}>
      <div className="container">
        <div className={scss.hero}>
          <div className={scss.head}>
            <Image className={scss.headImg} src={buttonImg2} alt="" />
            <h3>Delicious</h3>
            <Image className={scss.headImg} src={buttonImg1} alt="" />
          </div>
          <h1>Italian Cuisine</h1>
          <p>
            Classic steak & delicious with delightfully unexpenced twists. The
            Restaurant`s sunny decor was inspired by the diners
          </p>

          <div className={scss.box}>
            <div className={scss.line}></div>
            <button>
              Reserve Your Table <FaArrowRightLong />
            </button>
            <div className={scss.line}></div>
          </div>
        </div>

        <div className={scss.block}>
          <div className={scss.location1}>
            <h3>Location</h3>
            <div className={scss.line}></div>

            <p>
              <span>
                <FaLocationDot />
              </span>
              Rua da moeda 1g,1200-275,Portugal
            </p>
          </div>

          <div className={scss.location2}>
            <h3>Hotline</h3>
            <div className={scss.line}></div>

            <p>
              <span>
                <FaPhoneFlip />
              </span>
              +771219900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
