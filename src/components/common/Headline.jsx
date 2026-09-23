import React from "react";

const Headline = ({children}) => {
  return (
    <h1 className=" py-5 font-extrabold  xl:text-[116px] md:text-[71px] text-[37px]  leading-[110%] tracking-[-5%] font-anek-tamil uppercase">
      {children}
    </h1>
  );
};

export default Headline;
