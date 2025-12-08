// src/data/FaceAttendanceData.js

import img1 from "../assets/FaceAttendanceManagementSystem/login.jpg";
import img2 from "../assets/FaceAttendanceManagementSystem/Dashboard/Dashboard.jpg";
import img3 from "../assets/FaceAttendanceManagementSystem/Dashboard/Notification.jpg";
import img4 from "../assets/FaceAttendanceManagementSystem/Admin/AdminList.jpg";
import img5 from "../assets/FaceAttendanceManagementSystem/DeviceList/DeviceList.jpg";
import img6 from "../assets/FaceAttendanceManagementSystem/Employee/EmployeeList.jpg";
import img7 from "../assets/FaceAttendanceManagementSystem/Employee/ExportExcelOfEmployee.jpg";
import img8 from "../assets/FaceAttendanceManagementSystem/Employee/GetEmployeeIdAndCodeViaQRCode.jpg";
import img9 from "../assets/FaceAttendanceManagementSystem/Employee/GetEmployeeDetails.jpg";
import img10 from "../assets/FaceAttendanceManagementSystem/Employee/ResignEmployeeList.jpg";
import img11 from "../assets/FaceAttendanceManagementSystem/Employee/Searching.jpg";
import img12 from "../assets/FaceAttendanceManagementSystem/Attendance/AttendanceListAccordingToDate.jpg";
import img13 from "../assets/FaceAttendanceManagementSystem/Attendance/OverTimeLIst.jpg";
import img14 from "../assets/FaceAttendanceManagementSystem/Attendance/ExportExcelSheetForSelectedEmployee.jpg";
import img15 from "../assets/FaceAttendanceManagementSystem/EmployeeManagement/EmployeeManagementList.jpg";
import img16 from "../assets/FaceAttendanceManagementSystem/EmployeeManagement/editEmployeeInfo.jpg";
import img17 from "../assets/FaceAttendanceManagementSystem/EmployeeManagement/SettingConfigureForEmployeeApp.jpg";
import img18 from "../assets/FaceAttendanceManagementSystem/LeaveApproval/LeaveApprovalByAdminOrLeader.jpg";
import img19 from "../assets/FaceAttendanceManagementSystem/PayPeriod/NormalPayperiod.jpg";
import img20 from "../assets/FaceAttendanceManagementSystem/PayPeriod/SemiMonth.jpg";
import img21 from "../assets/FaceAttendanceManagementSystem/PayPeriod/MonthlyPayPeriod.jpg";
import img22 from "../assets/FaceAttendanceManagementSystem/Rules/AskForLeave.jpg";
import img23 from "../assets/FaceAttendanceManagementSystem/Rules/FlexibleTime.jpg";
import img24 from "../assets/FaceAttendanceManagementSystem/Rules/LatePenalty.jpg";
import img25 from "../assets/FaceAttendanceManagementSystem/Rules/LatenessWarningSystem.jpg";
import img26 from "../assets/FaceAttendanceManagementSystem/Rules/SelectOverTime.jpg";
import img27 from "../assets/FaceAttendanceManagementSystem/Rules/SeletTotalLeave.jpg";
import img28 from "../assets/FaceAttendanceManagementSystem/Rules/WeekendRules.jpg";
import img29 from "../assets/FaceAttendanceManagementSystem/Rules/WorkShiftTImeRules.jpg";
import img30 from "../assets/FaceAttendanceManagementSystem/Rules/lateArrivalePenalty.jpg";
import img31 from "../assets/FaceAttendanceManagementSystem/Rules/missPunchPenalty.jpg";
import img32 from "../assets/FaceAttendanceManagementSystem/SalaryCalculation/SalaryCalculationTable.jpg";
import img33 from "../assets/FaceAttendanceManagementSystem/SalaryCalculation/SalaryDetails.jpg";
import img34 from "../assets/FaceAttendanceManagementSystem/SalaryCalculation/ExportSalaryExcelShellOfSelectedEmployee.jpg";

