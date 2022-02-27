import Footer from "components/Molecules/Footer/Footer";
import Header from "components/Molecules/Header/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
