import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import img1 from "../../assets/THT/slider.png";
import img2 from "../../assets/THT/about.jpg";
import img3 from "../../assets/THT/footer.png";
import img4 from "../../assets/THT/chatBoot.png";
import img5 from "../../assets/THT/QApart.png";
import img6 from "../../assets/THT/translator.png";
import img7 from "../../assets/THT/detect.png";
import img8 from "../../assets/THT/account.png";
import img9 from "../../assets/THT/calculation.png";
import img10 from "../../assets/THT/contact1.jpg";
import img11 from "../../assets/THT/contact2.png";
import img12 from "../../assets/THT/contact-3.png";
import img13 from "../../assets/THT/admin.png";
import img14 from "../../assets/THT/user.png";
import img15 from "../../assets/THT/qaPage.png";
import img16 from "../../assets/THT/MHW.png";
import img17 from "../../assets/THT/w&c.png";
import img18 from "../../assets/THT/icon.png";
import img19 from "../../assets/THT/icon2.png";
import img20 from "../../assets/THT/bg.png";
import img21 from "../../assets/THT/mall.png";
import img22 from "../../assets/THT/showProduct2.png";
import img23 from "../../assets/THT/showProduct-3.png";
import img24 from "../../assets/THT/showProduct.png";
import img25 from "../../assets/THT/LocationLogin.jpg";
import img26 from "../../assets/THT/ChattingUpdate.jpg";
import ImageModal from "../SharedPage/ImageModal";
import { Link } from "react-router-dom";

