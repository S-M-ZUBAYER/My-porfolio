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

const THT_SpaceData = {
    title: "Customer Management System",
    overview: `A centralized customer service and admin management platform developed
for THT-Space Electrical Company Ltd. This system is used by the customer service
team and administrators to manage product-related inquiries, backend data, automated
and manual customer support, and all product, warehouse, and application-related
information in one secure platform.`,

    keyFeatures: [
        "Dedicated platform for customer service team and admin users",
        "Automated and manual customer service",
        "Supports images, videos, icons, and files",
        "Integrated Question & Answer system",
        "Multilingual customer support",
        "Shop-wise Q&A management",
        "Admin dashboard with analytics",
        "Smart address detection",
        "Mall & event product management",
        "App version control and permission system",
        "Power bank & attendance payment management",
        "Contact form support"
    ],

    categories: [
        {
            title: "Customer Service & Communication",
            description: [
                "Dedicated platform for customer service and admin users.",
                "Automated customer service system where customers can directly send messages.",
                "Supports sending images, videos, icons, and files.",
                "Manual customer service feature for product-related Q&A."
            ],
            images: [img25, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
        },
        {
            title: "Admin & Q&A System",
            description: [
                "Admin can update and add new Q&A data.",
                "Unknown questions are stored for analysis.",
                "Integrated dashboard shows users, products, events, and logins.",
                "Supports multilingual translation.",
                "Smart address detection and account dashboards."
            ],
            images: [img13, img14, img26, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24]
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "daisyUI",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
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
    //     email: "sadiarumki00@gmail.com",
    //     password: "12345678",
    //     note: "This account does not have permission to access admin routes."
    // }
};

export default THT_SpaceData;
