import React from "react";
import Navbar from "./Navbar";
import ImageContainer from "./ImageContainer";
import Page1Content from "./Page1Content";

const Section1 = () => {
  return (
    <>
      <div className="h-screen w-full ">
        <Navbar />
       <Page1Content/>
      </div>
      ;
    </>
  );
};

export default Section1;
