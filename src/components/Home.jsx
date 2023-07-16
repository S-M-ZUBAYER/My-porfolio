import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full   bg-gradient-to-r from-black via-blue-900 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl sm:mt-12 font-bold text-white">
            I'm <span className="bg-gradient-to-r from-yellow-300 to-green-500 text-transparent bg-clip-text">S M ZUBAYER</span><br /> <span className="text-2xl sm:text-4xl">a Front-End Developer</span>
          </h2>
          <p className="text-white py-4 max-w-md">
            TO be a high skill programmer I have spent three
            and a half years in this sector and at the same time, last one year try to focus to
            be a front end developer. Seeking a role as a front-end developer so I can use
            my thorough knowledge of programming frameworks and development.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div >
          <img
            src={HeroImage}
            alt="my profile"
            className=" z-0 rounded-full mx-auto w-72 h-72 border-8 bg-gradient-to-t from-orange-200 via-lime-200 to-cyan-200 shadow-md hover:scale-105 duration-500 py-2  shadow-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
