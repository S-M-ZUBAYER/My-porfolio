// import React, { useState } from "react";
// import { GrLinkPrevious } from "react-icons/gr";
// import { Link } from "react-router-dom";

// import img1 from "../../assets/Grozziee/splash.jpg";
// import img2 from "../../assets/Grozziee/Login.jpg";
// import img3 from "../../assets/Grozziee/Dashboard.jpg";
// import img4 from "../../assets/Grozziee/Download.jpg";
// import img5 from "../../assets/Grozziee/Document.jpg";
// import img6 from "../../assets/Grozziee/SelectDocument.jpg";
// import img7 from "../../assets/Grozziee/SelectPrinter.jpg";
// import img8 from "../../assets/Grozziee/LabelModels.jpg";
// import img9 from "../../assets/Grozziee/CloseDashbord.jpg";
// import img10 from "../../assets/Grozziee/CreateTemplate.jpg";
// import img11 from "../../assets/Grozziee/ProductShow.jpg";
// import img12 from "../../assets/Grozziee/CustomerCareSupport.jpg";
// import img13 from "../../assets/Grozziee/SmsWithCustomerService.jpg";
// import img14 from "../../assets/Grozziee/Shop.jpg";
// import img15 from "../../assets/Grozziee/ProductVideo.jpg";
// import img16 from "../../assets/Grozziee/ServerSaveTemplate.jpg";

// import ImageModal from "../SharedPage/ImageModal";

// const GrozzieeApp = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const AuthImgs = [img1, img2];
//   const DashboardImgs = [img3, img9];
//   const TemplateImgs = [img5, img6, img7, img8, img10, img16];
//   const ProductImgs = [img11, img14];
//   const SupportImgs = [img12, img13];
//   const VideoImgs = [img15];
//   const DownloadImgs = [img4];

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
//     <div className="w-full py-24 sm:px-5 md:px-48 bg-gradient-to-r from-black via-blue-900 to-black text-white">
//       <Link
//         to="/"
//         className="absolute left-5 top-24 px-5 py-1 rounded text-3xl bg-yellow-400 text-black font-black"
//       >
//         <GrLinkPrevious />
//       </Link>

//       <h1
//         className="text-3xl underline text-center mb-10 font-bold"
//         style={{
//           background: "linear-gradient(90deg, #00FF00, #FFFF00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Grozziee App Backend System
//       </h1>

//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         A complete backend-powered mobile printing solution for Grozziie thermal
//         and dot printers. Users can design templates, print documents, purchase
//         products, and communicate with customer support through the app.
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

//       {/* AUTH */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         User Authentication System
//       </h3>
//       <p className="ml-5">
//         1. API-based user registration and secure login system. <br />
//         2. User session management with verified access control.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AuthImgs?.map((perImg, index) => (
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
//       {/* DASHBOARD */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Application Dashboard
//       </h3>
//       <p className="ml-5">
//         3. Central control dashboard for managing printing activity. <br />
//         4. Live document processing and printer status control.
//       </p>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {DashboardImgs?.map((perImg, index) => (
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
//       {/* TEMPLATE */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Template & Label Design System
//       </h3>
//       <p className="ml-5">
//         5. Backend-driven widget-based template builder. <br />
//         6. Background image, emoji & label model support. <br />
//         7. Server-side template save system.
//       </p>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {TemplateImgs?.map((perImg, index) => (
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

//       {/* PRODUCTS */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Product & E-Commerce System
//       </h3>
//       <p className="ml-5">
//         8. Dynamic product listing and purchasing system. <br />
//         9. Festival-based product offers and discounts supported.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {ProductImgs?.map((perImg, index) => (
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

//       {/* SUPPORT */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Customer Support System
//       </h3>
//       <p className="ml-5">
//         10. Live chat-based customer care and SMS-based support.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {SupportImgs?.map((perImg, index) => (
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
//       {/* VIDEO */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Instructional Video System
//       </h3>
//       <p className="ml-5">11. Product usage and training videos for users.</p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {VideoImgs?.map((perImg, index) => (
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
//       {/* DOWNLOAD */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         App Download System
//       </h3>
//       <p className="ml-5">12. App download and version management system.</p>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {DownloadImgs?.map((perImg, index) => (
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

//       {/* TECHNOLOGY */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
//       <p>Node.js, Express.js, MySQL, REST API, Cloud Storage</p>

//       {/* LINKS */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Links:</h2>

//       <button
//         onClick={() =>
//           handleToLiveLink("https://fb.watch/pzpPjVZ-NC/?mibextid=Nif5oz")
//         }
//       >
//         <p className="text-blue-400 font-bold">App Instruction Video</p>
//       </button>

//       <button
//         onClick={() =>
//           handleToLiveLink(
//             "https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site"
//           )
//         }
//       >
//         <p className="text-blue-400 font-bold">GitHub Server</p>
//       </button>

//       {/* MODAL */}
//       {isModalOpen && (
//         <ImageModal imgSrc={selectedImage} onClose={closeImageModal} />
//       )}
//     </div>
//   );
// };

// export default GrozzieeApp;

import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import GrozzieeAppData from "../../Data/GrozzieeAppData";

const GrozzieeApp = () => {
  return <DetailsPageFormate data={GrozzieeAppData} />;
};

export default GrozzieeApp;
