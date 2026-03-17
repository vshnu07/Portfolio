import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = ({ onResumeClick }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-10">
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <div className="flex-shrink-0">
            <p className="text-white text-[16px] lg:text-[18px] xl:text-[20px] font-bold cursor-pointer flex items-center whitespace-nowrap">
              {personalInfo.name}
              <span className="hidden lg:inline text-secondary px-2">|</span>
              <span className="hidden lg:inline font-bold">{personalInfo.role}</span>
              <span className="hidden 2xl:inline text-secondary px-2">|</span>
              <span className="hidden 2xl:inline font-bold">{personalInfo.mobile}</span>
            </p>
          </div>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium cursor-pointer hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li
            className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}
            onClick={onResumeClick}
          >
            Resume
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } text-[18px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <li
                className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}
                onClick={() => {
                  setToggle(!toggle);
                  onResumeClick();
                }}
              >
                Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;