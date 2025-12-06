import React from "react";
import cricketLover from "../../assets/portfolio/cricketLover.png";
import tht from "../../assets/portfolio/tht.png";
import grozziie from "../../assets/Grozziee/Dashboard.jpg";
import school from "../../assets/portfolio/school.png";
import exportImportSystem from "../../assets/portfolio/ExportImportSystem.jpg";
import afterSale from "../../assets/portfolio/afterSale.jpg";
import OnlinePrinting from "../../assets/portfolio/OnlinePrinting.png";
import taskManagement from "../../assets/portfolio/taskManagement.jpg";
import faceAttendanceManagement from "../../assets/portfolio/faceAttendance.jpg";
import WowoMartManagement from "../../assets/portfolio/wowomart.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const handleToCricketLover = () => {
    navigate("/cricketLover");
  };
  const handleToWowoMartManagement = () => {
    navigate("/WowoMart_Management_System");
  };
  const handleToCustomerService = () => {
    navigate("/Customer_Management_System");
  };
  const handleToOnlinePrinting = () => {
    navigate("/grozziie_online_Printing");
  };
  const handleToAfterSalesManagement = () => {
    navigate("/AfterSales_Management_System");
  };
  const handleToGrozziieApp = () => {
    navigate("/GrozzieeApp");
  };
  const handleToSchoolManagement = () => {
    navigate("/School_Management_System");
  };
  const handleToExportImportSystem = () => {
    navigate("/Export_Import_Management_system");
  };
  const handleToTaskManagement = () => {
    navigate("/Task_Management_System");
  };
  const handleToFaceAttendanceManagement = () => {
    navigate("/Face_Attendance_Management_System");
  };

  const portfolioList = [
    {
      src: faceAttendanceManagement,
      title: "Face Attendance Management System",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "A comprehensive HR and admin panel for managing employee attendance, leave approvals, overtime rules, and monthly salary processing. HR managers can track daily and monthly attendance, configure company policies, approve all types of leave, calculate overtime, and generate automated Excel reports for salary and attendance based on custom date ranges, ensuring accurate payroll and efficient workforce management.",
      onClick: handleToFaceAttendanceManagement,
    },
    {
      src: OnlinePrinting,
      title: "Grozziie Online Printing",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "A unified order management system for Shopee, Lazada, and TikTok, allowing shop owners to manage new orders, bulk order acceptance, packaging, shipping, and label printing. The platform integrates with express delivery providers, provides real-time tracking, and supports six languages, streamlining multi-shop operations efficiently.",
      onClick: handleToOnlinePrinting,
    },
    {
      src: tht,
      title: "Customer Management System",
      description:
        "The THT-Space Electrical Company Ltd. website serves as a customer service and admin platform, enabling the team to manage inquiries, communicate with international customers in multiple languages, securely store data, handle payments, and control multiple package versions for the Grozziie app. And So on...",
      subtitle: "THT-Space Electrical Company Ltd.",
      onClick: handleToCustomerService,
    },
    {
      src: taskManagement,
      title: "Task Management System",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "A Task Management System designed for our company, similar to Jira, allowing team leads and supervisors to monitor all project tasks. The platform enables assigning tasks to specific employees, tracking task progress and stages, reviewing daily reports, managing resources, facilitating discussions, sharing files, and ensuring efficient collaboration across teams.",
      onClick: handleToTaskManagement,
    },
    {
      src: WowoMartManagement,
      title: "WowoMart Management System",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "The WowoMart Management System allows shop owners to create and manage their online shops after admin verification, upload products, and sell on the platform. Admins can manage coupons by category or for special customers, track usage, activate/deactivate them, and set automatic deadlines for smooth operations and promotions.",
      onClick: handleToWowoMartManagement,
    },

    {
      src: school,
      title: "School Management System",
      subtitle: "Ashte IT Foundation.",
      description:
        "A dynamic platform for schools that allows admins to create tailored school and admin portals. Schools can manage admissions, notices, attendance, routines, and fees, while admin sites handle fee processing, certificate issuance, ID generation, and content updates. Teachers can view attendance and salary history, and students can access class routines, fee status, results, and make online payments, streamlining school operations effectively.",
      onClick: handleToSchoolManagement,
    },
    {
      src: exportImportSystem,
      title: "Export Import System",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "An Export–Import Management System for tracking company products across warehouses and international shipments. Product managers handle preparation, packaging, and data entry, while commercial managers track costs, assign agents, and manage shipments. The accounting team verifies payments, completes transactions, and uploads necessary documents, streamlining the end-to-end workflow.",
      onClick: handleToExportImportSystem,
    },
    {
      src: grozziie,
      title: "Grozziie APP",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "A comprehensive company app with a backend built to manage all products, functioning like an internal e-commerce platform. The system includes user-specific access via Stripe payments, multiple package/version control, and robust data management. Different sections require subscription or payment to access, enabling controlled usage and seamless management of company products and services.",
      onClick: handleToGrozziieApp,
    },
    {
      src: afterSale,
      title: "After Sales Management System",
      subtitle: "THT-Space Electrical Company Ltd.",
      description:
        "The After Sale Management System (ASMS) streamlines after-sales and warehouse operations for THT-Space Electrical Company Ltd. It enhances inventory management, improves product resending, repair, and refund processes, and provides real-time visibility into customer service, warehouse, and financial operations.",
      onClick: handleToAfterSalesManagement,
    },
    {
      src: cricketLover,
      title: "Cricket Lover",
      subtitle: "My Own",
      description:
        "A dedicated platform for buying and selling used cricket equipment, designed for cricket enthusiasts. The site enables users to find quality cricket gear at affordable prices, connect with sellers, and explore a wide range of instruments, making it easier for players to access the equipment they need without breaking the bank.",
      onClick: handleToCricketLover,
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-r from-black via-blue-900 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto text-center flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Key Projects
          </p>
          <p className="py-6">
            Explore some of the major projects I’ve built and contributed to.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioList.map((item, index) => (
            <div
              key={index}
              className="relative shadow-lg rounded-lg bg-white transition-transform duration-300 hover:shadow-2xl flex flex-col justify-between min-h-[400px]"
            >
              {/* Top section with image and background accents */}
              <div className="grid grid-cols-6 h-[155px] items-center bg-gradient-to-br from-green-700 via-cyan-700 to-black p-4 gap-4">
                <div className="w-24 h-24 col-span-2 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className=" col-span-4">
                  <h3 className="text-lg mb-2 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.subtitle || "Manager"}
                  </p>
                </div>
              </div>

              {/* Middle section with information */}
              <div className="p-6 bg-white border-t-4 border-green-600 flex-grow">
                <p className="text-gray-800 text-sm">{item.description}</p>
              </div>

              {/* Bottom section with button */}
              <div className="p-4 bg-gray-100 border-t">
                <button
                  onClick={item.onClick}
                  className="w-full bg-gradient-to-r from-green-600 to-cyan-400 text-white py-2 font-bold rounded transition-colors duration-300 hover:from-blue-400 hover:to-blue-600"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
