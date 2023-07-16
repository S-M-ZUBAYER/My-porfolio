import React from 'react';
import img1 from "../assets/portfolio/cricket-1.png"
import img2 from "../assets/portfolio/cricket-2.png"
import img3 from "../assets/portfolio/cricket-3.png"
const StudyZone = () => {
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">A site to buying & selling platform for used cricket playing instruments.This site will help the crazy cricket lover to got the cricket instruments with low price...
            </p>
            <h2 className="text-white font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">

                    <br />1.In this website All cricket instruments seller can easily sell their products.
                    <br />2.In this website All crazy cricket lover can easily buy their products.
                    <br />3.Seller can easily add their products and advertise their new collection in home page.
                    <br />4.Buyer can easily chose any product and buy their necessary products.
                    <br />5.Admin can monitoring this site , he has the ability to verify the seller and able delete the seller and buyer account.
                    <br />6.This ia a single page application.
                    <br />7. I use HTML,CSS,Tailwind,some CSS components, JavaScript, React js, Node js, MondgoDB, stripe for payment etc.

                </p>
            </h2>
            <h2 className="text-white font-semibold text-3xl">
                Technologies:
            </h2>
            {/* <p className="my-5 text-base font-medium">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white font-semibold text-3xl">
                Link:
            </h2>
            <p className="my-5">Live Site: <span>https://cricket-lover-52a96.web.app/</span></p>
            <p className="my-5">GitHub Client Site: <span>https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site</span></p>
            <p className="my-5">GitHub Server Site: <span>https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site</span></p>
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