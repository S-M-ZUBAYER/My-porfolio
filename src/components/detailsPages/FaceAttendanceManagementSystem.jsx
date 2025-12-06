import React, { useState } from "react";
import img1 from "../../assets/FaceAttendanceManagementSystem/login.jpg";
import img2 from "../../assets/FaceAttendanceManagementSystem/Dashboard/Dashboard.jpg";
import img3 from "../../assets/FaceAttendanceManagementSystem/Dashboard/Notification.jpg";
import img4 from "../../assets/FaceAttendanceManagementSystem/Admin/AdminList.jpg";
import img5 from "../../assets/FaceAttendanceManagementSystem/DeviceList/DeviceList.jpg";
import img6 from "../../assets/FaceAttendanceManagementSystem/Employee/EmployeeList.jpg";
import img7 from "../../assets/FaceAttendanceManagementSystem/Employee/ExportExcelOfEmployee.jpg";
import img8 from "../../assets/FaceAttendanceManagementSystem/Employee/GetEmployeeIdAndCodeViaQRCode.jpg";
import img9 from "../../assets/FaceAttendanceManagementSystem/Employee/GetEmployeeDetails.jpg";
import img10 from "../../assets/FaceAttendanceManagementSystem/Employee/ResignEmployeeList.jpg";
import img11 from "../../assets/FaceAttendanceManagementSystem/Employee/Searching.jpg";
import img12 from "../../assets/FaceAttendanceManagementSystem/Attendance/AttendanceListAccordingToDate.jpg";
import img13 from "../../assets/FaceAttendanceManagementSystem/Attendance/OverTimeLIst.jpg";
import img14 from "../../assets/FaceAttendanceManagementSystem/Attendance/ExportExcelSheetForSelectedEmployee.jpg";
import img15 from "../../assets/FaceAttendanceManagementSystem/EmployeeManagement/EmployeeManagementList.jpg";
import img16 from "../../assets/FaceAttendanceManagementSystem/EmployeeManagement/editEmployeeInfo.jpg";
import img17 from "../../assets/FaceAttendanceManagementSystem/EmployeeManagement/SettingConfigureForEmployeeApp.jpg";
import img18 from "../../assets/FaceAttendanceManagementSystem/LeaveApproval/LeaveApprovalByAdminOrLeader.jpg";
import img19 from "../../assets/FaceAttendanceManagementSystem/PayPeriod/NormalPayperiod.jpg";
import img20 from "../../assets/FaceAttendanceManagementSystem/PayPeriod/SemiMonth.jpg";
import img21 from "../../assets/FaceAttendanceManagementSystem/PayPeriod/MonthlyPayPeriod.jpg";
import img22 from "../../assets/FaceAttendanceManagementSystem/Rules/AskForLeave.jpg";
import img23 from "../../assets/FaceAttendanceManagementSystem/Rules/FlexibleTime.jpg";
import img24 from "../../assets/FaceAttendanceManagementSystem/Rules/LatePenalty.jpg";
import img25 from "../../assets/FaceAttendanceManagementSystem/Rules/LatenessWarningSystem.jpg";
import img26 from "../../assets/FaceAttendanceManagementSystem/Rules/SelectOverTime.jpg";
import img27 from "../../assets/FaceAttendanceManagementSystem/Rules/SeletTotalLeave.jpg";
import img28 from "../../assets/FaceAttendanceManagementSystem/Rules/WeekendRules.jpg";
import img29 from "../../assets/FaceAttendanceManagementSystem/Rules/WorkShiftTImeRules.jpg";
import img30 from "../../assets/FaceAttendanceManagementSystem/Rules/lateArrivalePenalty.jpg";
import img31 from "../../assets/FaceAttendanceManagementSystem/Rules/missPunchPenalty.jpg";
import img32 from "../../assets/FaceAttendanceManagementSystem/SalaryCalculation/SalaryCalculationTable.jpg";
import img33 from "../../assets/FaceAttendanceManagementSystem/SalaryCalculation/SalaryDetails.jpg";
import img34 from "../../assets/FaceAttendanceManagementSystem/SalaryCalculation/ExportSalaryExcelShellOfSelectedEmployee.jpg";
import ImageModal from "../SharedPage/ImageModal";

