import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full min-h-[480px] h-full bg-light-purple-color ">
      <div className="custom-container mx-auto py-7 px-4 min-h-[480px] h-full w-full flex flex-col justify-between sm:gap-0 gap-20">
        <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-7">
          <img
            src="/footer_logo.png"
            alt="footer_logo"
            loading="lazy"
            className="max-w-[230px] max-h-[136px] w-full h-full"
          />
          <p className="font-instrunment-sans font-bold  sm:text-5xl text-[40px] leading-[110%] tracking-[-5%]">
            PrimalTraining
          </p>
        </div>
        <div className="flex justify-between sm:flex-row flex-col sm:gap-0 gap-10">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-anek-tamil font-bold text-xl leading-[131%] tracking-[-3%]">CONTACT</h3>
            <ul className="flex flex-col">
              <li className="flex items-center font-bold font-geist leading-[131%] tracking-[1%] text-sm">
                Email: <a href="mailto:hello@figma.com" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">hello@figma.com</a>
              </li>
              <li className="flex items-center font-geist font-bold leading-[131%] tracking-[1%] text-sm">
                Phone: <a href="tel:(203)555-5555" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">(203) 555-5555</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-4 w-[220px]">
            <h3 className="font-anek-tamil font-bold text-xl leading-[131%] tracking-[-3%]">Opening Hours</h3>
            <ul>
              <li className="flex gap-6 justify-between">
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">MON – FRI</p>
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">5:00 – 23:00</p>
              </li>
              <li className="flex gap-6 justify-between">
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">SATURDAYS</p>
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">8:00 – 16:00</p>
              </li>
               <li className="flex gap-6 justify-between">
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">SUNDAYS</p>
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">8:00 – 13:00</p>
              </li>
               <li className="flex gap-6 justify-between">
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">HOLIDAYS</p>
                <p className="font-geist font-bold leading-[131%] tracking-[1%] text-sm">8:00 – 16:00</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-anek-tamil font-bold text-xl leading-[131%] tracking-[-3%]">SOCIAL</h3>
            <ul>
              <li><a href="#" target="_blank" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm underline">Instagram</a></li>
              <li><a href="#" target="_blank" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm underline">X</a></li>
              <li><a href="#" target="_blank" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm underline">LinkedIn</a></li>
              <li><a href="#" target="_blank" className="font-geist font-bold leading-[131%] tracking-[1%] text-sm underline ">Spotify</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
