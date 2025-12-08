// import React, { useState } from "react";
// import img1 from "../../assets/TaskManagementSystem/login.jpg";
// import img3 from "../../assets/TaskManagementSystem/Employee/addNewEmpoyee.jpg";
// import img4 from "../../assets/TaskManagementSystem/Employee/EditEmployee.jpg";
// import img5 from "../../assets/TaskManagementSystem/Employee/removeAndDisableEmpoyee.jpg";
// import img6 from "../../assets/TaskManagementSystem/dashboard/dashboard.jpg";
// import img7 from "../../assets/TaskManagementSystem/dashboard/task details.jpg";
// import img8 from "../../assets/TaskManagementSystem/dashboard/upload resource.jpg";
// import img9 from "../../assets/TaskManagementSystem/dashboard/upload test report.jpg";
// import img10 from "../../assets/TaskManagementSystem/project/createProject.jpg";
// import img11 from "../../assets/TaskManagementSystem/project/projectList.jpg";
// import img12 from "../../assets/TaskManagementSystem/project/createtask.jpg";
// import img13 from "../../assets/TaskManagementSystem/project/ProjectWiseTask.jpg";
// import img14 from "../../assets/TaskManagementSystem/project/taskDetails.jpg";
// import img15 from "../../assets/TaskManagementSystem/project/taskListUnderAproject.jpg";
// import img17 from "../../assets/TaskManagementSystem/project/uploadDiscussionInfoForTask.jpg";
// import img18 from "../../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport.jpg";
// import img19 from "../../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport1.jpg";
// import img20 from "../../assets/TaskManagementSystem/BugAndSolution/BugList.jpg";
// import img21 from "../../assets/TaskManagementSystem/BugAndSolution/ShowBuglist.jpg";
// import img22 from "../../assets/TaskManagementSystem/BugAndSolution/CreateNewBugDetails.jpg";
// import ImageModal from "../SharedPage/ImageModal";

// const TaskManagementSystem = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const DashboardImgs = [img1, img6,
//   ];
//   const ProjectManagementImgs = [img10,
//     img11,
//     img12, img7,
//     img8,
//     img9,
//   ];
//   const TaskManagementImgs = [img13,
//     img17, img14,
//     img15,];
//   const TaskReportsImgs = [img18,
//     img19];
//   const BugManagementImgs = [img20,
//     img21,
//     img22,];
//   const EmployeeManagementImgs = [
//     img3,
//     img4,
//     img5,];

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
//       <h1
//         className="text-3xl underline text-center mb-10 font-bold"
//         style={{
//           background: "linear-gradient(90deg, #00FF00, #FFFF00)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Task Management System
//       </h1>
//       <h2 className="text-white font-semibold text-3xl">Overview:</h2>
//       <p className="my-5">
//         The Project & Task Management System is a centralized platform designed
//         to manage projects, tasks, bugs, and employees in a structured and
//         efficient workflow. The system enables real-time project tracking, task
//         assignments, document sharing, bug reporting, and team collaboration
//         with clear approval and review processes by admins, team leaders, and
//         SQA members.
//       </p>

//       <h2 className="text-white font-semibold text-3xl">Key Features:</h2>

//       <p className="text-base font-medium mt-4">
//         1. Real-time project dashboard with task status tracking.
//         <br />
//         2. Detailed project and task management with document support.
//         <br />
//         3. Bug reporting, assignment, and testing workflow.
//         <br />
//         4. Employee management with department-wise control.
//       </p>

//       <h2 className="text-white font-semibold text-3xl mt-12">
//         Detailed Features:
//       </h2>

//       {/* ================= Dashboard ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         1. Dashboard:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">- Displays all projects with their running tasks.</p>
//         <p className="ml-5">
//           - Tasks are categorized by status: To Do, In Progress, and Completed.
//         </p>
//         <p className="ml-5">
//           - Shows assigned team members for each task.
//         </p>
//         <p className="ml-5">
//           - Admin can delete only the tasks that are in "To Do" status.
//         </p>
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

//       {/* ================= Project Management ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         2. Project Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           - Displays a complete list of all projects with main information.
//         </p>
//         <p className="ml-5">
//           - Each project contains multiple tasks with different statuses.
//         </p>
//         <p className="ml-5">
//           - Assigned members can access task resources, discussion documents, and
//           detailed information.
//         </p>
//         <p className="ml-5">
//           - Admin can edit every part of a task and upload required documents such as
//           resource files and discussion notes.
//         </p>
//         <p className="ml-5">
//           - Assigned team members can update task status for admin and team leader
//           review.
//         </p>
//         <p className="ml-5">
//           - SQA and team leaders receive notifications for review and testing.
//         </p>
//         <p className="ml-5">
//           - If approved, tasks are marked as completed; otherwise, issues are reported
//           and reverted to "In Progress" for fixing.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {ProjectManagementImgs?.map((perImg, index) => (
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
//       {/* ================= Task Management ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         3. Task Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           - Task section displays project-wise tasks in a summarized card format.
//         </p>
//         <p className="ml-5">
//           - Admin and assigned team members can edit tasks.
//         </p>
//         <p className="ml-5">
//           - Admin can delete tasks when necessary.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {TaskManagementImgs?.map((perImg, index) => (
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
//       {/* ================= Bug Management ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         4. Bug Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           - Bugs reported by customers or testers are uploaded by admin or team
//           leaders.
//         </p>
//         <p className="ml-5">
//           - Bug reports include issue descriptions, attachments, and project
//           references.
//         </p>
//         <p className="ml-5">
//           - Each bug is assigned to specific team members.
//         </p>
//         <p className="ml-5">
//           - Assigned members receive notifications to resolve the issue.
//         </p>
//         <p className="ml-5">
//           - After fixing, the bug is sent for testing by SQA or team leaders.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {BugManagementImgs?.map((perImg, index) => (
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
//       {/* ================= Task Report ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         5. Task Report:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           - All team members can submit daily activity reports, indicating tasks
//           they have worked on each day.
//         </p>
//         <p className="ml-5">
//           - Reports can include descriptions, uploaded documents, and progress
//           notes.
//         </p>
//         <p className="ml-5">
//           - Team leaders and supervisors can monitor each employee's daily
//           activities and overall performance.
//         </p>
//         <p className="ml-5">
//           - Provides an organized overview of task completion and team productivity
//           for review and planning purposes.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {TaskReportsImgs?.map((perImg, index) => (
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
//       {/* ================= Employee Management ================= */}
//       <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
//         6. Employee Management:-
//       </h3>
//       <p className="text-base font-medium">
//         <p className="ml-5">
//           - Displays employee list with different category-based color indicators.
//         </p>
//         <p className="ml-5">
//           - Employees can be managed by department.
//         </p>
//         <p className="ml-5">
//           - Admin can edit employee information.
//         </p>
//         <p className="ml-5">
//           - Admin can disable or remove any employee when required.
//         </p>
//       </p>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
//         {EmployeeManagementImgs?.map((perImg, index) => (
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

// export default TaskManagementSystem;

import React from "react";
import DetailsPageFormate from "../SharedPage/DetailsPageFormate";
import TaskManagementSystemData from "../../Data/TaskManagementSystemData";

const TaskManagementSystem = () => {
  return <DetailsPageFormate data={TaskManagementSystemData} />;
};

export default TaskManagementSystem;