const FaceAttendanceManagementSystem = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const faceAttendanceImg = [
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
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
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
        Grozziie Face Attendance Management System
      </h1>
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">
        A centralized Website Management system For Grozziie App to manage
        face-recognition attendance devices, employees, Salary Rules, Salary
        Calculation, and daily operations. Supports admin and employee roles,
        real-time sync, and secure QR/password workflows.
      </p>

      <h2 className="text-white font-semibold text-3xl">
        Key Features:
        <p className="text-base font-medium">
          <br />
          1. Multi-country sellers can apply to create their own shops with
          payment verification.
          <br />
          2. Admin-controlled product upload & approval system.
          <br />
          3. Automated seller account expiration & renewal.
          <br />
          4. Coupon & discount management for categories and special customers.
        </p>
      </h2>

      <h2 className="text-white font-semibold text-3xl mt-10">
        Detailed Features:
      </h2>
      <p className="text-base font-medium my-5">
        <br />
        <strong>1. Multi-Country Shop Creation</strong>
        <br />- Any company can apply to create a shop on WowoMart.
        <br />- Application includes payment completion through the management
        system.
        <br />- Admin reviews and approves shop requests before activation.
        <br />
        <br />
        <strong>2. Device Management</strong>
        <br />- Add devices, activate/switch one active device at a time, view
        device name/MAC/employee count.
        <br />- Device settings: change password, change time, restore device.
        <br />- Remove device when needed.
        <br />
        <br />
        <strong>5. Employee Management</strong>
        <br />- Work Type: Home / Onsite / Both.
        <br />- Attendance Method: Check-out button / Face attendance / Both.
        <br />- Offline punch: Yes/No.
        <br />- Visibility control: Absent, Late in, Leaves, Overtime, Weekly
        activities (or Select all).
        <br />- Overtime eligibility: Yes/No.
        <br />- Move employee between devices.
        <br />- Pay Period & Salary Rules per employee: Normal Month, Monthly,
        Semi-Monthly, Bi-Weekly, Weekly, Flexible.
        <br />
        <br />
        <strong>6. Add Employees</strong>
        <br />- Required: photo, full name, employee ID, department,
        designation.
        <br />- Also: joining date, address, type
        (Full-time/Contractual/Intern/Part-Time), email, phone, device
        assignment, image precision.
        <br />- Roles: Leader and/or Sub Admin.
        <br />- “Difficult to add” option for complex faces.
        <br />
        <br />
        <strong>7. Employee List Management</strong>
        <br />- Search, view profiles, edit details, change assigned device.
        <br />- Delete single/multiple employees (with confirmation).
        <br />- Export list to Excel.
        <br />
        <br />
        <strong>8. Admin Management</strong>
        <br />- View all admins and connected devices, multiple admins per
        device.
        <br />- Remove admin (requires device password for security).
        <br />
        <br />
        <strong>9. Notice Management</strong>
        <br />- Send announcements/tasks: select employee(s) or Select All,
        title, description, single attachment (max 1 MB: PDF/DOC/JPG/PNG/XLS).
        <br />- One-way delivery with in-app notifications.
        <br />
        <br />
        <strong>10. Leave Approval</strong>
        <br />- Review requests: type, dates, duration, reason, attachments,
        status.
        <br />- Approve/Reject with remarks.
        <br />- Edit leave category from the request.
        <br />
        <br />
        <strong>11. Security & Access</strong>
        <br />- QR-based employee binding (QRs expire; regenerate anytime).
        <br />- Admin device password required; factory reset (long press power)
        clears old password.
        <br />
        <br />
        <strong>12. Connectivity Requirements</strong>
        <br />- Bluetooth and Location must be ON for scanning/pairing and
        nearby device discovery.
        <br />- Real-time sync after successful connection.
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
        {faceAttendanceImg &&
          faceAttendanceImg.length > 0 &&
          faceAttendanceImg?.map((perImg, index) => {
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

export default FaceAttendanceManagementSystem;
