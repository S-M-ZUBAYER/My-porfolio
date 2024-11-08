import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/Full stack developer infographics.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(link);
      }, 100);
    } else {
      scrollToSection(link);
    }
  };

  const scrollToSection = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "expertise" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="z-30 flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-black via-blue-900 to-black fixed">
      <div>
        <img className="w-16 ml-2 rounded-full" src={logo} alt="img" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            {location.pathname === '/' ? (
              <ScrollLink to={link} smooth duration={500}>
                {link}
              </ScrollLink>
            ) : (
              <span onClick={() => handleLinkClick(link)}>{link}</span>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default NavBar;
