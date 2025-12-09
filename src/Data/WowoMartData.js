import img1 from "../assets/wowomart/LonIn.jpg";
import img2 from "../assets/wowomart/Register.jpg";
import img3 from "../assets/wowomart/dashboard.jpg";
import img4 from "../assets/wowomart/CreatedAccount/CreatedAccountList.jpg";
import img5 from "../assets/wowomart/CreatedAccount/updateDetailsDeleteDisableCreatedAccount.jpg";
import img6 from "../assets/wowomart/Pending Account/pendingAccountList.jpg";
import img7 from "../assets/wowomart/Pending Account/PendingUserDetaislAndConfirmCreation.png";
import img8 from "../assets/wowomart/DisableAccount/DisableList.jpg";
import img9 from "../assets/wowomart/DisableAccount/DisableList.jpg";
import img10 from "../assets/wowomart/DisableAccount/Edit,Enable,Deleted.jpg";
import img11 from "../assets/wowomart/Coupon/ShowCouponList.jpg";
import img12 from "../assets/wowomart/Coupon/CouponDetails.jpg";
import img13 from "../assets/wowomart/Coupon/AddPercentageAndMakePercentAccoringToProductPrice.jpg";
import img14 from "../assets/wowomart/Coupon/CreateCouponAccordingToCategory.jpg";
import img15 from "../assets/wowomart/Coupon/AssignTagCouponForCustomer.jpg";
import img16 from "../assets/wowomart/Coupon/CouponUserList.jpg";
import img17 from "../assets/wowomart/Coupon/CouponUserDetails.jpg";

const WowoMartData = {
    title: "WowoMart Multivendor Management System",
    overview: `WowoMart Multivendor Management System is a centralized platform built to manage 
the seller, shop, and product approval process for the WowoMart e-commerce site (Shopify-based). 
It ensures a streamlined workflow from shop creation to product listing, account subscription 
management, and advanced coupon & discount systems for enhanced admin control.`,

    categories: [
        {
            title: "Multi-Country Shop Creation",
            description: [
                "Businesses from multiple countries can apply to create a shop on WowoMart.",
                "Shop application requires successful payment verification.",
                "Admin reviews and approves the shop before activation."
            ],
            images: [img1, img2, img3, img7, img8]
        },
        {
            title: "Product Upload & Approval System",
            description: [
                "After account creation, sellers can upload products after shop approval.",
                "Admin receives notifications for new product submissions.",
                "Only verified products are published."
            ],
            images: []
        },
        {
            title: "Seller Account Expiration & Renewal",
            description: [
                "Seller accounts have limited subscription periods.",
                "Expired accounts are automatically deactivated.",
                "Sellers must renew to regain access.",
                "Admin can manually deactivate accounts."
            ],
            images: [img5, img6, img9, img10]
        },
        {
            title: "Coupon & Discount Management",
            description: [
                "Admin can create coupons for specific products or categories.",
                "Targeted discounts for selected customers.",
                "Complete coupon list with validity and usage details.",
                "Admin can deactivate coupons anytime."
            ],
            images: [img11, img12, img13]
        },
        {
            title: "Special Customer Discount System",
            description: [
                "Dedicated list of special customers eligible for exclusive discounts.",
                "Admin can view detailed discount information per customer.",
                "Individual customer discounts can be modified or disabled."
            ],
            images: [img14, img15, img16, img17]
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Zustand",
        "React.js",
        "Vite",
        "JWT",
        "Node.js",
        "ExpressJS",
        "MySQL",
        "Stripe",
        "Swagger UI"
    ],

    links: [
        {
            label: "Live Site",
            url: "https://grozziie.zjweiting.com:56832/"
        },
        // {
        //     label: "GitHub Client Site",
        //     url: "https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site"
        // },
        // {
        //     label: "GitHub Server Site",
        //     url: "https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site"
        // }
    ]
};

export default WowoMartData;
