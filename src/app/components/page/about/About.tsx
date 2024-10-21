import React from "react";
import scss from "./About.module.scss";
import img10 from "../../../../assets/Frame 10.png";
import img15 from "../../../../assets/Frame 15.png";
import img16 from "../../../../assets/Frame 16.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className={scss.about}>
          <div className={scss.about_text}>
            <Image src={img10} alt="" />
            <h1>About Us</h1>
          </div>
          <div className={scss.about_block}>
            <div className={scss.about_box}>
              <h1>A Journey Throught Cafesio Flavors</h1>
              <h4>
                {" "}
                Try dishes that will open up new tastes for you and delight your
                eyes with their appearance. Here you will find a cozy
                atmosphere, excellent service and attention to each guest. Book
                a table now and enjoy a unique experience of taste discovery!
              </h4>
              <Image src={img15} alt="img" />
            </div>
            <div className={scss.about_box}>
              <h3>
                {" "}
                Try dishes that will open up new tastes for you and delight your
                eyes with their appearance. Here you will find a cozy
                atmosphere, excellent service and attention to each guest. Book
                a table now and enjoy a unique experience of taste discovery!
              </h3>
              <Image src={img16} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
