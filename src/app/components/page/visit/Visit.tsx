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
    <div>
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
            <Image src={map} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
