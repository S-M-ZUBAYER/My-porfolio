// import React, { useState } from "react";
// import { GrLinkPrevious } from "react-icons/gr";
// import img1 from "../../assets/THT/Slider.png";
// import img2 from "../../assets/THT/about.jpg";
// import img3 from "../../assets/THT/footer.png";
// import img4 from "../../assets/THT/chatBoot.png";
// import img5 from "../../assets/THT/QApart.png";
// import img6 from "../../assets/THT/translator.png";
// import img7 from "../../assets/THT/detect.png";
// import img8 from "../../assets/THT/account.png";
// import img9 from "../../assets/THT/calculation.png";
// import img10 from "../../assets/THT/contact1.jpg";
// import img11 from "../../assets/THT/contact2.png";
// import img12 from "../../assets/THT/contact-3.png";
// import img13 from "../../assets/THT/admin.png";
// import img14 from "../../assets/THT/user.png";
// import img15 from "../../assets/THT/qaPage.png";
// import img16 from "../../assets/THT/MHW.png";
// import img17 from "../../assets/THT/w&c.png";
// import img18 from "../../assets/THT/icon.png";
// import img19 from "../../assets/THT/icon2.png";
// import img20 from "../../assets/THT/bg.png";
// import img21 from "../../assets/THT/mall.png";
// import img22 from "../../assets/THT/showProduct2.png";
// import img23 from "../../assets/THT/showProduct-3.png";
// import img24 from "../../assets/THT/showProduct.png";
// import img25 from "../../assets/THT/LocationLogin.jpg";
// import img26 from "../../assets/THT/ChattingUpdate.jpg";
// import ImageModal from "../SharedPage/ImageModal";
// import { Link } from "react-router-dom";

// const THT_Space = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const mainSiteImg = [
//     img25,
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//   ];
//   const adminSiteImg = [
//     img13,
//     img14,
//     img26,
//     img15,
//     img16,
//     img17,
//     img18,
//     img19,
//     img20,
//     img21,
//     img22,
//     img23,
//     img24,
//   ];
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
//     <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
//       <Link
//         to="/"
//         className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200  text-white font-black dark:text-gray-900"
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
//         Customer Management System
//       </h1>
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         A centralized customer service and admin management platform developed
//         for THT-Space Electrical Company Ltd. This system is used by the
//         customer service team and administrators to manage product-related
//         inquiries, store backend data, operate automated and manual customer
//         support, and maintain all product, warehouse, and application-related
//         information in one secure platform.
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Customer Service & Communication:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           1. Dedicated platform for the customer service team and admin users.
//         </p>
//         <p className="ml-5">
//           2. Automated customer service system where customers can directly send
//           messages.
//         </p>
//         <p className="ml-5">
//           3. Supports sending images, videos, icons, and files.
//         </p>
//         <p className="ml-5">
//           4. Manual customer service feature allows agents to ask
//           product-related questions and receive stored answers automatically.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Q&A System Integration:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           5. Integrated Question & Answer system for customers.
//         </p>
//         <p className="ml-5">
//           6. All questions and answers are stored in the backend and displayed
//           in the user’s account for analysis.
//         </p>
//         <p className="ml-5">
//           7. Admin can update and add new question–answer data from this panel.
//         </p>
//         <p className="ml-5">
//           8. Customer service agents can search and respond to inquiries about
//           products, shipping, and company services.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Multilingual Customer Support:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           9. Supports customers from Malaysia, China, Vietnam, the Philippines,
//           and other countries.
//         </p>
//         <p className="ml-5">
//           10. Customer questions are automatically translated into Bengali and
//           English.
//         </p>
//         <p className="ml-5">
//           11. Customer service agents respond in the appropriate customer
//           language.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Shop-wise Q&A Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">12. Each shop has its own dedicated Q&A section.</p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Unknown Question & Answer Analysis:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           13. Unknown questions and incorrect answers are stored for analysis.
//         </p>
//         <p className="ml-5">14. Admin can review and add missing Q&A data.</p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Admin Dashboard & Analytics:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           15. Admin dashboard displays total app users, web users, Android and
//           iOS users.
//         </p>
//         <p className="ml-5">
//           16. Shows mall products, event products, total registrations, and
//           daily logins.
//         </p>
//         <p className="ml-5">
//           17. Displays device usage by country using bar charts.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Multilanguage Translation System:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           18. Built-in multilingual translation system for global customer
//           support.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Smart Address Detection:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           19. Automatically detects and corrects improper customer address
//           formats.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Customer Service Account Dashboard:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           20. Displays total questions, unknown questions, and activity summary
//           for each customer service agent.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Admin Panel Core Features:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           21. Store and manage all company product information.
//         </p>
//         <p className="ml-5">
//           22. Admin can manage users by editing, deleting, or assigning admin
//           roles.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Data Creation & Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           23. Add questions and answers directly into the backend system.
//         </p>
//         <p className="ml-5">
//           24. Add warehouses and cities for different countries for shopping and
//           logistics systems.
//         </p>
//         <p className="ml-5">
//           25. Add product models with PID, CPCL, and ESC modes for Bluetooth and
//           WiFi printers.
//         </p>
//         <p className="ml-5">
//           26. Add product background images by dimension for label design.
//         </p>
//         <p className="ml-5">27. Add icons by dimension for label creation.</p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Mall & Event Product Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           28. Add, update, delete, and display mall products with images,
//           videos, and files.
//         </p>
//         <p className="ml-5">
//           29. Add and display event products with full model-based
//           specifications.
//         </p>
//         <p className="ml-5">
//           30. Store product details categorized by model number for the shopping
//           app.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         App Version Control & Permission System:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           31. Manage Grozziie app version updates with access permissions and
//           package control.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Power Bank & Face Attendance Payment Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           32. Manage power bank features with voltage-based percentage control.
//         </p>
//         <p className="ml-5">
//           33. Manage attendance system packages with employee limits.
//         </p>
//         <p className="ml-5">
//           34. Control payment-based access for attendance features.
//         </p>
//       </p>

