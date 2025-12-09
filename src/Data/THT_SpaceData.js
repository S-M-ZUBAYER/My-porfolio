// src/data/THTSpaceData.js

import img1 from "../assets/THT/Slider.png";
import img2 from "../assets/THT/about.jpg";
import img3 from "../assets/THT/footer.png";
import img4 from "../assets/THT/chatBoot.png";
import img5 from "../assets/THT/QApart.png";
import img6 from "../assets/THT/translator.png";
import img7 from "../assets/THT/detect.png";
import img8 from "../assets/THT/account.png";
import img9 from "../assets/THT/calculation.png";
import img10 from "../assets/THT/contact1.jpg";
import img11 from "../assets/THT/contact2.png";
import img12 from "../assets/THT/contact-3.png";

import img13 from "../assets/THT/admin.png";
import img14 from "../assets/THT/user.png";
import img15 from "../assets/THT/qaPage.png";
import img16 from "../assets/THT/MHW.png";
import img17 from "../assets/THT/w&c.png";
import img18 from "../assets/THT/icon.png";
import img19 from "../assets/THT/icon2.png";
import img20 from "../assets/THT/bg.png";
import img21 from "../assets/THT/mall.png";
import img22 from "../assets/THT/showProduct2.png";
import img23 from "../assets/THT/showProduct-3.png";
import img24 from "../assets/THT/showProduct.png";
import img25 from "../assets/THT/LocationLogin.jpg";
import img26 from "../assets/THT/ChattingUpdate.jpg";
import img27 from "../assets/THT/New/AddWifiModelHW.jpg";
import img28 from "../assets/THT/New/ShowWifiPrinterModelInfo.jpg";
import img29 from "../assets/THT/New/AddQuesionAnswer.png";
import img30 from "../assets/THT/New/SupportLinkList.jpg";
import img31 from "../assets/THT/New/UploadShowingVideo.jpg";
import img32 from "../assets/THT/New/UploadShowingVideoForCN.jpg";
import img33 from "../assets/THT/New/ShopifyLinkUp.jpg";
import img34 from "../assets/THT/New/AppInformation.jpg";
import img35 from "../assets/THT/New/PaymentManage.jpg";
import img36 from "../assets/THT/New/ShowBitmapList.jpg";
import img37 from "../assets/THT/New/FaceAttendancePaymentManageMent.jpg";
import img38 from "../assets/THT/New/PowerBankManage.jpg";

const THTSpaceData = {
    title: "Customer Management System",
    overview: `A centralized customer service and admin management platform developed for 
THT-Space Electrical Company Ltd. This system is used by the customer service team and 
administrators to manage product-related inquiries, store backend data, operate automated 
and manual customer support, and maintain all product, warehouse, and application-related 
information in one secure platform.`,

    categories: [
        {
            title: "Data Creation & Management",
            description: [
                "Add questions and answers directly into the backend system.",
                "Add warehouses and cities for multiple countries.",
                "Add product models with PID, CPCL, and ESC modes.",
                "Add product background images by dimension.",
                "Add icons by dimension. And so on..."
            ],
            images: [img18, img19, img20, img16, img17, img27, img28, img36]
        },
        {
            title: "Q&A System Integration",
            description: [
                "Integrated Question & Answer system for customers.",
                "All questions and answers are stored in the backend and displayed in the user’s account for analysis.",
                "Admin can update and add new question–answer data from this panel.",
                "Customer service agents can search and respond to inquiries about products, shipping, and company services."
            ],
            images: [img29, img8, img5]
        },
        {
            title: "Multilingual Customer Support",
            description: [
                "Supports customers from Malaysia, China, Vietnam, the Philippines, and more.",
                "Customer questions are automatically translated into Bengali and English.",
                "Customer service agents respond in the appropriate customer language.",
                "Each shop has its own dedicated Q&A section."
            ],
            images: [img6, img5]
        },
        {
            title: "Unknown Question & Answer Analysis",
            description: [
                "Unknown questions and incorrect answers are stored for analysis.",
                "Admin can review and add missing Q&A data."
            ],
            images: [img9]
        },
        {
            title: "Admin Dashboard & Analytics",
            description: [
                "Admin dashboard displays total app users, web users, Android and iOS users.",
                "Shows mall products, event products, registrations, and daily logins.",
                "Displays device usage by country using bar charts."
            ],
            images: [img13, img14]
        },
        {
            title: "Multilanguage Translation System",
            description: ["Built-in multilingual translation system for global customer support."],
            images: [img6]
        },
        {
            title: "Smart Address Detection",
            description: ["Automatically detects and corrects improper customer address formats."],
            images: [img7]
        },
        {
            title: "Customer Service Account Dashboard",
            description: ["Displays total questions, unknown questions, and activity summary for each agent."],
            images: [img8]
        },
        {
            title: "Admin Panel Core Features",
            description: [
                "Store and manage all company product information.",
                "Admin can manage users by editing, deleting, or assigning admin roles."
            ],
            images: [img13, img14]
        },

        {
            title: "Customer Service & Communication",
            description: [
                "Dedicated platform for the customer service team and admin users.",
                "Automated customer service system where customers can directly send messages.",
                "Supports sending images, videos, icons, and files.",
                "Manual customer service feature allows agents to ask product-related questions and receive stored answers automatically."
            ],
            images: [img4, img5, img26]
        },
        {
            title: "Mall & Event Product Management",
            description: [
                "Add, update, delete, and display mall products with images, videos, and files.",
                "Add and display event products with full model-based specifications.",
                "Store product details categorized by model number."
            ],
            images: [img21, img22, img23, img24, , img31, img32]
        },
        {
            title: "App Version Control & Permission System",
            description: ["Manage Grozziie app version updates with access permissions and package control."],
            images: [img34, img30]
        },
        {
            title: "Power Bank & Face Attendance Payment Management",
            description: [
                "Manage power bank features with voltage-based percentage control.",
                "Manage attendance system packages with employee limits.",
                "Control payment-based access for attendance features."
            ],
            images: [img35, img37, img33, img38]
        },
        {
            title: "Contact & Support",
            description: ["Users can send emails directly through the contact form."],
            images: [img10, img11, img12]
        }
    ],


    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React js",
        "Node js",
        "Express js",
        "MySQL",
        "OpenAI"
    ],

    links: [
        {
            label: "Live Site",
            url: "https://grozziie.zjweiting.com/"
        },
        // {
        //     label: "GitHub Client Site",
        //     url: "https://github.com/S-M-ZUBAYER/THT-Customer-Management-System"
        // },
        // {
        //     label: "GitHub Server Site",
        //     url: "https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site"
        // }
    ],

    // account: {
    //     email: "sadiarumki00@gmail",
    //     password: "12345678",
    //     note: "This account does not have permission to access the admin route."
    // },

    mainGallery: [
        img25, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
    ],

    adminGallery: [
        img13, img14, img26, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24
    ]
};

export default THTSpaceData;
