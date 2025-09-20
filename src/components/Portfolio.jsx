import React from "react";
import cricketLover from "../assets/portfolio/cricketLover.png";
import tht from "../assets/portfolio/tht.png";
import grozziie from "../assets/Grozziee/Dashboard.jpg";
import school from "../assets/portfolio/school.png";
import exportImportSystem from "../assets/portfolio/ExportImportSystem.jpg";
import afterSale from "../assets/portfolio/afterSale.jpg";
import OnlinePrinting from "../assets/portfolio/OnlinePrinting.png";
import { useNavigate } from "react-router-dom";


const Portfolio = () => {
  const navigate = useNavigate()
  const handleToCricketLover = () => {
    navigate('/cricketLover')
  }
  const handleToWowoMartManagement = () => {
    navigate('/WowoMart_Management_System')
  }
  const handleToCustomerService = () => {
    navigate('/THT-Space')
  }
  const handleToOnlinePrinting = () => {
    navigate('/grozziie_online_Printing')
  }
  const handleToAfterSalesManagement = () => {
    navigate('/AfterSales_Management_System')
  }
  const handleToGrozziieApp = () => {
    navigate('/GrozzieeApp')
  }
  const handleToSchoolManagement = () => {
    navigate('/school_management')
  }
  const handleToExportImportSystem = () => {
    navigate('/export_import_system')
  }

  const portfolioList = [
    {
      src: tht,
      title: "Grozziie",
      description: "The THT-Space Electrical Company Ltd. website is a platform for the customer service team and admin panel to manage customer interactions. It enables answering inquiries, translating into multiple languages, communicating with international customers, and securely storing data.",
      subtitle: "THT-Space Electrical Company Ltd.",
      onClick: handleToCustomerService,
    },
    {
      src: school,
      title: "Zuss School Management System",
      subtitle: "Ashte IT Foundation.",
      description: "A dynamic platform for schools allows admins to gather information and create tailored school and admin sites. Schools can manage admissions, notices, attendance, routines, and fees, while admin sites enable fee processing, certificate issuance, ID generation, and content updates automatically.",
      onClick: handleToSchoolManagement,
    },
    {
      src: exportImportSystem,
      title: "Export Import System",
      subtitle: "Grozziie",
      description: "The Export-Import Management System streamlines product setup, export data management, and financial processing. Each department—Product, Commercial, and Finance—handles tasks from product entry to payment verification, ensuring coordinated operations...",
      onClick: handleToExportImportSystem,
    },
    {
      src: afterSale,
      title: "After Sales Management System",
      subtitle: "Grozziie",
      description: "The After Sale Management System (ASMS) website was developed to streamline and optimize the after-sales and warehouse operations of THT-Space Electrical Company...",
      onClick: handleToAfterSalesManagement,
    },
    {
      src: OnlinePrinting,
      title: "Grozziie Online Printing",
      subtitle: "Grozziie",
      description: "A platform developed for THT-Space Electrical Company Ltd. to view and manage all product orders, print orders, and integrate with express delivery companies for seamless product shipment to customers...",
      onClick: handleToOnlinePrinting,
    },
    {
      src: grozziie,
      title: "Grozziie APP",
      subtitle: "Grozziie",
      description: "A platform designed to cater to the needs of customers utilizing printers from THT-Space Electrical Company Ltd. Through this application...",
      onClick: handleToGrozziieApp,
    },

    {
      src: cricketLover,
      title: "Cricket Lover",
      subtitle: "My Own",
      description: "A platform for buying and selling used cricket equipment. Ideal for cricket enthusiasts looking for affordable options...",
      onClick: handleToCricketLover,
    },
    {
      src: cricketLover,
      title: "WowoMart Management System",
      subtitle: "My Own",
      description: "A platform for buying and selling used cricket equipment. Ideal for cricket enthusiasts looking for affordable options...",
      onClick: handleToWowoMartManagement,
    },
  ]

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-r from-black via-blue-900 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Key Projects
          </p>
          <p className="py-6">Check out some of my key projects right here</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioList.map((item, index) => (
            <div key={index} className="relative shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:shadow-2xl flex flex-col justify-between min-h-[400px]">
              {/* Top section with image and background accents */}
              <div className="flex items-center bg-gradient-to-br from-green-700 via-cyan-700 to-black p-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mr-4">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.subtitle || "Manager"}</p>
                </div>
              </div>

              {/* Middle section with information */}
              <div className="p-6 bg-white border-t-4 border-green-600 flex-grow">
                <p className="text-gray-800 text-sm mb-4">{item.description}</p>
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
