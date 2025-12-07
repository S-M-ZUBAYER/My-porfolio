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
import img27 from "../../assets/GrozziieOnlinePrinting/Common/AddShop/addShop.png";
import img28 from "../../assets/GrozziieOnlinePrinting/Common/AddShop/shopRedirect.jpg";

import ImageModal from "../SharedPage/ImageModal";
import { Link } from "react-router-dom";

const GrozziieOnlinePrinter = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const AuthenticaionSecurityImg = [img1, img2, img3, img4, img5];
  const languageSupportImg = [img17];
  const DashboardShopIntegrationImg = [img7, img14, img15, img16, img27, img28];
  const TikTokLazadaShopeeImg = [
    img8,
    img9,
    img10,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img12,
    img13,
  ];
  const settingDeliveryImg = [img11];
  const ContactImg = [img6];

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
        A complete multi-platform order management system designed to manage
        user authentication, multi-language support, shop integration, order
        processing, and automated delivery workflows across major e-commerce
        platforms like TikTok, Lazada, and Shopee. The system allows users to
        securely register, manage multiple shops, process orders in real time,
        print waybills in bulk, track shipment statuses, and communicate
        directly through the built-in contact system.
      </p>

      <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        User Authentication & Security:-
      </h3>
      <p className="text-base font-medium">
        <span className="font-bold text-green-500">*** Registration:</span>
        <p className="ml-5">
          1. Users must register using a valid email address.
        </p>
        <p className="ml-5">
          2. An OTP is sent to the registered email to successfully complete the
          registration process.
        </p>

        <span className="font-bold text-green-500">
          *** Password Recovery & Change:
        </span>
        <p className="ml-5">
          3. Users can recover forgotten passwords using their registered email
          with OTP verification.
        </p>
        <p className="ml-5">
          4. Users can change their password using their current password and
          confirm the new password with OTP sent to their email.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {AuthenticaionSecurityImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Authentication"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Multi-Language Support:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          5. The platform supports 7 languages including English, Chinese,
          Malaysian, Indonesian, Vietnamese, Thai, and Filipino.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {languageSupportImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Language Support"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Dashboard & Shop Integration:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          6. Users can add and authorize multiple shops from TikTok, Shopee, and
          Lazada.
        </p>
        <p className="ml-5">
          7. The dashboard displays order counts by platform and status such as
          New, Pending, On the Way, and Delivered.
        </p>
        <p className="ml-5">
          8. Users can navigate directly to specific platform order pages from
          the dashboard cards.
        </p>
        <p className="ml-5">
          9. The dashboard displays analytics and order activity for the last 7
          days using interactive charts.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {DashboardShopIntegrationImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Dashboard Integration"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        TikTok, Lazada & Shopee Order Processing:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          10. Each platform has its own dedicated order management page.
        </p>
        <p className="ml-5">
          11. New orders are displayed separately for each platform.
        </p>
        <p className="ml-5">
          12. Users can accept and pack orders with a single button click.
        </p>
        <p className="ml-5">
          13. Multiple orders can be selected and printed as bulk waybills in
          one click.
        </p>
        <p className="ml-5">
          14. Supports single-field and multi-field searching with date
          range–based order filtering.
        </p>
        <p className="ml-5">
          15. After printing, courier services are automatically notified for
          product pickup.
        </p>
        <p className="ml-5">
          16. Order status updates are tracked step-by-step including Shipped,
          Out for Delivery, and Delivered.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {TikTokLazadaShopeeImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Order Processing"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Settings & Delivery Configuration:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          17. Users can configure delivery types separately for each shopping
          platform.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {settingDeliveryImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Delivery Settings"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Contact & Communication:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          18. Users can send messages directly to the support team via the
          contact form.
        </p>
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
        {ContactImg?.map((perImg, index) => (
          <img
            key={index}
            src={perImg}
            alt="Contact"
            className="cursor-pointer rounded-lg"
            onClick={() => openImageModal(perImg)}
          />
        ))}
      </div>

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