const FaceAttendanceData = {
    title: "Grozziie Face Attendance Management System",
    overview: `Grozziie Face Attendance Management System is a secure and intelligent
employee attendance and payroll solution designed for companies to
manage workforce activities using face recognition devices. The system
provides real-time attendance tracking, employee management, salary
calculation, leave approval, device monitoring, and fully customizable
payroll and attendance rules—all controlled by Admin and HR roles.`,
    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React js",
        "Vite",
        "Zustand"
    ],
    links: [
        { label: "Live Site", url: "https://grozziie.zjweiting.com:3086/" },
        // { label: "GitHub Client Site", url: "https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site" },
        // { label: "GitHub Server Site", url: "https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site" },
    ],
    categories: [
        {
            title: "Login Restriction & Device Management",
            description: [
                "Only Admin and HR users can access the system; public registration is disabled.",
                "Admin can manage all attendance devices and synchronize employee data for a specific company.",
                "Displays all attendance devices with detailed information.",
                "Shows how many employees are connected to each device.",
            ],
            images: [img1, img5],
        },
        {
            title: "Dashboard Overview",
            description: [
                "Displays today’s and date-wise attendance summaries including Total, Present, Absent, Late Punch, and Leave employees.",
                "Each summary card redirects to its respective details page.",
                "Notification panel shows leave requests, holiday announcements, and important alerts for Admin and HR.",
            ],
            images: [img2, img3],
        },
        {
            title: "Employee Management",
            description: [
                "Displays employee lists with department-wise filtering.",
                "Admin and HR can update employee information at any time.",
                "QR codes are generated for each employee to access the Grozziie Attendance App.",
                "Multiple employee records can be exported to Excel with full details.",
            ],
            images: [img6, img7, img8, img9],
        },
        {
            title: "Resigned Employee Management",
            description: [
                "Displays all resigned employees with full records.",
                "Admin and HR can review and update resigned employee information.",
            ],
            images: [img10, img11],
        },
        {
            title: "Attendance Tracking",
            description: [
                "Displays All, Present, and Absent attendance sheets by date and date range.",
                "Admin and HR can export daily or monthly attendance reports for all or selected employees.",
            ],
            images: [img12, img13, img14],
        },
        {
            title: "Salary Calculation",
            description: [
                "Salary calculation page shows employee list with calculation preview option.",
                "Detailed salary breakdown includes base salary, food allowance, house rent, transport cost, overtime, deductions, penalties, and net payable amount.",
            ],
            images: [img32, img33, img34],
        },
        {
            title: "Employee Pay Rules Management",
            description: [
                "Admin can edit pay periods and salary rules for one or multiple selected employees for special cases.",
            ],
            images: [img15, img16, img17],
        },
        {
            title: "Admin Management",
            description: [
                "Displays all admin users.",
                "Super admin can delete or disable any admin account.",
            ],
            images: [img4],
        },
        {
            title: "Leave Approval System",
            description: [
                "Shows all leave requests across all leave categories.",
                "Admin or HR can approve or reject leave requests.",
                "Employees receive real-time notifications in the mobile app.",
            ],
            images: [img18],
        },
        {
            title: "Advanced Attendance & Payroll Rules",
            description: [
                "Configurable work shift scheduling with custom holidays and weekends.",
                "Flexible work policies including replacement holidays and adjustable settings.",
                "Comprehensive overtime management for weekdays, weekends, and holidays.",
                "Smart lateness control with multi-level warnings, penalties, and fines.",
                "Automated deductions for late arrival, early departure, absence, and missed punch.",
                "Overtime-to-lateness adjustment with optional exclusion rules.",
                "Leave management system with total leave limits and special documents.",
                "Work-on-holiday exchange and replacement day tracking.",
                "Piece-rate salary calculation with automatic leave deduction.",
                "Fully customizable payroll rules for accurate and transparent salary processing.",
            ],
            images: [
                img22, img23, img24, img25, img26,
                img27, img28, img29, img30, img31
            ],
        },
        {
            title: "Pay Period Management",
            description: [
                "Admin can define monthly salary payment schedules for all employees.",
                "Supports multiple pay structures such as Monthly, Semi-Monthly, and Bi-Weekly payroll cycles.",
            ],
            images: [img19, img20, img21],
        },
    ],
};

export default FaceAttendanceData;
