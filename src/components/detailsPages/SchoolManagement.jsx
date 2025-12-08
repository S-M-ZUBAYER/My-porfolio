// import React, { useState } from "react";
// import { GrLinkPrevious } from "react-icons/gr";

// import img1 from "../../assets/Student Management System/site/Banner.jpg";
// import img2 from "../../assets/Student Management System/site/about.jpg";
// import img3 from "../../assets/Student Management System/site/count.jpg";
// import img4 from "../../assets/Student Management System/site/review.jpg";
// import img5 from "../../assets/Student Management System/site/footer.jpg";
// import img6 from "../../assets/Student Management System/site/allStudent.jpg";
// import img7 from "../../assets/Student Management System/site/payment.jpg";
// import img8 from "../../assets/Student Management System/site/result.jpg";
// import img9 from "../../assets/Student Management System/site/activity.jpg";
// import img10 from "../../assets/Student Management System/site/activityDetails.jpg";
// import img11 from "../../assets/Student Management System/site/admission.jpg";
// import img12 from "../../assets/Student Management System/site/atdance.jpg";
// import img13 from "../../assets/Student Management System/site/calender.jpg";
// import img14 from "../../assets/Student Management System/site/classRoutine.jpg";
// import img15 from "../../assets/Student Management System/site/leaveApp.jpg";
// import img16 from "../../assets/Student Management System/site/admissionStatus.jpg";
// import img17 from "../../assets/Student Management System/site/salaryStatus.jpg";
// import img18 from "../../assets/Student Management System/site/notice.jpg";
// import img19 from "../../assets/Student Management System/site/slider.jpg";
// import img20 from "../../assets/Student Management System/site/StudentInfo.jpg";
// import img21 from "../../assets/Student Management System/site/team2.jpg";
// import img22 from "../../assets/Student Management System/site/team.jpg";
// import img23 from "../../assets/Student Management System/site/tcrProfile.jpg";
// import img24 from "../../assets/Student Management System/site/tcrAtnd.jpg";
// import img25 from "../../assets/Student Management System/site/contact.jpg";
// import img26 from "../../assets/Student Management System/admin/addAdmissionInfo.jpg";
// import img27 from "../../assets/Student Management System/admin/addClass.jpg";
// import img28 from "../../assets/Student Management System/admin/addClass.jpg";
// import img29 from "../../assets/Student Management System/admin/addEvent.jpg";
// import img30 from "../../assets/Student Management System/admin/addSalary.jpg";
// import img31 from "../../assets/Student Management System/admin/addStaff.jpg";
// import img32 from "../../assets/Student Management System/admin/addStudent.jpg";
// import img33 from "../../assets/Student Management System/admin/addTermSub.jpg";
// import img34 from "../../assets/Student Management System/admin/allStaff.jpg";
// import img35 from "../../assets/Student Management System/admin/allStudent.jpg";
// import img36 from "../../assets/Student Management System/admin/atnd.jpg";
// import img37 from "../../assets/Student Management System/admin/calenderData.jpg";
// import img38 from "../../assets/Student Management System/admin/certificate.jpg";
// import img39 from "../../assets/Student Management System/admin/dashboard.jpg";
// import img40 from "../../assets/Student Management System/admin/notice.jpg";
// import img41 from "../../assets/Student Management System/admin/noticeInput.jpg";
// import img42 from "../../assets/Student Management System/admin/payment.jpg";
// import img43 from "../../assets/Student Management System/admin/paymentInput.jpg";
// import img44 from "../../assets/Student Management System/admin/paymentSumery.jpg";
// import img45 from "../../assets/Student Management System/admin/result.jpg";
// import img46 from "../../assets/Student Management System/admin/setTime.jpg";
// import img47 from "../../assets/Student Management System/admin/showAdmission.jpg";
// import img49 from "../../assets/Student Management System/admin/showSalary.jpg";
// import img50 from "../../assets/Student Management System/admin/showTermSub.jpg";
// import img51 from "../../assets/Student Management System/admin/siteManagement.jpg";
// import img52 from "../../assets/Student Management System/admin/stdId.jpg";
// import img53 from "../../assets/Student Management System/admin/tcrId.jpg";
// import ImageModal from "../SharedPage/ImageModal";
// import { Link } from "react-router-dom";

