import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-r from-black via-slate-800 to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl sm:mt-12 font-bold text-white">
            I'm S M ZUBAYER <br /> <span className="text-2xl sm:text-4xl">a Front-End Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
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

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-full mx-auto w-2/3 h-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
