// import React, { useState } from "react";
// import img1 from "../../assets/wowomart/LonIn.jpg";
// import img2 from "../../assets/wowomart/Register.jpg";
// import img3 from "../../assets/wowomart/dashboard.jpg";
// import img4 from "../../assets/wowomart/CreatedAccount/CreatedAccountList.jpg";
// import img5 from "../../assets/wowomart/CreatedAccount/updateDetailsDeleteDisableCreatedAccount.jpg";
// import img6 from "../../assets/wowomart/Pending Account/pendingAccountList.jpg";
// import img7 from "../../assets/wowomart/Pending Account/PendingUserDetaislAndConfirmCreation.png";
// import img8 from "../../assets/wowomart/DisableAccount/DisableList.jpg";
// import img9 from "../../assets/wowomart/DisableAccount/DisableList.jpg";
// import img10 from "../../assets/wowomart/DisableAccount/Edit,Enable,Deleted.jpg";
// import img11 from "../../assets/wowomart/Coupon/ShowCouponList.jpg";
// import img12 from "../../assets/wowomart/Coupon/CouponDetails.jpg";
// import img13 from "../../assets/wowomart/Coupon/AddPercentageAndMakePercentAccoringToProductPrice.jpg";
// import img14 from "../../assets/wowomart/Coupon/CreateCouponAccordingToCategory.jpg";
// import img15 from "../../assets/wowomart/Coupon/AssignTagCouponForCustomer.jpg";
// import img16 from "../../assets/wowomart/Coupon/CouponUserList.jpg";
// import img17 from "../../assets/wowomart/Coupon/CouponUserDetails.jpg";
// import ImageModal from "../SharedPage/ImageModal";

// const wowomartAllImages = [

// ];

// const ShopCreationImgs = [img1,
//   img2,
//   img3,
//   img7,
//   img8,
// ]
// const UploadApprovalImgs = []
// const AccountExpirationRenewalImgs = [img5,
//   img6,
//   img9,
//   img10,]
// const CouponDiscountImgs = [img11,
//   img12,
//   img13,
// ]
// const SpecialCustomerDiscountImgs = [img14,
//   img15, img16,
//   img17,]

// const WowoMartManagement = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const handleToLiveLink = (link) => {
//     window.open(link, "_blank");
//   };

//   const openImageModal = (imgSrc) => {
//     setSelectedImage(imgSrc);
//     setModalOpen(true);
//   };

//   const closeImageModal = () => {
//     setSelectedImage(null);
//     setModalOpen(false);
//   };

//   return (
//     <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
//       <h1
//         className="text-3xl underline text-center mb-10 font-bold"
//         style={{
//           background: "linear-gradient(90deg, #00FF00, #FFFF00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         WowoMart Multivendor Management System
//       </h1>
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         WowoMart Multivendor Management System is a centralized platform built to manage the
//         seller, shop, and product approval process for the WowoMart e-commerce
//         site (Shopify-based). It ensures a streamlined workflow from shop
//         creation to product listing, account subscription management, and
//         advanced coupon & discount systems for enhanced admin control.
//       </p>

//       <h2 className="text-white font-semibold text-3xl">
//         Key Features:
//         <p className="text-base font-medium">
//           <br />
//           1. Multi-country sellers can apply to create and manage their own shops.
//           <br />
//           2. Admin-controlled product upload and approval system.
//           <br />
//           3. Automated seller account expiration and renewal process.
//           <br />
//           4. Advanced coupon and discount management system.
//         </p>
//       </h2>

//       <h2 className="text-white font-semibold text-3xl mt-10">
//         Detailed Features:
//       </h2>