//       <h3 className="text-lime-300 mt-4 font-semibold text-xl underline">
//         Contact & Support:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           35. Users can send emails directly through the contact form.
//         </p>
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
//       <p>
//         {" "}
//         HTML,CSS,Tailwind CSS, JavaScript, React js, Node js, Express JS, MySql,
//         OpenAI and more.
//       </p>
//       {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>
//       <button
//         className="flex"
//         onClick={() => handleToLiveLink("https://grozziie.zjweiting.com/")}
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           Live Site:{" "}
//           <span className="font-medium">https://grozziie.zjweiting.com/</span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/THT-Customer-Management-System"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Client Site:{" "}
//           <span className="font-medium">
//             https://github.com/S-M-ZUBAYER/THT-Customer-Management-System
//           </span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           GitHub Server Site:{" "}
//           <span className="font-medium">
//             https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site
//           </span>
//         </p>
//       </button>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Account:</h2>
//       <p className="my-5">
//         Email: <span>sadiarumki00@gmail</span>
//       </p>
//       <p className="my-5">
//         Password: <span>12345678</span>
//       </p>
//       <p className="my-5">
//         NB:{" "}
//         <span>
//           This account don't have the permission to access in the admin route.
//         </span>
//       </p>
//       <h2 className="text-white mt-12 font-semibold text-3xl">Gallery:</h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
//         {mainSiteImg &&
//           mainSiteImg.length > 0 &&
//           mainSiteImg?.map((perImg, index) => {
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
//       <h2 className="text-white mt-12 font-semibold text-3xl">
//         Admin Gallery:
//       </h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
//         {adminSiteImg &&
//           adminSiteImg.length > 0 &&
//           adminSiteImg?.map((perImg, index) => {
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

// export default THT_Space;

import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import THT_SpaceData from "../../Data/THT_SpaceData";

const THT_Space = () => {
  return <DetailsPageFormate data={THT_SpaceData} />;
};

export default THT_Space;
