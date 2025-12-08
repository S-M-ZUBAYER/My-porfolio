// import React, { useState } from "react";
// import { GrLinkPrevious } from "react-icons/gr";
// import { Link } from "react-router-dom";
// import ImageModal from "../SharedPage/ImageModal";

// // Import images
// import img1 from "../../assets/Export Import Systme/Login.png";
// import img2 from "../../assets/Export Import Systme/Registration.png";
// import img3 from "../../assets/Export Import Systme/HomePage.jpg";
// import img4 from "../../assets/Export Import Systme/CardHomePage.jpg";
// import img5 from "../../assets/Export Import Systme/addProduct.jpg";
// import img6 from "../../assets/Export Import Systme/AddBrand.jpg";
// import img7 from "../../assets/Export Import Systme/Transport way.jpg";
// import img8 from "../../assets/Export Import Systme/country&port.jpg";
// import img9 from "../../assets/Export Import Systme/FinalExportCheck.jpg";
// import img10 from "../../assets/Export Import Systme/ProductData.jpg";
// import img11 from "../../assets/Export Import Systme/Palletizing.jpg";
// import img12 from "../../assets/Export Import Systme/Print palletizing.jpg";
// import img13 from "../../assets/Export Import Systme/dashboard.jpg";
// import img14 from "../../assets/Export Import Systme/Export quantity.jpg";
// import img15 from "../../assets/Export Import Systme/AddCharge.jpg";
// import img16 from "../../assets/Export Import Systme/ExportInitailData.jpg";
// import img17 from "../../assets/Export Import Systme/C&F Level.jpg";
// import img18 from "../../assets/Export Import Systme/financialExport.jpg";
// import img19 from "../../assets/Export Import Systme/FinalExportDetails.jpg";
// import img20 from "../../assets/Export Import Systme/FinalDataList.jpg";
// import img21 from "../../assets/Export Import Systme/FinanceList.jpg";
// import img22 from "../../assets/Export Import Systme/Finance Details and reject.jpg";
// import img23 from "../../assets/Export Import Systme/FinalDataDetails.jpg";
// import img24 from "../../assets/Export Import Systme/finalDataPdf.jpg";
// import img25 from "../../assets/Export Import Systme/UserCreateSideNavbar.jpg";
// import img26 from "../../assets/Export Import Systme/AdminPage.jpg";

// const ExportImportSystem = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Image arrays by role/feature
//   const adminImg = [img1, img2, img25, img26];
//   const finalDataImg = [img20, img23, img24];
//   const productManagerImg = [
//     img5,
//     img6,
//     img7,
//     img8,
//     img10,
//     img11,
//     img12,
//     img13,
//     img14,
//   ];
//   const commercialManagerImg = [img15, img17, img16, img18, img19];
//   const financeImg = [img9, img22, img21];

//   // Modal handlers
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
//     <div className="relative w-full py-24 sm:px-5 md:px-48 bg-gradient-to-r from-black via-blue-900 to-black text-white">
//       <Link
//         to="/"
//         className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200 text-white font-black dark:text-gray-900"
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
//         Export-Import System Overview
//       </h1>

//       {/* Overview Section */}
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         This Export-Import Management System streamlines the process of product
//         export for THT-Space Electrical Company Ltd. It enables Product Managers
//         to add and manage product details, handle palletizing data, and set up
//         shipments. Commercial Managers review export information, manage C&F
//         charges, and finalize export data. Finance teams verify, process
//         payments, and maintain financial records for each export. The system
//         also supports real-time tracking, document uploads, and automated
//         workflow, enhancing efficiency across departments. With role-based
//         access, it ensures smooth coordination and secure data handling for
//         seamless international trade operations.
//       </p>

//       {/* Roles and Responsibilities */}
//       <h2 className="text-white font-semibold text-3xl mt-12">
//         User Roles and Responsibilities
//       </h2>