const THT_Space = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const mainSiteImg = [
    img25,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  const adminSiteImg = [
    img13,
    img14,
    img26,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ];
  const openImageModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleToLiveLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
      <Link
        to="/"
        className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200  text-white font-black dark:text-gray-900"
      >
        <GrLinkPrevious></GrLinkPrevious>
      </Link>
      <h1
        className="text-3xl underline text-center mb-10 font-bold"
        style={{
          background: "linear-gradient(90deg, #00FF00, #FFFF00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Customer Management System
      </h1>
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">
        {" "}
        A site for THT-Space Electrical Company Ltd. Customer service team and
        admin panel use this site to store data for make backend and answer all
        the questions for customer related to the product of THT-Space
        Electrical Company Ltd. and store data...
      </p>
      <h2 className="text-white mt-12 font-semibold text-3xl">
        Key Features:
        <p className="text-base font-medium">
          <span className="font-bold text-green-500">
            *** Customer Service & Admin Panel:
          </span>
          <p className="ml-5">
            1. This website serves the customer service team and admin panel of
            THT-Space Electrical Company Ltd.
          </p>

          <span className="font-bold text-green-500">
            *** Q&A System Integration:
          </span>
          <p className="ml-5">
            2. It integrates a Question & Answer system for the company's
            customers.
          </p>
          <p className="ml-5">
            3. The customer service section allows team members to search and
            provide answers to customer questions about products, shipping, and
            the company.
          </p>

          <span className="font-bold text-green-500">
            *** Multilingual Support:
          </span>
          <p className="ml-5">
            4. With customers in countries like Malaysia, China, Vietnam, the
            Philippines, and more, questions are automatically translated into
            Bengali and English, with answers provided accordingly.
          </p>

          <span className="font-bold text-green-500">
            *** Direct Chat Feature:
          </span>
          <p className="ml-5">
            5. The website includes a direct chat section for customers using
            our product's operating application.
          </p>

          <span className="font-bold text-green-500">
            *** Dedicated Q&A Sections:
          </span>
          <p className="ml-5">
            6. Similar to an online shopping platform, each shop has its
            dedicated Q&A section.
          </p>

          <span className="font-bold text-green-500">
            *** Unknown Questions & Answer Analysis:
          </span>
          <p className="ml-5">
            7. The site stores unknown questions and incorrect answers for
            analysis, with an option to add missing Q&A pairs.
          </p>

          <span className="font-bold text-green-500">
            *** Admin Panel Features:
          </span>
          <p className="ml-5">
            8. The admin panel allows the storage of various product information
            for the company.
          </p>
          <p className="ml-5">
            9. It also includes a page for translating sentences into any
            language using OpenAI.
          </p>

          <span className="font-bold text-green-500">
            *** Address Detection:
          </span>
          <p className="ml-5">
            10. The site can detect and correct improper address formats
            provided by customers.
          </p>

          <span className="font-bold text-green-500">
            *** Customer Service Account Page:
          </span>
          <p className="ml-5">
            11. Displays total questions, unknown questions, and more for
            customer service personnel.
          </p>

          <span className="font-bold text-green-500">*** User Management:</span>
          <p className="ml-5">
            12. Admins can manage users by deleting, editing, or assigning admin
            privileges.
          </p>

          <span className="font-bold text-green-500">*** Q&A Addition:</span>
          <p className="ml-5">
            13. A dedicated page lets users add questions and answers to backend
            storage.
          </p>

          <span className="font-bold text-green-500">
            *** Warehouse & City Addition:
          </span>
          <p className="ml-5">
            14. Users can add warehouses and cities under each warehouse for
            different countries, used in the shopping app and warehouse
            management system.
          </p>

          <span className="font-bold text-green-500">
            *** Model & Dimension Addition:
          </span>
          <p className="ml-5">
            15. Allows the addition of model names and specifications for
            regular and maximum height and width.
          </p>

          <span className="font-bold text-green-500">
            *** Background Image Addition:
          </span>
          <p className="ml-5">
            16. Enables the addition of background images categorized by
            dimensions, for label creation in the company's product operating
            application.
          </p>

          <span className="font-bold text-green-500">*** Icon Addition:</span>
          <p className="ml-5">
            17. Allows adding icons, categorized by dimensions, for label
            creation in the product operating application.
          </p>

          <span className="font-bold text-green-500">
            *** Mall Product Addition:
          </span>
          <p className="ml-5">
            18. Displays comprehensive product information, categorized by model
            number, with images, videos, and files.
          </p>

          <span className="font-bold text-green-500">
            *** Backend Product Storage:
          </span>
          <p className="ml-5">
            19. Stores product details, categorized by model number, for use in
            the shopping application.
          </p>

          <span className="font-bold text-green-500">
            *** Event Product Addition:
          </span>
          <p className="ml-5">
            20. Showcases detailed information about event-specific products by
            model number, with images, videos, and files.
          </p>

          <span className="font-bold text-green-500">
            *** Single-Page Application:
          </span>
          <p className="ml-5">
            21. This website operates as a single-page application.
          </p>

          <span className="font-bold text-green-500">
            *** Technologies Used:
          </span>
          <p className="ml-5">
            22. Technologies include HTML, CSS, Tailwind CSS, JavaScript,
            React.js, Node.js, OpenAI, Express.js, MySQL, and more.
          </p>
        </p>
      </h2>
      <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
      <p>
        {" "}
        HTML,CSS,Tailwind CSS, JavaScript, React js, Node js, Express JS, MySql,
        OpenAI and more.
      </p>
      {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
      <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>
      <button
        className="flex"
        onClick={() => handleToLiveLink("https://grozziie.zjweiting.com/")}
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          Live Site:{" "}
          <span className="font-medium">https://grozziie.zjweiting.com/</span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/THT-Customer-Management-System"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Client Site:{" "}
          <span className="font-medium">
            https://github.com/S-M-ZUBAYER/THT-Customer-Management-System
          </span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Server Site:{" "}
          <span className="font-medium">
            https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site
          </span>
        </p>
      </button>

      <h2 className="text-white mt-12 font-semibold text-3xl">Account:</h2>
      <p className="my-5">
        Email: <span>sadiarumki00@gmail</span>
      </p>
      <p className="my-5">
        Password: <span>12345678</span>
      </p>
      <p className="my-5">
        NB:{" "}
        <span>
          This account don't have the permission to access in the admin route.
        </span>
      </p>
      <h2 className="text-white mt-12 font-semibold text-3xl">Gallery:</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {mainSiteImg &&
          mainSiteImg.length > 0 &&
          mainSiteImg?.map((perImg, index) => {
            return (
              <img
                key={index}
                src={perImg}
                alt=""
                onClick={() => openImageModal(perImg)}
              />
            );
          })}
      </div>
      <h2 className="text-white mt-12 font-semibold text-3xl">
        Admin Gallery:
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {adminSiteImg &&
          adminSiteImg.length > 0 &&
          adminSiteImg?.map((perImg, index) => {
            return (
              <img
                key={index}
                src={perImg}
                alt=""
                onClick={() => openImageModal(perImg)}
              />
            );
          })}
      </div>
      {isModalOpen && (
        <ImageModal
          imgSrc={selectedImage}
          alt="Guitar"
          onClose={closeImageModal} // Close the modal when the "Close" button is clicked
        />
      )}
    </div>
  );
};

export default THT_Space;
