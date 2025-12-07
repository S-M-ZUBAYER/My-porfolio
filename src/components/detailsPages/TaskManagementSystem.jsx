import React, { useState } from "react";
import img1 from "../../assets/TaskManagementSystem/login.jpg";
import img2 from "../../assets/TaskManagementSystem/Employee/EmployeeList.jpg";
import img3 from "../../assets/TaskManagementSystem/Employee/addNewEmpoyee.jpg";
import img4 from "../../assets/TaskManagementSystem/Employee/EditEmployee.jpg";
import img5 from "../../assets/TaskManagementSystem/Employee/removeAndDisableEmpoyee.jpg";
import img6 from "../../assets/TaskManagementSystem/dashboard/dashboard.jpg";
import img7 from "../../assets/TaskManagementSystem/dashboard/task details.jpg";
import img8 from "../../assets/TaskManagementSystem/dashboard/upload resource.jpg";
import img9 from "../../assets/TaskManagementSystem/dashboard/upload test report.jpg";
import img10 from "../../assets/TaskManagementSystem/project/createProject.jpg";
import img11 from "../../assets/TaskManagementSystem/project/projectList.jpg";
import img12 from "../../assets/TaskManagementSystem/project/createtask.jpg";
import img13 from "../../assets/TaskManagementSystem/project/ProjectWiseTask.jpg";
import img14 from "../../assets/TaskManagementSystem/project/taskDetails.jpg";
import img15 from "../../assets/TaskManagementSystem/project/taskListUnderAproject.jpg";
import img16 from "../../assets/TaskManagementSystem/project/uploadAndShowDailyTaskReport.jpg";
import img17 from "../../assets/TaskManagementSystem/project/uploadDiscussionInfoForTask.jpg";
import img18 from "../../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport.jpg";
import img19 from "../../assets/TaskManagementSystem/TaskReport/DateWisePersonTaskReport1.jpg";
import img20 from "../../assets/TaskManagementSystem/BugAndSolution/BugList.jpg";
import img21 from "../../assets/TaskManagementSystem/BugAndSolution/ShowBuglist.jpg";
import img22 from "../../assets/TaskManagementSystem/BugAndSolution/CreateNewBugDetails.jpg";
import ImageModal from "../SharedPage/ImageModal";

const TaskManagementSystem = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const TaskManagementImg = [
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
    <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
      <h1
        className="text-3xl underline text-center mb-10 font-bold"
        style={{
          background: "linear-gradient(90deg, #00FF00, #FFFF00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Task Management System
      </h1>
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">
        The Project & Task Management System is a centralized platform designed
        to manage projects, tasks, bugs, and employees in a structured and
        efficient workflow. The system enables real-time project tracking, task
        assignments, document sharing, bug reporting, and team collaboration
        with clear approval and review processes by admins, team leaders, and
        SQA members.
      </p>

      <h2 className="text-white font-semibold text-3xl">
        Key Features:
        <p className="text-base font-medium">
          <br />
          1. Real-time project dashboard with task status tracking.
          <br />
          2. Detailed project and task management with document support.
          <br />
          3. Bug reporting, assignment, and testing workflow.
          <br />
          4. Employee management with department-wise control.
        </p>
      </h2>

      <h2 className="text-white font-semibold text-3xl mt-10">
        Detailed Features:
      </h2>
      <p className="text-base font-medium my-5">
        <br />
        <strong>1. Dashboard</strong>
        <br />- Displays all projects with their running tasks.
        <br />- Tasks are categorized by status: To Do, In Progress, and
        Completed.
        <br />- Shows assigned team members for each task.
        <br />- Admin can delete only the tasks that are in "To Do" status.
        <br />
        <br />
        <strong>2. Project Management</strong>
        <br />- Displays a complete list of all projects with main information.
        <br />- Each project contains multiple tasks with different statuses.
        <br />- Assigned members can access task resources, discussion
        documents, and detailed information.
        <br />- Admin can edit every part of a task and upload required
        documents such as resource files and discussion notes.
        <br />- Assigned team members can update task status for admin and team
        leader review.
        <br />- SQA and team leaders receive notifications for review and
        testing.
        <br />- If approved, tasks are marked as completed; otherwise, issues
        are reported and reverted to "In Progress" for fixing.
        <br />
        <br />
        <strong>3. Task Management</strong>
        <br />- Task section displays project-wise tasks in a summarized card
        format.
        <br />- Admin and assigned team members can edit tasks.
        <br />- Admin can delete tasks when necessary.
        <br />
        <br />
        <strong>4. Bug Management</strong>
        <br />- Bugs reported by customers or testers are uploaded by admin or
        team leaders.
        <br />- Bug reports include issue descriptions, attachments, and project
        references.
        <br />- Each bug is assigned to specific team members.
        <br />- Assigned members receive notifications to resolve the issue.
        <br />- After fixing, the bug is sent for testing by SQA or team
        leaders.
        <br />
        <br />
        <strong>5. Employee Management</strong>
        <br />- Displays employee list with different category-based color
        indicators.
        <br />- Employees can be managed by department.
        <br />- Admin can edit employee information.
        <br />- Admin can disable or remove any employee when required.
      </p>

      <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
        Technologies:
      </h2>
      <p>
        {" "}
        HTML,CSS,Tailwind,some CSS components, JavaScript, React js,Firebase,
        Node js, MongoDB and so on.
      </p>
      <h2 className="text-white font-semibold text-3xl mt-5 mb-2">Link:</h2>

      <button
        className="flex"
        onClick={() => handleToLiveLink("https://study-zone-platform.web.app/")}
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          Live Site:{" "}
          <span className="font-medium ">
            https://study-zone-platform.web.app/
          </span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Client Site:{" "}
          <span className="font-medium ">
            https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site
          </span>
        </p>
      </button>
      <button
        className="flex"
        onClick={() =>
          handleToLiveLink(
            "https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site"
          )
        }
      >
        <p className="my-3 text-blue-600 font-bold text-lg">
          GitHub Server Site:{" "}
          <span className="font-medium ">
            https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site
          </span>
        </p>
      </button>

      <h2 className="text-white font-semibold text-3xl">Gallery:</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
        {TaskManagementImg &&
          TaskManagementImg.length > 0 &&
          TaskManagementImg?.map((perImg, index) => {
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

export default TaskManagementSystem;