//       <p className="text-base font-medium my-5">
//         <br />
//         <strong>1. Multi-Country Shop Creation</strong>
//         <br />- Businesses from multiple countries can apply to create a shop on WowoMart.
//         <br />- Shop application requires successful payment verification.
//         <br />- Admin reviews and approves the shop before activation.
//         <br />
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//           {ShopCreationImgs?.map((perImg, index) => (
//             <img
//               key={index}
//               src={perImg}
//               alt="Authentication"
//               className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//               onClick={() => openImageModal(perImg)}
//             />
//           ))}
//         </div>
//         <strong>2. Product Upload & Approval System</strong>
//         <br />- After perfectly account creation sellers can upload products after shop approval.
//         <br />- Admin receives notifications for every new product submission.
//         <br />- Only verified products are published on the WowoMart e-commerce platform.
//         <br />
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//           {UploadApprovalImgs?.map((perImg, index) => (
//             <img
//               key={index}
//               src={perImg}
//               alt="Authentication"
//               className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//               onClick={() => openImageModal(perImg)}
//             />
//           ))}
//         </div>
//         <strong>3. Seller Account Expiration & Renewal</strong>
//         <br />- Seller accounts remain active for a limited subscription period.
//         <br />- Expired accounts are automatically deactivated by the system.
//         <br />- Sellers must renew their subscription through payment to regain access.
//         <br />- Admin also has the authority to manually deactivate any seller account.
//         <br />
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//           {AccountExpirationRenewalImgs?.map((perImg, index) => (
//             <img
//               key={index}
//               src={perImg}
//               alt="Authentication"
//               className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//               onClick={() => openImageModal(perImg)}
//             />
//           ))}
//         </div>
//         <strong>4. Coupon & Discount Management</strong>
//         <br />- Admin can create coupons for specific products or categories.
//         <br />- Targeted discounts can be applied for selected customers.
//         <br />- A complete coupon list with validity and usage details is maintained.
//         <br />- Admin can manually deactivate or close any coupon at any time.
//         <br />
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//           {CouponDiscountImgs?.map((perImg, index) => (
//             <img
//               key={index}
//               src={perImg}
//               alt="Authentication"
//               className="cursor-pointer rounded-lg
//            h-40 sm:h-48 md:h-56 lg:h-64
//            w-auto object-cover"

//               onClick={() => openImageModal(perImg)}
//             />
//           ))}
//         </div>
//         <strong>5. Special Customer Discount System</strong>
//         <br />- A dedicated list of special customers eligible for exclusive discounts.
//         <br />- Admin can view detailed discount information per customer.
//         <br />- Individual customer discounts can be disabled or modified as needed.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {SpecialCustomerDiscountImgs?.map((perImg, index) => (
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

//       <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
//         Technologies:
//       </h2>
//       <p>
//         {" "}
//         HTML,CSS,Tailwind,some CSS components, JavaScript, React js,Firebase,
//         Node js, MongoDB and so on.
//       </p>
//       <h2 className="text-white font-semibold text-3xl mt-5 mb-2">Link:</h2>

//       <button
//         className="flex"
//         onClick={() => handleToLiveLink("https://study-zone-platform.web.app/")}
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           Live Site:{" "}
//           <span className="font-medium ">
//             https://study-zone-platform.web.app/
//           </span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Client Site:{" "}
//           <span className="font-medium ">
//             https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site
//           </span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Server Site:{" "}
//           <span className="font-medium ">
//             https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site
//           </span>
//         </p>
//       </button>

//       <h2 className="text-white font-semibold text-3xl">Gallery:</h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
//         {wowomartAllImages &&
//           wowomartAllImages.length > 0 &&
//           wowomartAllImages?.map((perImg, index) => {
//             return (
//               <img
//                 key={index}
//                 src={perImg}
//                 alt=""
//                 onClick={() => openImageModal(perImg)}
//               />
//             );
//           })}
//       </div>
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

// export default WowoMartManagement;

import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import WowoMartData from "../../Data/WowoMartData";

const WowoMartManagement = () => {
  return <DetailsPageFormate data={WowoMartData} />;
};

export default WowoMartManagement;
