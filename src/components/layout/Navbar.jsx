import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import plus from "../../assets/images/Plus.png"
const Navbar = () => {
  const navigate = useNavigate()
  const onReserveBtnClick = ()=>{
     navigate('/reserve')
  }
  return (
    <header className="bg-light-purple-color h-20 w-full">
      <div className="custom-container  flex items-center justify-between h-full">
        {/* Nav Logo */}
        <div className="flex items-center justify-center gap-1">
          <img src="/nav_logo.png" alt="logo" className="w-11 h-7" />
          <p className="text-xl font-bold font-instrunment-sans ">PrimalTraining</p>
        </div>

        {/* Desktop Links */}
        <ul className="md:flex hidden items-center gap-[60px]">
          <li>
            <Link to={"/"} className="font-geist text-[15px] leading-[110%] tracking-[-1%] text-black">HOME</Link>
          </li>
          <li>
            <Link to={"/about"} className="font-geist text-[15px] leading-[110%] tracking-[-1%] text-black">ABOUT</Link>
          </li>
          <li>
            <Button  className="font-geist text-[15px] leading-[110%] tracking-[-1%] text-black bg-purple-color cursor-pointer hover:shadow-md" onClick={onReserveBtnClick}>RESERVE YOUR SPOT</Button>
          </li>
        </ul>

        <div className="md:hidden block">
          <img src={plus} alt="plus-icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
