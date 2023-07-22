import React from 'react';
import img1 from "../assets/THT/Home.png"
import img2 from "../assets/THT/customerService.png"
import img3 from "../assets/THT/product details.png"
const THT_Space = () => {
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5"> A site for THT-Space Electrical Company Ltd. Customer service team and admin panel use this site to answer all the questions for customer related to the product of THT-Space Electrical Company Ltd. and store data...
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">

                    <br />1. This website for the customer service team and admin panel of THT-Space Electrical Company Ltd.
                    <br />2. Here integration Question & Answer system for the customer of this company.
                    <br />3. Admin panel can store different kinds of product information of thi company.
                    <br />4. Store different kind of icons to use in app for this company.
                    <br />5. Admin can monitoring this site , he has the ability to verify all user and admin panel.
                    <br />6. This ia a single page application.
                    <br />7. I use HTML ,CSS ,Tailwind CSS ,JavaScript , React js, Node js, Express js,  MySql.

                </p>
            </h2>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind CSS, JavaScript, React js, Node js, Express JS, MySql, OpenAI and so on.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>
            <p className="my-5">Live Site: <span>https://grozziie.zjweiting.com//</span></p>
            <p className="my-5">GitHub Client Site: <span>https://github.com/S-M-ZUBAYER/THT-Customer-Management-System</span></p>
            <p className="my-5">GitHub Server Site: <span>https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site</span></p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
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

export default THT_Space;