//       {/* Product Manager */}
//       <div className="my-10">
//         <h3 className="text-lime-300 font-semibold text-2xl">
//           1. Product Manager
//         </h3>
//         <p>
//           <strong>Key Responsibilities:</strong> Product setup, managing
//           palletizing data, entry of export data.
//         </p>
//         <ul className="ml-5 list-disc">
//           <li>
//             Create and Manage Products: Add new products, including brand names,
//             product specifications, model, weight, and export quantity.
//           </li>
//           <li>
//             Palletizing Data: Input and print dates on pallets according to
//             country format and export specifications.
//           </li>
//           <li>
//             Export Data Entry: Input product export data with assigned dates,
//             tracking numbers, and related shipment details.
//           </li>
//           <li>
//             Transportation and Carrier Setup: Define new transportation methods,
//             add countries/ports, assign charges, and set up C&F levels.
//           </li>
//         </ul>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {productManagerImg.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => openImageModal(img)}
//               className="cursor-pointer rounded-lg hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Commercial Manager */}
//       <div className="my-10">
//         <h3 className="text-lime-300 font-semibold text-2xl">
//           2. Commercial Manager
//         </h3>
//         <p>
//           <strong>Key Responsibilities:</strong> Oversight of export
//           information, C&F charges, and final data checks.
//         </p>
//         <ul className="ml-5 list-disc">
//           <li>
//             Review Export Information: Assess and update export details entered
//             by the Product Manager.
//           </li>
//           <li>
//             Manage C&F Commission and Charges: Add/manage commission levels and
//             carrier charges.
//           </li>
//           <li>
//             Export Data Finalization: Approve and finalize all export data for
//             finance verification.
//           </li>
//         </ul>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {commercialManagerImg.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => openImageModal(img)}
//               className="cursor-pointer rounded-lg hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Finance */}
//       <div className="my-10">
//         <h3 className="text-lime-300 font-semibold text-2xl">3. Finance</h3>
//         <p>
//           <strong>Key Responsibilities:</strong> Verification, payment, and
//           record-keeping of export financial data.
//         </p>
//         <ul className="ml-5 list-disc">
//           <li>
//             Finance Data Entry and Review: Verify export data, calculate costs,
//             process payments.
//           </li>
//           <li>
//             Upload Financial Documents: Attach images/documents as needed.
//           </li>
//           <li>
//             Return for Corrections: Send data back for corrections if necessary.
//           </li>
//           <li>
//             Final Data Review: Finalize verified data for storage/searchable
//             access.
//           </li>
//         </ul>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {financeImg.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => openImageModal(img)}
//               className="cursor-pointer rounded-lg hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Admin Module */}
//       <div className="my-10">
//         <h3 className="text-lime-300 font-semibold text-2xl">
//           4. Admin Module
//         </h3>
//         <ul className="ml-6 list-disc space-y-2">
//           <li>Create/manage user accounts and assign roles.</li>
//           <li>Activate/deactivate/remove users.</li>
//           <li>Monitor system activity and performance.</li>
//         </ul>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {adminImg.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => openImageModal(img)}
//               className="cursor-pointer rounded-lg hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Final Data Access */}
//       <div className="my-10">
//         <h3 className="text-lime-300 font-semibold text-2xl">
//           Final Data Access
//         </h3>
//         <p>
//           Searchable data table showing export records accessible to all users.
//         </p>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {finalDataImg.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => openImageModal(img)}
//               className="cursor-pointer rounded-lg hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Technologies & Links */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
//       <p>
//         HTML, CSS, Tailwind CSS, JavaScript, React, JWT, Java Spring Boot,
//         MySQL, and more.
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Live Link:</h2>
//       <a href="https://example.com" className="text-blue-500 underline">
//         https://grozziie.zjweiting.com:3090/
//       </a>

//       {/* Image Modal */}
//       {isModalOpen && (
//         <ImageModal
//           imgSrc={selectedImage}
//           alt="Export Import System Gallery"
//           onClose={closeImageModal}
//         />
//       )}
//     </div>
//   );
// };

// export default ExportImportSystem;


import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import ExportImportSystemData from "../../Data/ExportImportSystemData";

const CricketLover = () => {
  return <DetailsPageFormate data={ExportImportSystemData} />;
};

export default CricketLover;