// const SchoolManagement = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const AdmissionApplicationImgs = [img11, img16, img52];
//   const ProfileAcademicImgs = [img20, img8, img12, img14];
//   const InformationActivitiesImgs = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img13,
//     img23,
//     img9,
//     img10,
//     img18,
//     img21,
//     img22,
//   ];
//   const PaymentsLeaveImgs = [img25, img7, img15];
//   const IDCardIdentityImgs = [img52, img53, img37, img29];
//   const NoticeNewsWebsiteImgs = [img39, img26, img40, img51, img41];
//   const StudentttendanceImgs = [
//     img47,
//     img31,
//     img32,
//     img35,
//     img46,
//     img24,
//     img36,
//     img42,
//     img43,
//     img27,
//   ];
//   const AcademicResultImgs = [img33, img50, img38, img45];
//   const FeesSalaryStaffImgs = [img30, img44, img49, img34];

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
//     <div className=" relative w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
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
//         Astha School Management System
//       </h1>
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         Astha School Management System is a complete digital solution designed
//         for students, teachers, and school administrators. It eliminates
//         traditional paper-based processes and transforms school operations into
//         a fully automated online system. From student admission and attendance
//         tracking to result publishing and salary management, all academic and
//         administrative activities are handled digitally. A unique feature of
//         this platform is its multi-school architecture, which allows the system
//         to be cloned and customized for multiple schools. Each school operates
//         as a fully independent and unique website. The platform consists of
//         three core components: a public school website for students and parents,
//         an admin panel for management and data control, and a mobile app for
//         teachers to manage attendance and results remotely.
//       </p>
//       <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

//       {/* ---------------- STUDENT & PARENT PORTAL ---------------- */}

//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         Student & Parent Portal
//       </h3>

//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Admission & Application
//       </h4>
//       <p className="text-base font-medium ml-5">
//         1. Online admission notice, eligibility & requirements. <br />
//         2. Students can apply for admission online. <br />
//         3. Online admission fee payment supported. <br />
//         4. Auto-generated admit cards after approval. <br />
//         5. Real-time admission status tracking.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AdmissionApplicationImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Student Profile & Academic Access
//       </h4>
//       <p className="text-base font-medium ml-5">
//         6. Personal student profile creation. <br />
//         7. Online result publication & access. <br />
//         8. Daily attendance visibility. <br />
//         9. Online class routine & PDF download.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {ProfileAcademicImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ School Information & Activities
//       </h4>
//       <p className="text-base font-medium ml-5">
//         10. School activities & events gallery. <br />
//         11. Parent review & feedback system with admin moderation. <br />
//         12. Academic calendar with event tracking. <br />
//         13. School management, teachers & staff profile display.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {InformationActivitiesImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Payments & Leave
//       </h4>
//       <p className="text-base font-medium ml-5">
//         14. Student payment status & online payments. <br />
//         15. Student & teacher online leave application. <br />
//         16. Emergency leave reporting.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {PaymentsLeaveImgs?.map((perImg, index) => (
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
//       {/* ---------------- ADMIN PANEL ---------------- */}

//       <h3 className="text-lime-300 mt-8 font-semibold text-xl underline">
//         Admin Panel Dashboard
//       </h3>

