import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import img1 from "../assets/THT/slider.png"
import img2 from "../assets/THT/about.jpg"
import img3 from "../assets/THT/footer.png"
import img4 from "../assets/THT/chatBoot.png"
import img5 from "../assets/THT/QApart.png"
import img6 from "../assets/THT/translator.png"
import img7 from "../assets/THT/detect.png"
import img8 from "../assets/THT/account.png"
import img9 from "../assets/THT/calculation.png"
import img10 from "../assets/THT/contact1.jpg"
import img11 from "../assets/THT/contact2.png"
import img12 from "../assets/THT/contact-3.png"
import img13 from "../assets/THT/admin.png"
import img14 from "../assets/THT/user.png"
import img15 from "../assets/THT/qaPage.png"
import img16 from "../assets/THT/MHW.png"
import img17 from "../assets/THT/w&c.png"
import img18 from "../assets/THT/icon.png"
import img19 from "../assets/THT/icon2.png"
import img20 from "../assets/THT/bg.png"
import img21 from "../assets/THT/mall.png"
import img22 from "../assets/THT/showProduct2.png"
import img23 from "../assets/THT/showProduct-3.png"
import img24 from "../assets/THT/showProduct.png"
import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';

const THT_Space = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const mainSiteImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    const adminSiteImg = [img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24]
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
                Customer Management System
            </h1>
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5"> A site for THT-Space Electrical Company Ltd. Customer service team and admin panel use this site to store data for make backend and  answer all the questions for customer related to the product of THT-Space Electrical Company Ltd. and store data...
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">
                    <br />1. This website serves the customer service team and admin panel of THT-Space Electrical Company Ltd.
                    <br />2. It integrates a Question & Answer system for the company's customers.
                    <br />3. There's a customer service section for both customers and the customer service team. When a customer asks a question related to the product, company, shipping process, and more, the customer service team can search for specific questions on this site and provide relevant answers.
                    <br />4. THT-Space Electrical Company has customers in different countries such as Malaysia, China, Vietnam, the Philippines, Thailand, Indonesia, and more, which leads to language diversity. Therefore, questions are automatically translated into Bengali and English, and corresponding answers are provided.
                    <br />5. The website also includes a direct chat section for customers using our product's operating application.
                    <br />6. Similar to an online shopping platform, there's a dedicated Q&A section for each shop name.
                    <br />7. The site offers functionalities to store unknown questions and incorrect answers for analysis and allows adding missing question-answer pairs.
                    <br />8. The admin panel enables the storage of various product information for this company.
                    <br />9. There's also a page for translating sentences into any language, implemented using Open AI.
                    <br />10. The site includes a feature to detect addresses. It provides a proper address format when a customer doesn't provide one in the correct language.
                    <br />11. An account page is available for customer service personnel, displaying their total questions, unknown questions, and more.
                    <br />12. The admin panel is accessible only by administrators. It offers user management features, allowing the admin to delete or edit users and assign admin privileges.
                    <br />13. The "Add Q&A" page lets users add questions and answers for backend storage.
                    <br />14. The "Add Warehouse & Cities" page enables the addition of warehouses and cities under each warehouse for different countries. This information is used in the backend for the shopping app and warehouse management system.
                    <br />15. The "Add Model H&W" page allows adding model names and specifying regular height and width, as well as maximum height and width.
                    <br />16. The "Add Background Image" page is used for adding background images categorized by height and width. These images are used to create labels in the THT-Space Electrical Company's product operating application.
                    <br />17. The "Add Icons" page is used for adding icons categorized by height and width, also for label creation in the product operating application.
                    <br />18. The "Add Mall Products" page displays comprehensive information about products, categorized by model number, and includes various images, videos, and files.
                    <br />19. A backend component is also available to store information about products, categorized by model number and containing different types of media, for use in THT-Space Electrical Company Ltd's shopping application.
                    <br />20. The "Add Event Products" page showcases detailed information about products by model number, featuring various images, videos, and files.
                    <br />21. Similar to the Mall Products, a backend section is included to store information about products categorized by model number, for display in the THT-Space Electrical Company Ltd's shopping application.
                    <br />22. This website is a single-page application.
                    <br />23. Technologies used include HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, OpenAI, Express.js, MySQL, and more.
                </p>

            </h2>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind CSS, JavaScript, React js, Node js, Express JS, MySql, OpenAI and more.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>
            <button className="flex" onClick={() => handleToLiveLink("https://grozziie.zjweiting.com/")}>
                <p className="my-3 text-blue-600 font-bold text-lg">Live Site: <span className="font-medium">https://grozziie.zjweiting.com/</span></p>
            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/THT-Customer-Management-System")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Client Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/THT-Customer-Management-System</span></p>
            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Server Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site</span></p>
            </button>


            <h2 className="text-white mt-12 font-semibold text-3xl">
                Account:
            </h2>
            <p className="my-5">Email: <span>sm@gmail.com</span></p>
            <p className="my-5">Password: <span>123456</span></p>
            <p className="my-5">NB: <span>This account don't have the permission to access in the admin route.</span></p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                {mainSiteImg && mainSiteImg.length > 0 && mainSiteImg?.map((perImg, index) => {
                    return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                })
                }

            </div>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Admin Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                {adminSiteImg && adminSiteImg.length > 0 && adminSiteImg?.map((perImg, index) => {
                    return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
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

export default THT_Space;