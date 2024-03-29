import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  // const handleToBlog = () => {
  //   navigate('/blog')
  // }
  const handleToHome = () => {
    navigate('/')
  }

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    // {
    //   id: 4,
    //   link: "experience",
    // },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="z-30 flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-black via-blue-900 to-black fixed">
      <div>
        {/* <h1 className="text-3xl font-signature ml-2">SM</h1> */}
        <img className="w-16 ml-2" src={logo} alt="img" />
      </div>

      <ul className="hidden md:flex">
        <li

          className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
        >
          {/* <Link onClick={handleToHome} to="/" smooth duration={500}>
            Home
          </Link> */}
        </li>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* <li className=" text-white">
          <button onClick={handleToBlog}>Blog</button>
        </li> */}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          <li className=" text-white px-4 cursor-pointer capitalize py-6 text-4xl">Blog</li>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>
      )} */}
    </div>
  );
};

export default NavBar;
