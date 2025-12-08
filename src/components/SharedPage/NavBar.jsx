// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import logo from "../../assets/Full stack developer infographics.png";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLinkClick = (link) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         scrollToSection(link);
//       }, 100);
//     } else {
//       scrollToSection(link);
//     }
//   };

//   const scrollToSection = (link) => {
//     const section = document.getElementById(link);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const links = [
//     { id: 1, link: "home" },
//     { id: 2, link: "about" },
//     { id: 3, link: "portfolio" },
//     { id: 4, link: "expertise" },
//     { id: 5, link: "contact" },
//   ];

//   return (
//     <div className="z-30 flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-black via-blue-900 to-black fixed">
//       <div>
//         <img className="w-16 ml-2 rounded-full" src={logo} alt="img" />
//       </div>

//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
//           >
//             {location.pathname === "/" ? (
//               <ScrollLink to={link} smooth duration={500}>
//                 {link}
//               </ScrollLink>
//             ) : (
//               <span onClick={() => handleLinkClick(link)}>{link}</span>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-white md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Full stack developer infographics.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    setNav(false); // close mobile drawer
    if (location.pathname !== "/") {
      navigate("/");
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
      {/* Logo */}
      <div>
        <img className="w-16 ml-2 rounded-full" src={logo} alt="img" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            {location.pathname === "/" ? (
              <ScrollLink to={link} smooth duration={500}>
                {link}
              </ScrollLink>
            ) : (
              <span onClick={() => handleLinkClick(link)}>{link}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-20 md:hidden ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNav(false)}
      />

      {/* Enhanced Side Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out z-30 border-r border-blue-500/30 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
          <div
            className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -bottom-40 -left-40"
            style={{ animation: "pulse 3s ease-in-out infinite 1s" }}
          />
        </div>

        {/* Menu Header */}
        <div className="relative pt-24 pb-8 px-6">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 animate-pulse" />
          <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">
            Navigation
          </h2>
          <p className="text-blue-300 text-sm">Explore my portfolio</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2 px-4 relative">
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className="relative group"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: nav
                  ? `slideIn 0.4s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <div
                onClick={() => handleLinkClick(link)}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-white text-base font-medium rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden capitalize"
              >
                {/* Hover Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-xl transition-all duration-300 ${
                    hoveredId === id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl transition-opacity duration-300 ${
                    hoveredId === id ? "opacity-50" : "opacity-0"
                  }`}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3 w-full">
                  {/* Icon Circle */}
                  <div
                    className={`w-2 h-2 rounded-full bg-blue-400 transition-all duration-300 ${
                      hoveredId === id
                        ? "scale-150 bg-white shadow-lg shadow-blue-400/50"
                        : ""
                    }`}
                  />

                  <span className="tracking-wide">{link}</span>

                  {/* Arrow Indicator */}
                  <svg
                    className={`ml-auto w-4 h-4 transition-all duration-300 ${
                      hoveredId === id
                        ? "translate-x-1 opacity-100"
                        : "translate-x-0 opacity-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Active Indicator */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full transition-all duration-300 ${
                    hoveredId === id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-y-50"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Footer Decoration */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <p className="text-center text-blue-300/60 text-xs mt-3">
            Tap outside to close
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
