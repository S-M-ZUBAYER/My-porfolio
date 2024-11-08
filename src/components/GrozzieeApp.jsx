import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import img1 from "../assets/Grozziee/splash.jpg"
import img2 from "../assets/Grozziee/Login.jpg"
import img3 from "../assets/Grozziee/Dashboard.jpg"
import img4 from "../assets/Grozziee/Download.jpg"
import img5 from "../assets/Grozziee/Document.jpg"
import img6 from "../assets/Grozziee/SelectDocument.jpg"
import img7 from "../assets/Grozziee/SelectPrinter.jpg"
import img8 from "../assets/Grozziee/LabelModels.jpg"
import img9 from "../assets/Grozziee/CloseDashbord.jpg"
import img10 from "../assets/Grozziee/CreateTemplate.jpg"
import img11 from "../assets/Grozziee/ProductShow.jpg"
import img12 from "../assets/Grozziee/CustomerCareSupport.jpg"
import img13 from "../assets/Grozziee/SmsWithCustomerService.jpg"
import img14 from "../assets/Grozziee/Shop.jpg"
import img15 from "../assets/Grozziee/ProductVideo.jpg"
import img16 from "../assets/Grozziee/ServerSaveTemplate.jpg"

import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';

const GrozzieeApp = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const mainSiteImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
    const adminSiteImg = [img16]
    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    const handleToLiveLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <Link to='/' className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200  text-white font-black dark:text-gray-900"><GrLinkPrevious></GrLinkPrevious></Link>
            <h1 className="text-3xl underline text-center mb-10 font-bold" style={{
                background: 'linear-gradient(90deg, #00FF00, #FFFF00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                Grozziee App BackEnd
            </h1>
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5"> A platform is designed to cater to the needs of customers utilizing printers from THT-Space Electrical Company Ltd. Through this application, users have the capability to create templates and print various documents using Grozziie thermal and dot printers. Additionally, users can make purchases directly through the app and access customer support via the integrated chat feature....
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:

                <p className="text-base font-medium">
                    <span className="font-bold text-green-500">*** User Registration & Login API:</span>
                    <p className="ml-5">
                        1. Develop an API to facilitate user registration and login functionality for the application.</p>

                    <span className="font-bold text-green-500">*** Product Information & Slider API:</span>
                    <p className="ml-5">
                        2. Implement an API to store diverse product information for display in the app, and create an API to showcase distinct images for the slider.</p>

                    <span className="font-bold text-green-500">*** Widget & Template API:</span>
                    <p className="ml-5">
                        3. Create an API to store each widget, enabling the creation and presentation of templates in the app interface.</p>
                    <p className="ml-5">
                        4. Incorporate the capability to store background images for template creation, and allow the use of emojis from the backend for template design.</p>

                    <span className="font-bold text-green-500">*** Instructional Videos & Customer Service API:</span>
                    <p className="ml-5">
                        5. Store and display relevant instructional and relative videos for app users.</p>
                    <p className="ml-5">
                        6. Develop backend functionality for user interaction with the customer service team in case of any issues.</p>

                    <span className="font-bold text-green-500">*** Product Display & Event-Specific Products API:</span>
                    <p className="ml-5">
                        7. Showcase products available in the mall along with comprehensive details for purchase.</p>
                    <p className="ml-5">
                        8. Feature event-specific products on the app, providing information for selling and offering discounts based on different festivals and occasions.</p>

                    <span className="font-bold text-green-500">*** Purchase Data & Cart Management API:</span>
                    <p className="ml-5">
                        9. Provide APIs for storing purchase data and maintaining user shopping carts.</p>

                    <span className="font-bold text-green-500">*** Warehouse & Stock API:</span>
                    <p className="ml-5">
                        10. Implement an API for the warehouse to display information regarding product distribution, available stock, and advertisement quantities.</p>

                    <span className="font-bold text-green-500">*** Product Colors API:</span>
                    <p className="ml-5">
                        11. Develop an API to store images of different colors for a product, allowing for varied product displays.</p>

                    <span className="font-bold text-green-500">*** Product Sorting & Selling API:</span>
                    <p className="ml-5">
                        12. Create APIs for sorting and selling products based on model, price, and geographical location.</p>

                    <span className="font-bold text-green-500">*** Technologies:</span>
                    <p className="ml-5">
                        13. Technologies employed include Node.js, Express.js, MySQL, and others.</p>
                </p>


            </h2>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p>Node js, Express JS, MySql and more.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>
            <button className="flex" >
                <p className="my-3 text-blue-600 font-bold text-lg">Goggle Play store link: <span className="font-medium">com.grozziie.printer</span></p>
            </button>
            {/* <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/THT-Customer-Management-System")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Client Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/THT-Customer-Management-System</span></p>
            </button> */}
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Server Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site</span></p>
            </button>

            <button className="flex" onClick={() => handleToLiveLink("https://fb.watch/pzpPjVZ-NC/?mibextid=Nif5oz")}>
                <p className="my-3 text-blue-600 font-bold text-lg">App Instruction Video: <span className="font-medium">https://fb.watch/pzpPjVZ-NC/?mibextid=Nif5oz</span></p>
            </button>


            <h2 className="text-white mt-12 font-semibold text-3xl">
                Account:
            </h2>
            <p className="my-5">Email: <span>smzubayer@gmail.com</span></p>
            <p className="my-5">Password: <span>12345678</span></p>
            <p className="my-5">NB: <span>This account don't have the permission to access in the admin access.</span></p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 py-5">
                {mainSiteImg && mainSiteImg.length > 0 && mainSiteImg?.map((perImg, index) => {
                    return <img key={index} className=" h-96" src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                })
                }

            </div>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Admin Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 py-5">
                {adminSiteImg && adminSiteImg.length > 0 && adminSiteImg?.map((perImg, index) => {
                    return <img key={index} className=" h-96" src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                })
                }

            </div>
            {isModalOpen && (
                <ImageModal
                    imgSrc={selectedImage}
                    alt="Guitar"
                    onClose={closeImageModal} // Close the modal when the "Close" button is clicked
                />
            )}
        </div >
    );
};

export default GrozzieeApp;