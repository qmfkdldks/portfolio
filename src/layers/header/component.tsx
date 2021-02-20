import React from "react";
import Header from "../../components/header";
import { useMediaQuery } from "react-responsive";

const HeaderLayer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return <>{!isTabletOrMobile && <Header />}</>;
};

export default HeaderLayer;