//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ ID Card, Event Creation & Calender System
//       </h4>
//       <p className="text-base font-medium ml-5">
//         17. Multi-template ID card generator for students, teachers, and staff
//         with multiple design options. <br />
//         18. Auto-generate ID cards from minimal input data (bulk generation
//         supported). <br />
//         19. Yearly academic calendar generator with configurable weekends,
//         custom holidays, special days, and exam date scheduling. <br />
//         20. New events and special activities can be created and published on
//         the school website, such as sports events, annual picnics, cultural
//         programs, and other special occasions.
//       </p>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {IDCardIdentityImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Notice, News & Website Control
//       </h4>
//       <p className="text-base font-medium ml-5">
//         19. Notice publishing system. <br />
//         20. Homepage news slider control. <br />
//         21. About section, banner & slider customization. <br />
//         22. School activities publishing.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {NoticeNewsWebsiteImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Student & Attendance Management
//       </h4>
//       <p className="text-base font-medium ml-5">
//         23. Student list filtering by class, section, shift & name. <br />
//         24. Teacher-submitted attendance with SMS alerts. <br />
//         25. Student profile with results, attendance & payments. <br />
//         26. Student record edit & deletion.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {StudentttendanceImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Academic & Result Processing
//       </h4>
//       <p className="text-base font-medium ml-5">
//         27. Exam term & subject creation. <br />
//         28. Automatic result calculation with GPA & grades. <br />
//         29. Class routine generator. <br />
//         30. Certificate generation (Transfer, Character, Completion).
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {AcademicResultImgs?.map((perImg, index) => (
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
//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Fees, Salary & Staff Control
//       </h4>
//       <p className="text-base font-medium ml-5">
//         31. Class-wise yearly fee configuration. <br />
//         32. Staff salary & employment management. <br />
//         33. Teacher & staff salary publishing. <br />
//         34. Teacher attendance schedule configuration.
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {FeesSalaryStaffImgs?.map((perImg, index) => (
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
//       {/* ---------------- TEACHER MOBILE APP ---------------- */}

//       <h3 className="text-lime-300 mt-8 font-semibold text-xl underline">
//         Teacher Mobile Application
//       </h3>

//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Attendance & Reporting
//       </h4>
//       <p className="text-base font-medium ml-5">
//         35. Mobile-based student attendance system. <br />
//         36. Real-time attendance synchronization. <br />
//         37. Parent SMS alerts for absentee students.
//       </p>

//       <h4 className="text-yellow-300 mt-3 font-semibold text-lg">
//         ➤ Result Entry & Student Monitoring
//       </h4>
//       <p className="text-base font-medium ml-5">
//         38. Term-wise and subject-wise result entry. <br />
//         39. Auto GPA & grade calculation. <br />
//         40. Full student academic profile view.
//       </p>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Technologies:</h2>
//       <p>
//         {" "}
//         HTML,CSS,Tailwind CSS, JavaScript, React js, Node js,jwt token, Express
//         JS, Mongoose, MongoDB and more.
//       </p>
//       {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
//       <h2 className="text-white mt-12 font-semibold text-3xl">Link:</h2>

//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://astha-education-management-system.netlify.app/Kamalapur%20High%20School"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           School Website Live Site:{" "}
//           <span className="font-medium ">
//             https://astha-education-management-system.netlify.app/Kamalapur%20High%20School
//           </span>
//         </p>
//       </button>
//       <button
//         className="flex"
//         onClick={() =>
//           handleToLiveLink(
//             "https://astha-education-management-amin-panel.netlify.app/Kamalapur%20High%20School/admin"
//           )
//         }
//       >
//         <p className="my-3 text-blue-600 font-bold text-lg">
//           Admin Panel Live Site:{" "}
//           <span className=" font-medium ">
//             https://astha-education-management-amin-panel.netlify.app/Kamalapur%20High%20School/admin
//           </span>
//         </p>
//       </button>

//       <h2 className="text-white mt-12 font-semibold text-3xl">Account:</h2>
//       <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
//         Admin:-
//       </h3>
//       <p className="my-5">
//         Email: <span>sm@gmail.com</span>
//       </p>
//       <p className="my-5">
//         Password: <span>123456</span>
//       </p>

//       <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
//         Teacher:-
//       </h3>
//       <p className="my-5">
//         Email: <span>kamalapur@gmail.com </span>
//       </p>
//       <p className="my-5">
//         Password: <span>123456</span>
//       </p>

//       <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
//         Student:-
//       </h3>
//       <p className="my-5">
//         Email: <span>sayed@gmail.com </span>
//       </p>
//       <p className="my-5">
//         Password: <span>123456</span>
//       </p>
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

// export default SchoolManagement;

import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import SchoolManagementSystemData from "../../Data/SchoolManagementSystemData";

const SchoolManagement = () => {
  return <DetailsPageFormate data={SchoolManagementSystemData} />;
};

export default SchoolManagement;
