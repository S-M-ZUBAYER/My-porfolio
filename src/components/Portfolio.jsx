import React from "react";
import cricketLover from "../assets/portfolio/cricketLover.png";
import tht from "../assets/portfolio/tht.png";
import school from "../assets/portfolio/school.png";
import kidspace from "../assets/portfolio/kidspace.png";
import studyZone from "../assets/portfolio/studyZone.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate()
  const handleToCricketLover = () => {
    navigate('/cricketLover')
  }
  const handleToCustomerService = () => {
    navigate('/THT-Space')
  }
  const handleToSchoolManagement = () => {
    navigate('/schoolManagement')
  }

  const handleToKidspace = () => {
    navigate('/kidSpace')
  }
  const handleToStudyZone = () => {
    navigate('/studyZone')
  }
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: cricketLover,
  //     title: 'Cricket Lover',
  //     description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."
  //   },
  //   {
  //     id: 2,
  //     src: kidspace,
  //     title: 'KidSpace',
  //     description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."

  //   },
  //   {
  //     id: 3,
  //     src: studyZone,
  //     title: 'StudyZone',
  //     description: "A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price..."

  //   }
  // ];


  return (
    <div
      name="Portfolio"
      className=" bg-gradient-to-r from-black via-blue-900 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className=" relative shadow-md shadow-gray-600 rounded-lg">
            <img
              src={tht}
              alt=""
              className="rounded-md rounded-b-none duration-200 hover:scale-105"
            />
            <div>
              <h3 className="text-lg font-semibold pl-4 pt-1">
                THT-Customer-Management-System
              </h3>
            </div>
            <div className="flex items-center justify-center">

              <small className="p-4">
                A site for THT-Space Electrical Company Ltd. Customer service team and admin panel use this site to ans questions and store data...
              </small>
            </div>
            <button onClick={handleToCustomerService} className=" absolute bottom-0 text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>

          <div className="shadow-md relative shadow-gray-600 rounded-lg">
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
            <button onClick={handleToCricketLover} className="text-center absolute bottom-0 mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>

          <div className=" relative shadow-md shadow-gray-600 rounded-lg">
            <img
              src={school}
              alt=""
              className="rounded-md rounded-b-none duration-200 hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold pl-4 pt-1">
                Zuss School Management System
              </h3>
            </div>
            <div className="flex items-center justify-center">

              <small className="p-4">
                A dynamic website to crate new unique for a school from this website. Admin can collect information from a school to create their dynamic site...
              </small>
            </div>
            <button onClick={handleToCricketLover} className=" absolute bottom-0 text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
          <div className=" relative shadow-md shadow-gray-600 rounded-lg">
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
                In this website any one can find the specific time and activities for their child. That will be helpful for different kinds of parents, which parents generally busy with their job or other activities in maximum day...
              </small>
            </div>
            <button onClick={handleToKidspace} className=" absolute bottom-0 text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
          <div className=" relative shadow-md shadow-gray-600 rounded-lg">
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
                This site will help the students to gather knowledge about modern technology. Any one can buy any course about modern technology. And learn on this particular technology...
              </small>
            </div>
            <button onClick={handleToStudyZone} className=" absolute bottom-0 text-center mx-auto w-full bg-gradient-to-t from-green-300 via-orange-400 to-yellow-300 rounded-b-md py-1 text-black font-semibold">
              Details
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
