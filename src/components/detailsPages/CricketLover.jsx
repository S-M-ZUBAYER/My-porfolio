// import React, { useState } from "react";
// import { GrLinkPrevious } from "react-icons/gr";
// import img1 from "../../assets/CricketLover/banner.jpg";
// import img2 from "../../assets/CricketLover/category.png";
// import img3 from "../../assets/CricketLover/productAdd.jpg";
// import img4 from "../../assets/CricketLover/productCategory.jpg";
// import img5 from "../../assets/CricketLover/login.jpg";
// import img6 from "../../assets/CricketLover/footer.jpg";
// import img7 from "../../assets/CricketLover/contact.png";
// import img8 from "../../assets/CricketLover/blog.jpg";

// import img9 from "../../assets/CricketLover/dashboard/AllUser.jpg";
// import img10 from "../../assets/CricketLover/dashboard/allBuyer.jpg";
// import img11 from "../../assets/CricketLover/dashboard/allSeller.jpg";

// import img12 from "../../assets/CricketLover/dashboard/MyOrderlist.jpg";
// import img13 from "../../assets/CricketLover/dashboard/wishlist.jpg";

// import img14 from "../../assets/CricketLover/dashboard/addNewProduct.jpg";
// import img15 from "../../assets/CricketLover/dashboard/MyProducts.jpg";

// import img16 from "../../assets/CricketLover/dashboard/paymentPage.jpg";
// import img17 from "../../assets/CricketLover/dashboard/paymentCompleted.jpg";
// import ImageModal from "../SharedPage/ImageModal";
// import { Link } from "react-router-dom";
// const CricketLover = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const BuyerSellerImgs = [img1, img4, img14,];
//   const ProductAdvertisement = [img2];
//   const AuthenticationSecurity = [img5, img3,];
//   const AdminMonitoringControl = [img9, img10];
//   const AdminDashboard = [img11];
//   const WishlistOrder = [img12, img13];
//   const PaymentSystem = [img16, img17];
//   const SellerDashboard = [img14, img15];
//   const HomePageCategories = [img6, img7, img11];

//   const openImageModal = (imgSrc) => {
//     setSelectedImage(imgSrc);
//     setModalOpen(true);
//   };

//   const closeImageModal = () => {
//     setSelectedImage(null);
//     setModalOpen(false);
//   };

//   const handleToLiveLink = (link) => {
//     window.open(link, "_blank");
//   };

//   return (
//     <div className="w-full py-24 sm:px-5 md:px-48 relative  bg-gradient-to-r from-black via-blue-900 to-black text-white">
//       <Link
//         to="/"
//         className="absolute left-3 top-24
//       xs:left-5 xs:top-24 xs:px-3
//       sm:left-5 sm:top-24 sm:px-4
//       md:left-48 md:top-24 md:px-5
//       px-5 py-1 rounded text-3xl bg-gradient-to-r from-green-600 to-cyan-400
//   text-white font-black dark:text-gray-900"
//       >
//         <GrLinkPrevious></GrLinkPrevious>
//       </Link>
//       <h1
//         className="text-3xl underline text-center mb-10 font-bold"
//         style={{
//           background: "linear-gradient(90deg, #00FF00, #FFFF00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Cricket Lover
//       </h1>
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         A complete buying and selling platform for used cricket playing
//         instruments. This website helps cricket lovers purchase quality cricket
//         equipment at affordable prices while allowing sellers to easily list,
//         advertise, and sell their products through a secure and user-friendly
//         digital marketplace.
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Buyer & Seller Marketplace:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           1. Cricket instrument sellers can easily list and sell their products.
//         </p>
//         <p className="ml-5">
//           2. Cricket lovers can browse and buy products at affordable prices.
//         </p>
//         <p className="ml-5">
//           3. Buyers can select any product and complete the purchase securely.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {BuyerSellerImgs?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Product Advertisement System:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           4. Sellers can advertise their products on the home page.
//         </p>
//         <p className="ml-5">
//           5. Advertised products are displayed prominently on the homepage.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {ProductAdvertisement?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Authentication & Security:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           6. Firebase Authentication is used for secure user registration and
//           login.
//         </p>
//         <p className="ml-5">
//           7. Only verified users can access selling and buying features.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AuthenticationSecurity?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Admin Monitoring & Control:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">8. Admin can monitor the entire website.</p>
//         <p className="ml-5">9. Admin can verify sellers.</p>
//         <p className="ml-5">
//           10. Admin can delete seller and buyer accounts when necessary.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AdminMonitoringControl?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Admin Dashboard:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           11. Admin can view all users, buyers, and sellers in one dashboard.
//         </p>
//         <p className="ml-5">
//           12. Admin can edit, delete, and authorize any seller.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AdminDashboard?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Wishlist & Order Features:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">13. Buyers can save products to their wishlist.</p>
//         <p className="ml-5">
//           14. Buyers can purchase products directly from the platform.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {WishlistOrder?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Payment System:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           15. Secure online payments are supported using the Stripe payment
//           gateway.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {PaymentSystem?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Seller Dashboard:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">16. Sellers can add new products at any time.</p>
//         <p className="ml-5">
//           17. Sellers can view all their products with status such as Available,
//           Advertised, and Sold.
//         </p>
//         <p className="ml-5">
//           18. Sellers can advertise products, mark products as sold, and delete
//           product listings.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {SellerDashboard?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Home Page & Categories:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           19. Users can view available product categories on the home page.
//         </p>
//         <p className="ml-5">
//           20. All advertised products are displayed on the homepage.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {HomePageCategories?.map((perImg, index) => (
//           <img
//             key={index}
//             src={perImg}
//             alt="Authentication"
//             className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//             onClick={() => openImageModal(perImg)}
//           />
//         ))}
//       </div>
//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Technology Stack:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           21. Built with HTML, CSS, Tailwind CSS, JavaScript, and React.js.
//         </p>
//         <p className="ml-5">
//           22. Backend powered by Node.js, MongoDB, and JWT authentication.
//         </p>
//         <p className="ml-5">
//           23. Stripe is used for secure online payment processing.
//         </p>
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
//       <p>
//         {" "}
//         HTML,CSS,Tailwind,some CSS components, JavaScript, React js, Node js,
//         MondgoDB, stripe for payment and so on.
//       </p>
//       {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink("https://cricket-lover-point.netlify.app/")
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           Live Site:{" "}
//           <span className="font-medium">
//             https://cricket-lover-point.netlify.app/
//           </span>
//         </p>
//       </button>

//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Client Site:{" "}
//           <span className="font-medium">
//             https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site
//           </span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Server Site:{" "}
//           <span className="font-medium">
//             https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site
//           </span>
//         </p>
//       </button>
//       {isModalOpen && (
//         <ImageModal
//           imgSrc={selectedImage}
//           alt="Guitar"
//           onClose={closeImageModal} // Close the modal when the "Close" button is clicked
//         />
//       )}
//     </div>
//   );
// };

// export default CricketLover;

// src/pages/FaceAttendancePage.jsx
import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import CricketLoverData from "../../Data/CricketLoverData.js";

const CricketLover = () => {
  return <DetailsPageFormate data={CricketLoverData} />;
};

export default CricketLover;
