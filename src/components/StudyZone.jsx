import React from 'react';
import img1 from "../assets/StudyZone/Header.png"
import img2 from "../assets/StudyZone/Details.png"
import img3 from "../assets/StudyZone/Checkout.png"
const StudyZone = () => {
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">This site will help the students to gather knowledge about modern technology. Any one can buy any course about modern technology. And learn on this particular technology...
            </p>
            <h2 className="text-white font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">

                    <br />1.In this website any one can purchase their different kinds of courses.
                    <br />2.That will be helpful for different ages people gather their knowledge from online platform easily.
                    <br />3.Any one can justify you level to ans this particulars quizzes.
                    <br />4.This is single page application. To build this site i use react js for make user interface..
                    <br />5. Also i use Node.js to make API. And i use firebase to create authentication for this site.

                </p>
            </h2>
            <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind,some CSS components, JavaScript, React js,Firebase, Node js, MongoDB and so on.</p>
            <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
                Link:
            </h2>
            <p className="my-5">Live Site: <span>https://study-zone-platform.web.app/</span></p>
            <p className="my-5">GitHub Client Site: <span>https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site</span></p>
            <p className="my-5">GitHub Server Site: <span>https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site</span></p>
            <h2 className="text-white font-semibold text-3xl">
                Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div >
    );
};

export default StudyZone;