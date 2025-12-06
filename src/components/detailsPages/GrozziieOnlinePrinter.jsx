import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";

import img1 from "../../assets/GrozziieOnlinePrinting/Common/Login.jpg";
import img2 from "../../assets/GrozziieOnlinePrinting/Common/Registration.jpg";
import img3 from "../../assets/GrozziieOnlinePrinting/Common/ForgetPassword.jpg";
import img4 from "../../assets/GrozziieOnlinePrinting/Common/RecoveryPassword.jpg";
import img5 from "../../assets/GrozziieOnlinePrinting/Common/ResetPassword.jpg";
import img6 from "../../assets/GrozziieOnlinePrinting/Common/Contact/ContactPage.jpg";
import img7 from "../../assets/GrozziieOnlinePrinting/Common/FromTheDirectDashboard/DataFromDirectDashboard.jpg";
import img8 from "../../assets/GrozziieOnlinePrinting/Common/Searching/SearchingAccordingToDate.jpg";
import img9 from "../../assets/GrozziieOnlinePrinting/Common/Searching/SearchingSingleField.jpg";
import img10 from "../../assets/GrozziieOnlinePrinting/Common/Searching/SearchingWIthMultipleFiled.jpg";
import img11 from "../../assets/GrozziieOnlinePrinting/Common/Setting/SetDeliverType.jpg";
import img12 from "../../assets/GrozziieOnlinePrinting/Common/Tracking/SingleTracking.jpg";
import img13 from "../../assets/GrozziieOnlinePrinting/Common/Tracking/StepStepTrackingInfo.jpg";
import img14 from "../../assets/GrozziieOnlinePrinting/Common/Dashboard/TiktokDashboard.jpg";
import img15 from "../../assets/GrozziieOnlinePrinting/Common/Dashboard/LazadaDashboard.jpg";
import img16 from "../../assets/GrozziieOnlinePrinting/Common/Dashboard/ShopeeDashboard.jpg";
import img17 from "../../assets/GrozziieOnlinePrinting/Common/Dashboard/MultiLanguage.jpg";
import img18 from "../../assets/GrozziieOnlinePrinting/Shopee/ConfirmationModal.jpg";
import img19 from "../../assets/GrozziieOnlinePrinting/Shopee/ProcessedStatusOrderList.jpg";
import img20 from "../../assets/GrozziieOnlinePrinting/Shopee/ShippingAndPrinting.jpg";
import img21 from "../../assets/GrozziieOnlinePrinting/Shopee/PrintMultipleOrderWaybill.jpg";
import img22 from "../../assets/GrozziieOnlinePrinting/Shopee/ShowPrintedDataList.jpg";
import img23 from "../../assets/GrozziieOnlinePrinting/Tiktok/ShippingOrderList.jpg";
import img24 from "../../assets/GrozziieOnlinePrinting/Tiktok/orderAcceptAndPackageing.jpg";
import img25 from "../../assets/GrozziieOnlinePrinting/Tiktok/OrderShippingAndPrinting.jpg";
import img26 from "../../assets/GrozziieOnlinePrinting/Tiktok/OnTheWayorderList.jpg";

import ImageModal from "../SharedPage/ImageModal";
import { Link } from "react-router-dom";

const GrozziieOnlinePrinter = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const mainSiteImg = [
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
    img13,
    img14,
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
    img25,
    img26,
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
    <div className=" relative w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
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
        Grozziie Online Printing
      </h1>
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">
        A comprehensive platform developed for THT-Space Electrical Company Ltd.
        that allows users to view, manage, and print product orders. The system
        integrates with express delivery companies to facilitate seamless
        product shipments. It also supports the creation of manual orders and
        automates the order acceptance and printing processes, streamlining
        operations from order management to delivery
      </p>
      <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>
      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Grozziie Online Printing:-
      </h3>
      <p className="text-base font-medium">
        <span className="font-bold text-green-500">
          *** Multi-language Support:
        </span>
        <p className="ml-5">
          1. The platform supports both Chinese and English, enhancing
          accessibility for diverse user bases.
        </p>

        <span className="font-bold text-green-500">
          *** Real-time Dashboard Overview:
        </span>
        <p className="ml-5">
          2. The homepage provides real-time metrics like the number of printed
          orders, delivered products, refunds, and pending shipments for a
          comprehensive business overview.
        </p>

        <span className="font-bold text-green-500">
          *** Batch Printer Functionality:
        </span>
        <p className="ml-5">
          3. Manage product orders on a single page, with search capabilities
          across various fields.
        </p>
        <p className="ml-5">
          4. Pagination support for navigating large sets of orders.
        </p>
        <p className="ml-5">
          5. Send products to customers directly through an integrated delivery
          system.
        </p>
        <p className="ml-5">
          6. Add templates for express companies and branches, allowing store
          owners to generate demo waybills and select the appropriate waybill
          template for orders.
        </p>

        <span className="font-bold text-green-500">
          *** Order Management & Processing:
        </span>
        <p className="ml-5">
          7. For each batch, users can select an express delivery company to
          process orders and print waybills.
        </p>
        <p className="ml-5">
          8. After printing, orders are automatically marked as accepted, and
          warehouse staff can use the waybill number for shipping.
        </p>

        <span className="font-bold text-green-500">
          *** Single Order Management:
        </span>
        <p className="ml-5">
          9. Inspect each order in detail before processing and shipping.
        </p>
        <p className="ml-5">
          10. Reprint waybills and access order data for review anytime.
        </p>

        <span className="font-bold text-green-500">*** Data Management:</span>
        <p className="ml-5">
          11. Save sender and receiver information for quicker manual order
          creation.
        </p>
        <p className="ml-5">
          12. Export order data to Excel for record-keeping and reporting.
        </p>
        <p className="ml-5">
          13. Import order data from Excel for easier bulk processing.
        </p>

        <span className="font-bold text-green-500">
          *** Default Delivery Company Settings:
        </span>
        <p className="ml-5">
          14. Set a default express delivery company to streamline the dispatch
          process, removing the need to select a company for each order.
        </p>
      </p>

      <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
      <p>
        {" "}
        HTML,CSS,Tailwind CSS, JavaScript, React js,jwt token, Java Spring Boot,
        MySql and more.
      </p>
      {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
      <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>

      <button
        className="flex"
        onClick={() => handleToLiveLink("https://grozziie.zjweiting.com:57609")}
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          Grozziie Online Printing Live Site:{" "}
          <span className="font-medium ">
            https://grozziie.zjweiting.com:57609/
          </span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/Grozziee-Online-Shop"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Server Site:{" "}
          <span className=" font-medium ">
            https://github.com/S-M-ZUBAYER/Grozziee-Online-Shop (Private)
          </span>
        </p>
      </button>

      <h2 className="text-white mt-12 font-semibold text-3xl">
        Grozziie Online Printing Site Gallery:
      </h2>
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

export default GrozziieOnlinePrinter;
