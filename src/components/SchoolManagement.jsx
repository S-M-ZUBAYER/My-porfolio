import React from 'react';
import img1 from "../assets/CricketLover/contact.png"
import img2 from "../assets/CricketLover/category.png"
import img3 from "../assets/CricketLover/addCart.png"
const CricketLover = () => {
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">A dynamic website to crate new unique for a school from this website...
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">

                    <br />1. In this website admin panel can create a school management system from this site.
                    <br />2. Admission system is available here in online.
                    <br />3. Online attendance system also available in this site.
                    <br />4. Dynamic result calculation attendance and so on.
                    <br />5. Admin can monitoring this site , Admin can collect all the information from a school to create their site automatically.
                    <br />6. Dynamic calender features and so on available here .It's running project .It will be complete within short time.
                    <br />7. I use HTML,CSS,Tailwind,some CSS components, JavaScript, React js, Node js, MongoDB, stripe for payment etc.

                </p>
            </h2>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind CSS,some CSS components, JavaScript, React js, Node js, Express js, MongoDB and so on.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>
            <p className="my-5">Live Site: <span>https://zuss-school-management-system.web.app</span></p>
            <p className="my-5">GitHub Client Site: <span>https://github.com/S-M-ZUBAYER/zuss-school-management-system</span></p>
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

export default CricketLover;