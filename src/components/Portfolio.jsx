import React from "react";
import cricketLover from "../assets/portfolio/cricketLover.png";
import kidspace from "../assets/portfolio/kidspace.png";
import studyZone from "../assets/portfolio/studyZone.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate()
  const handleToCricketLover = () => {
    navigate('/cricketLover')
  }
  const handleToKidspace = () => {
    navigate('/kidSpace')
  }
  const handleToStudyZone = () => {
    navigate('/studyZone')
  }
  const portfolios = [
    {
      id: 1,
      src: cricketLover,
      title: 'Cricket Lover',
      description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."
    },
    {
      id: 2,
      src: kidspace,
      title: 'KidSpace',
      description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."

    },
    {
      id: 3,
      src: studyZone,
      title: 'StudyZone',
      description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."

    }
  ];


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-black via-slate-800 to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={cricketLover}
              alt=""
              className="rounded-md rounded-b-none duration-200 hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold pl-4 pt-1">
                Cricket Lover
              </h3>
            </div>
            <div className="flex items-center justify-center">

              <small className="p-4">
                A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price...
              </small>
            </div>
            <button onClick={handleToCricketLover} className="text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={kidspace}
              alt=""
              className="rounded-md rounded-b-none duration-200 hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold pl-4 pt-1">
                Kidspace
              </h3>
            </div>
            <div className="flex items-center justify-center">

              <small className="p-4">
                A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price...
              </small>
            </div>
            <button onClick={handleToKidspace} className="text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={studyZone}
              alt=""
              className="rounded-md rounded-b-none duration-200 hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold pl-4 pt-1">
                StudyZone
              </h3>
            </div>
            <div className="flex items-center justify-center">

              <small className="p-4">
                A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price...
              </small>
            </div>
            <button onClick={handleToStudyZone} className="text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
