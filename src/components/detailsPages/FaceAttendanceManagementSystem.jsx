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
        Grozziie Face Attendance Management System is a secure and intelligent
        employee attendance and payroll solution designed for companies to
        manage workforce activities using face recognition devices. The system
        provides real-time attendance tracking, employee management, salary
        calculation, leave approval, device monitoring, and fully customizable
        payroll and attendance rules—all controlled by Admin and HR roles.
      </p>

      <h2 className="text-white mt-12 font-semibold text-3xl">Key Features:</h2>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Login Restriction & Device Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          1. Only Admin and HR users can access the system; public registration
          is disabled.
        </p>
        <p className="ml-5">
          2. Admin can manage all attendance devices and synchronize employee
          data for a specific company.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Dashboard Overview:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          3. Displays today’s and date-wise attendance summaries including
          Total, Present, Absent, Late Punch, and Leave employees.
        </p>
        <p className="ml-5">
          4. Each summary card redirects to its respective details page.
        </p>
        <p className="ml-5">
          5. Notification panel shows leave requests, holiday announcements, and
          important alerts for Admin and HR.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Employee Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          6. Displays employee lists with department-wise filtering.
        </p>
        <p className="ml-5">
          7. Admin and HR can update employee information at any time.
        </p>
        <p className="ml-5">
          8. QR codes are generated for each employee to access the Grozziie
          Attendance App.
        </p>
        <p className="ml-5">
          9. Multiple employee records can be exported to Excel with full
          details.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Resigned Employee Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          10. Displays all resigned employees with full records.
        </p>
        <p className="ml-5">
          11. Admin and HR can review and update resigned employee information.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Attendance Tracking:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          12. Displays All, Present, and Absent attendance sheets by date and
          date range.
        </p>
        <p className="ml-5">
          13. Admin and HR can export daily or monthly attendance reports for
          all or selected employees.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Salary Calculation:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          14. Salary calculation page shows employee list with calculation
          preview option.
        </p>
        <p className="ml-5">
          15. Detailed salary breakdown includes base salary, food allowance,
          house rent, transport cost, overtime, deductions, penalties, and net
          payable amount.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Employee Pay Rules Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          16. Admin can edit pay periods and salary rules for one or multiple
          selected employees for special cases.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Device List Monitoring:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          17. Displays all attendance devices with detailed information.
        </p>
        <p className="ml-5">
          18. Shows how many employees are connected to each device.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Admin Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">19. Displays all admin users.</p>
        <p className="ml-5">
          20. Super admin can delete or disable any admin account.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Leave Approval System:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          21. Shows all leave requests across all leave categories.
        </p>
        <p className="ml-5">
          22. Admin or HR can approve or reject leave requests.
        </p>
        <p className="ml-5">
          23. Employees receive real-time notifications in the mobile app.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Advanced Attendance & Payroll Rules:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          24. Configurable work shift scheduling with custom holidays and
          weekends.
        </p>
        <p className="ml-5">
          25. Flexible work policies including replacement holidays and
          adjustable settings.
        </p>
        <p className="ml-5">
          26. Comprehensive overtime management for weekdays, weekends, and
          holidays.
        </p>
        <p className="ml-5">
          27. Smart lateness control with multi-level warnings, penalties, and
          fines.
        </p>
        <p className="ml-5">
          28. Automated deductions for late arrival, early departure, absence,
          and missed punch.
        </p>
        <p className="ml-5">
          29. Overtime-to-lateness adjustment with optional exclusion rules.
        </p>
        <p className="ml-5">
          30. Leave management system with total leave limits and special
          documents.
        </p>
        <p className="ml-5">
          31. Work-on-holiday exchange and replacement day tracking.
        </p>
        <p className="ml-5">
          32. Piece-rate salary calculation with automatic leave deduction.
        </p>
        <p className="ml-5">
          33. Fully customizable payroll rules for accurate and transparent
          salary processing.
        </p>
      </p>

      <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
        Pay Period Management:-
      </h3>
      <p className="text-base font-medium">
        <p className="ml-5">
          34. Admin can define monthly salary payment schedules for all
          employees.
        </p>
        <p className="ml-5">
          35. Supports multiple pay structures such as Monthly, Semi-Monthly,
          and Bi-Weekly payroll cycles.
        </p>
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
