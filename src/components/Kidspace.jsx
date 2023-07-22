import React from 'react';
import img1 from "../assets/kidspace/home.png"
import img2 from "../assets/kidspace/Details.png"
import img3 from "../assets/kidspace/review.png"
const Kidspace = () => {
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">In this website any one can find the specific time and activities for their child. This is one kind of day care service center website...
            </p>
            <h2 className="text-white font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">

                    <br />1.In this website any one can find the specific time and activities for their child..
                    <br />2.That will be helpful for different kinds of parents.
                    <br />3.Specially which parents generally busy with their job or other activities in maximum day.
                    <br />4. any one can easily fixed their time and activities which is needed for their child.
                    <br />6.This ia a single page application.
                    <br />7. I use HTML,CSS,Tailwind,some CSS components, JavaScript, React js, Node js, MongoDB etc.

                </p>
            </h2>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
                Link:
            </h2>
            <p className="my-5">Live Site: <span>https://kidspace-3636d.web.app/</span></p>
            <p className="my-5">GitHub Client Site: <span>https://github.com/S-M-ZUBAYER/Kidspace-day-care-</span></p>
            <p className="my-5">GitHub Server Site: <span>https://github.com/S-M-ZUBAYER/kidspace-day-care-server-site</span></p>
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

export default Kidspace;