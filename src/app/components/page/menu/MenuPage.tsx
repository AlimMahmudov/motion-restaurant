import React from "react";
import OurMenu from "./sections/ourMenu/OurMenu";

const MenuPage: React.FC<PageProps> = ({ searchParams }) => {
  return (
    <>
      <OurMenu category_id={searchParams.category_id ?? "desserts-001"} />
    </>
  );
};

export default MenuPage;
