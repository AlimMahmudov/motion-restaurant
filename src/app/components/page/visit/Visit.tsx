import React from "react";
import scss from "./Visit.module.scss";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import img10 from "../../../../assets/Frame 10.png";
import map from "../../../../assets/Frame_map.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Visit = () => {
  return (
    <div id={scss.visit}>
      <div className="container">
        <div className={scss.visit}>
          <div className={scss.visit_text}>
            <div className={scss.visit_restarant}>
              <Image src={img10} alt="img" />
              <h1>Visit Restaurant</h1>
            </div>
            <h1>Join Us for Happy Hours</h1>
            <div className={scss.visit_your}>
              <h2>Your neighborhood</h2>
              <h3>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</h3>
            </div>
            <div className={scss.visit_your}>
              <h2>Opening hours:</h2>
              <h3>Mon-Thu: 10:00 am - 01:00 am</h3>
              <h3>Fri-Sun: 10:00 am - 02:00 am</h3>
            </div>
            <div className={scss.visit_button}>
              <h1>
                Purchase gift card <FaArrowRight />
              </h1>
            </div>
          </div>
          <div className={scss.visit_image}>
            <h1>contact Info</h1>
            <h1>
              <BsFillTelephoneOutboundFill /> +771219900
            </h1>
            <h1>
              <MdOutlineEmail /> motionweb312@gmail.com
            </h1>
            <div className={scss.telegram}>
              <h1>
                <FaTelegramPlane />
              </h1>
              <h1>
                <AiFillInstagram />
              </h1>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.670201784028!2d74.58255517621372!3d42.879804671149365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1729330135293!5m2!1sru!2skg"
              width="500"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
