import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import img1 from "../../assets/CricketLover/banner.jpg";
import img2 from "../../assets/CricketLover/category.png";
import img3 from "../../assets/CricketLover/productAdd.jpg";
import img4 from "../../assets/CricketLover/productCategory.jpg";
import img5 from "../../assets/CricketLover/login.jpg";
import img6 from "../../assets/CricketLover/footer.jpg";
import img7 from "../../assets/CricketLover/contact.png";
import img8 from "../../assets/CricketLover/blog.jpg";

import img9 from "../../assets/CricketLover/dashboard/AllUser.jpg";
import img10 from "../../assets/CricketLover/dashboard/allBuyer.jpg";
import img11 from "../../assets/CricketLover/dashboard/allSeller.jpg";

import img12 from "../../assets/CricketLover/dashboard/MyOrderlist.jpg";
import img13 from "../../assets/CricketLover/dashboard/wishlist.jpg";

import img14 from "../../assets/CricketLover/dashboard/addNewProduct.jpg";
import img15 from "../../assets/CricketLover/dashboard/MyProducts.jpg";

import img16 from "../../assets/CricketLover/dashboard/paymentPage.jpg";
import img17 from "../../assets/CricketLover/dashboard/paymentCompleted.jpg";
import ImageModal from "../SharedPage/ImageModal";
import { Link } from "react-router-dom";
const CricketLover = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const mainImg = [img1, img2, img3, img4, img5, img6, img7, img8];
  const adminImg = [img9, img10, img11];
  const buyerImg = [img12, img13, img16, img17];

  const sellerImg = [img14, img15];

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
    <div className="w-full py-24 sm:px-5 md:px-48 relative  bg-gradient-to-r from-black via-blue-900 to-black text-white">
      <Link
        to="/"
        className="absolute left-3 top-24  
      xs:left-5 xs:top-24 xs:px-3 
      sm:left-5 sm:top-24 sm:px-4
      md:left-48 md:top-24 md:px-5
      px-5 py-1 rounded text-3xl bg-gradient-to-r from-green-600 to-cyan-400
  text-white font-black dark:text-gray-900"
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
        Cricket Lover
      </h1>
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">
        A site to buying & selling platform for used cricket playing
        instruments.This site will help the crazy cricket lover to got the
        cricket instruments with low price...
      </p>
      <h2 className="text-white mt-12 font-semibold text-3xl">
        Key Features:
        <p className="text-base font-medium">
          <br />
          1. In this website All cricket instruments seller can easily sell
          their products.
          <br />
          2. In this website All crazy cricket lover can easily buy their
          products.
          <br />
          3. Seller can easily add their products and advertise their new
          collection in home page.
          <br />
          4. Buyer can easily chose any product and buy their necessary
          products.
          <br />
          5. Admin can monitoring this site , he has the ability to verify the
          seller and able delete the seller and buyer account.
          <br />
          6. This ia a single page application.
          <br />
          7. I use firebase authentication system to register user and login.
          <br />
          8. In Home page any user can see the available product category.
          <br />
          9. Sell can add their product to advertisement. These product will
          show in the HomePage.
          <br />
          10. Sell can add their product to advertisement. These product will
          show in the HomePage.
          <br />
          11. User can check which product seller are authorized by the admin
          and which are not the authorized person easily. .
          <br />
          12. In admin dashboard a admin can easily check all user, all buyer
          and all seller list and admin can edit and delete these any person
          easily.
          <br />
          13. Admin can make a seller authorized easily .
          <br />
          14. As a buyer any user can buy any product from this site.
          <br />
          15. As a buyer any user can save a product as a wishlist from this
          site.
          <br />
          16. Here any buy can pay to buy the product in online. Here i user
          Stipe payment system.
          <br />
          16. A seller can easily add a new product to buy.
          <br />
          16. In seller dashboard there also all seller product will be show
          with the current status. Such as sold, Advertised, Advertise.
          <br />
          17. In seller dashboard any seller can add any product as advertise
          team and also show sold if any product have already sold. and also
          seller can delete their product information.
          <br />
          7. I use HTML,CSS,Tailwind,some CSS components, JavaScript, React js,
          Jwt Token Node js, MondgoDB, stripe for payment etc.
        </p>
      </h2>
      <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
      <p>
        {" "}
        HTML,CSS,Tailwind,some CSS components, JavaScript, React js, Node js,
        MondgoDB, stripe for payment and so on.
      </p>
      {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
      <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink("https://cricket-lover-point.netlify.app/")
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          Live Site:{" "}
          <span className="font-medium">
            https://cricket-lover-point.netlify.app/
          </span>
        </p>
      </button>

      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Client Site:{" "}
          <span className="font-medium">
            https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site
          </span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Server Site:{" "}
          <span className="font-medium">
            https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site
          </span>
        </p>
      </button>
      <h2 className="text-white mt-12 font-semibold text-3xl">Gallery:</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {mainImg &&
          mainImg.length > 0 &&
          mainImg?.map((perImg, index) => {
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
        {adminImg &&
          adminImg.length > 0 &&
          adminImg?.map((perImg, index) => {
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
        Buyer Gallery:
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {buyerImg &&
          buyerImg.length > 0 &&
          buyerImg?.map((perImg, index) => {
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
        Seller Gallery:
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {sellerImg &&
          sellerImg.length > 0 &&
          sellerImg?.map((perImg, index) => {
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

export default CricketLover;
