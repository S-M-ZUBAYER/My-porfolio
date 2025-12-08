import img1 from "../assets/GrozziieOnlinePrinting/Common/Login.jpg";
import img2 from "../assets/GrozziieOnlinePrinting/Common/Registration.jpg";
import img3 from "../assets/GrozziieOnlinePrinting/Common/ForgetPassword.jpg";
import img4 from "../assets/GrozziieOnlinePrinting/Common/RecoveryPassword.jpg";
import img5 from "../assets/GrozziieOnlinePrinting/Common/ResetPassword.jpg";
import img6 from "../assets/GrozziieOnlinePrinting/Common/Contact/ContactPage.jpg";
import img7 from "../assets/GrozziieOnlinePrinting/Common/FromTheDirectDashboard/DataFromDirectDashboard.jpg";
import img8 from "../assets/GrozziieOnlinePrinting/Common/Searching/SearchingAccordingToDate.jpg";
import img9 from "../assets/GrozziieOnlinePrinting/Common/Searching/SearchingSingleField.jpg";
import img10 from "../assets/GrozziieOnlinePrinting/Common/Searching/SearchingWIthMultipleFiled.jpg";
import img11 from "../assets/GrozziieOnlinePrinting/Common/Setting/SetDeliverType.jpg";
import img12 from "../assets/GrozziieOnlinePrinting/Common/Tracking/SingleTracking.jpg";
import img13 from "../assets/GrozziieOnlinePrinting/Common/Tracking/StepStepTrackingInfo.jpg";
import img14 from "../assets/GrozziieOnlinePrinting/Common/Dashboard/TiktokDashboard.jpg";
import img15 from "../assets/GrozziieOnlinePrinting/Common/Dashboard/LazadaDashboard.jpg";
import img16 from "../assets/GrozziieOnlinePrinting/Common/Dashboard/ShopeeDashboard.jpg";
import img17 from "../assets/GrozziieOnlinePrinting/Common/Dashboard/MultiLanguage.jpg";
import img18 from "../assets/GrozziieOnlinePrinting/Shopee/ConfirmationModal.jpg";
import img19 from "../assets/GrozziieOnlinePrinting/Shopee/ProcessedStatusOrderList.jpg";
import img20 from "../assets/GrozziieOnlinePrinting/Shopee/ShippingAndPrinting.jpg";
import img21 from "../assets/GrozziieOnlinePrinting/Shopee/PrintMultipleOrderWaybill.jpg";
import img22 from "../assets/GrozziieOnlinePrinting/Shopee/ShowPrintedDataList.jpg";
import img23 from "../assets/GrozziieOnlinePrinting/Tiktok/ShippingOrderList.jpg";
import img24 from "../assets/GrozziieOnlinePrinting/Tiktok/orderAcceptAndPackageing.jpg";
import img25 from "../assets/GrozziieOnlinePrinting/Tiktok/OrderShippingAndPrinting.jpg";
import img26 from "../assets/GrozziieOnlinePrinting/Tiktok/OnTheWayorderList.jpg";
import img27 from "../assets/GrozziieOnlinePrinting/Common/AddShop/addShop.png";
import img28 from "../assets/GrozziieOnlinePrinting/Common/AddShop/shopRedirect.jpg";

const GrozziieOnlinePrintingData = {
    title: "Grozziie Online Printing System",

    overview: `A complete multi-platform order management system designed to manage user authentication, 
multi-language support, shop integration, order processing, and automated delivery workflows across 
major e-commerce platforms like TikTok, Lazada, and Shopee. Users can securely register, manage multiple 
shops, process orders in real time, print waybills in bulk, track shipment statuses, and communicate 
directly through the built-in contact system.`,

    categories: [
        {
            title: "User Authentication & Security",
            description: [
                "Users must register using a valid email address.",
                "OTP verification required for successful registration.",
                "Password recovery using registered email with OTP.",
                "Secure password change using OTP verification."
            ],
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "Multi-Language Support",
            description: [
                "Supports 7 languages including English, Chinese, Malaysian, Indonesian, Vietnamese, Thai, and Filipino."
            ],
            images: [img17]
        },
        {
            title: "Dashboard & Shop Integration",
            description: [
                "Users can add and authorize multiple shops from TikTok, Shopee, and Lazada.",
                "Dashboard displays order count by platform and order status.",
                "Direct navigation to platform-specific order pages.",
                "Displays last 7 days analytics using interactive charts."
            ],
            images: [img7, img14, img15, img16, img27, img28]
        },
        {
            title: "TikTok, Lazada & Shopee Order Processing",
            description: [
                "Each platform has its own dedicated order management page.",
                "New orders displayed separately for each platform.",
                "One-click accept and packing system.",
                "Bulk waybill printing for multiple orders.",
                "Single-field and multi-field searching with date filtering.",
                "Automatic courier pickup notification after printing.",
                "Step-by-step shipment tracking system."
            ],
            images: [
                img8,
                img9,
                img10,
                img18,
                img19,
                img20,
                img21,
                img22,
                img23,
                img24,
                img25,
                img26,
                img12,
                img13
            ]
        },
        {
            title: "Settings & Delivery Configuration",
            description: [
                "Users can configure delivery type separately for each platform."
            ],
            images: [img11]
        },
        {
            title: "Contact & Communication",
            description: [
                "Users can directly contact the support team via the built-in contact form."
            ],
            images: [img6]
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React.js",
        "Vite",
        "Redux Toolkit"
        // "JWT Authentication",
        // "Java Spring Boot",
        // "MySQL"
    ],

    links: [
        {
            label: "Live Site",
            url: "https://grozziie.zjweiting.com:57609/"
        },
        // {
        //     label: "GitHub Server Site",
        //     url: "https://github.com/S-M-ZUBAYER/Grozziee-Online-Shop"
        // }
    ]
};

export default GrozziieOnlinePrintingData;
