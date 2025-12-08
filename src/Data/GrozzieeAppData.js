import img1 from "../assets/Grozziee/splash.jpg";
import img2 from "../assets/Grozziee/Login.jpg";
import img3 from "../assets/Grozziee/Dashboard.jpg";
import img4 from "../assets/Grozziee/Download.jpg";
import img5 from "../assets/Grozziee/Document.jpg";
import img6 from "../assets/Grozziee/SelectDocument.jpg";
import img7 from "../assets/Grozziee/SelectPrinter.jpg";
import img8 from "../assets/Grozziee/LabelModels.jpg";
import img9 from "../assets/Grozziee/CloseDashbord.jpg";
import img10 from "../assets/Grozziee/CreateTemplate.jpg";
import img11 from "../assets/Grozziee/ProductShow.jpg";
import img12 from "../assets/Grozziee/CustomerCareSupport.jpg";
import img13 from "../assets/Grozziee/SmsWithCustomerService.jpg";
import img14 from "../assets/Grozziee/Shop.jpg";
import img15 from "../assets/Grozziee/ProductVideo.jpg";
import img16 from "../assets/Grozziee/ServerSaveTemplate.jpg";

const GrozzieeAppData = {
    title: "Grozziee App Backend System Overview",

    overview: `A complete backend-powered mobile printing solution for Grozziie thermal and dot printers. 
Users can design templates, print documents, purchase products, and communicate with customer support through the app. 
The system supports real-time document processing, template creation, e-commerce functionality, and cloud-based data management 
to ensure smooth printing operations for users.`,

    categories: [
        {
            title: "User Authentication System",
            description: [
                "API-based user registration and secure login system.",
                "User session management with verified access control."
            ],
            images: [
                img1,
                img2
            ]
        },
        {
            title: "Application Dashboard",
            description: [
                "Central control dashboard for managing printing activity.",
                "Live document processing and printer status control."
            ],
            images: [
                img3,
                img9
            ]
        },
        {
            title: "Template & Label Design System",
            description: [
                "Backend-driven widget-based template builder.",
                "Background image, emoji, and label model support.",
                "Server-side template save system."
            ],
            images: [
                img5,
                img6,
                img7,
                img8,
                img10,
                img16
            ]
        },
        {
            title: "Product & E-Commerce System",
            description: [
                "Dynamic product listing and purchasing system.",
                "Festival-based product offers and discount support."
            ],
            images: [
                img11,
                img14
            ]
        },
        {
            title: "Customer Support System",
            description: [
                "Live chat-based customer care service.",
                "SMS-based customer support system."
            ],
            images: [
                img12,
                img13
            ]
        },
        {
            title: "Instructional Video System",
            description: [
                "Product usage and training videos for users."
            ],
            images: [
                img15
            ]
        },
        {
            title: "App Download System",
            description: [
                "App download and version management system."
            ],
            images: [
                img4
            ]
        }
    ],

    technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "Cloud Storage"
    ],

    links: [
        {
            label: "App Instruction Video",
            url: "https://fb.watch/pzpPjVZ-NC/?mibextid=Nif5oz"
        },
        {
            label: "Play Store Link",
            url: "https://play.google.com/store/apps/details?id=com.grozziie.printer"
        },
        // {
        //     label: "GitHub Server",
        //     url: "https://github.com/S-M-ZUBAYER/zuss-school-management-system-server-site"
        // }
    ]
};

export default GrozzieeAppData;
