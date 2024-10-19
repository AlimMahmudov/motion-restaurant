import React, { FC } from "react";
import scss from "./SectionTitle.module.scss";
import img9 from "../../../../assets/Frame 9.png";
import img10 from "../../../../assets/Frame 10.png";

import Image from "next/image";
interface Iprops {
  title: string;
  subtitle: string;
}
const SectionTitles: FC<Iprops> = ({ title, subtitle }) => {
  return (
    <div className={scss.SectionTitle}>
      <div className={scss.Title}>
        <Image src={img10} alt="not-found" />
        <h2>{title}</h2>
        <Image src={img9} alt="not-found" />
      </div>
      {subtitle && <h3 className={scss.SectionSubtitle}>{subtitle}</h3>}
    </div>
  );
};

export default SectionTitles;
