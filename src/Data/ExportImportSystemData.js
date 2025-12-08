// src/data/ExportImportSystemData.js

import img1 from "../assets/Export Import Systme/Login.png";
import img2 from "../assets/Export Import Systme/Registration.png";
import img3 from "../assets/Export Import Systme/HomePage.jpg";
import img4 from "../assets/Export Import Systme/CardHomePage.jpg";
import img5 from "../assets/Export Import Systme/addProduct.jpg";
import img6 from "../assets/Export Import Systme/AddBrand.jpg";
import img7 from "../assets/Export Import Systme/Transport way.jpg";
import img8 from "../assets/Export Import Systme/country&port.jpg";
import img9 from "../assets/Export Import Systme/FinalExportCheck.jpg";
import img10 from "../assets/Export Import Systme/ProductData.jpg";
import img11 from "../assets/Export Import Systme/Palletizing.jpg";
import img12 from "../assets/Export Import Systme/Print palletizing.jpg";
import img13 from "../assets/Export Import Systme/dashboard.jpg";
import img14 from "../assets/Export Import Systme/Export quantity.jpg";
import img15 from "../assets/Export Import Systme/AddCharge.jpg";
import img16 from "../assets/Export Import Systme/ExportInitailData.jpg";
import img17 from "../assets/Export Import Systme/C&F Level.jpg";
import img18 from "../assets/Export Import Systme/financialExport.jpg";
import img19 from "../assets/Export Import Systme/FinalExportDetails.jpg";
import img20 from "../assets/Export Import Systme/FinalDataList.jpg";
import img21 from "../assets/Export Import Systme/FinanceList.jpg";
import img22 from "../assets/Export Import Systme/Finance Details and reject.jpg";
import img23 from "../assets/Export Import Systme/FinalDataDetails.jpg";
import img24 from "../assets/Export Import Systme/finalDataPdf.jpg";
import img25 from "../assets/Export Import Systme/UserCreateSideNavbar.jpg";
import img26 from "../assets/Export Import Systme/AdminPage.jpg";

const ExportImportSystemData = {
    title: "Export-Import System Overview",

    overview: `This Export-Import Management System streamlines the process of product export for THT-Space Electrical Company Ltd. 
It enables Product Managers to add and manage product details, handle palletizing data, and set up shipments. 
Commercial Managers review export information, manage C&F charges, and finalize export data. 
Finance teams verify, process payments, and maintain financial records for each export. 
The system also supports real-time tracking, document uploads, and automated workflow, enhancing efficiency across departments. 
With role-based access, it ensures smooth coordination and secure data handling for seamless international trade operations.`,

    categories: [
        {
            title: "Product Manager",
            description: [
                "Create and manage products including brand, model, weight, and export quantity.",
                "Input palletizing data and print pallet information by country format.",
                "Enter export data with tracking number and shipment details.",
                "Define transportation methods, countries, ports, charges, and C&F levels."
            ],
            images: [
                img5,
                img6,
                img7,
                img8,
                img10,
                img11,
                img12,
                img13,
                img14
            ]
        },
        {
            title: "Commercial Manager",
            description: [
                "Review and modify export information entered by Product Manager.",
                "Add and manage C&F commission and transport charges.",
                "Approve and finalize export data before finance verification."
            ],
            images: [
                img15,
                img17,
                img16,
                img18,
                img19
            ]
        },
        {
            title: "Finance",
            description: [
                "Verify export data and calculate total financial cost.",
                "Process payments and maintain financial records.",
                "Upload financial documents and proof.",
                "Return data for correction if any mismatch found.",
                "Finalize verified data for permanent storage."
            ],
            images: [
                img9,
                img22,
                img21
            ]
        },
        {
            title: "Admin Module",
            description: [
                "Create and manage all user accounts.",
                "Assign roles to users.",
                "Activate, deactivate, or delete any user.",
                "Monitor system usage and activities."
            ],
            images: [
                img1,
                img2,
                img25,
                img26
            ]
        },
        {
            title: "Final Data Access",
            description: [
                "All finalized export data displayed in a searchable table.",
                "Users can view detailed export records.",
                "Export data can be downloaded as PDF."
            ],
            images: [
                img20,
                img23,
                img24
            ]
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "daisyUI",
        "ReactJS",
        "JWT Authentication",
        "NodeJS",
        "ExpressJS",
        "MySQL"
    ],

    links: [
        {
            label: "Live Project",
            url: "https://grozziie.zjweiting.com:3090/"
        }
    ]
};

export default ExportImportSystemData;
