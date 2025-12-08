// src/data/CricketLoverData.js

import img1 from "../assets/CricketLover/banner.jpg";
import img2 from "../assets/CricketLover/category.png";
import img3 from "../assets/CricketLover/productAdd.jpg";
import img4 from "../assets/CricketLover/productCategory.jpg";
import img5 from "../assets/CricketLover/login.jpg";
import img6 from "../assets/CricketLover/footer.jpg";
import img7 from "../assets/CricketLover/contact.png";
import img8 from "../assets/CricketLover/blog.jpg";

import img9 from "../assets/CricketLover/dashboard/AllUser.jpg";
import img10 from "../assets/CricketLover/dashboard/allBuyer.jpg";
import img11 from "../assets/CricketLover/dashboard/allSeller.jpg";
import img12 from "../assets/CricketLover/dashboard/MyOrderlist.jpg";
import img13 from "../assets/CricketLover/dashboard/wishlist.jpg";
import img14 from "../assets/CricketLover/dashboard/addNewProduct.jpg";
import img15 from "../assets/CricketLover/dashboard/MyProducts.jpg";
import img16 from "../assets/CricketLover/dashboard/paymentPage.jpg";
import img17 from "../assets/CricketLover/dashboard/paymentCompleted.jpg";

const CricketLoverData = {
    title: "Cricket Lover",
    overview: `A complete buying and selling platform for used cricket playing instruments.
This website helps cricket lovers purchase quality cricket equipment at affordable prices 
while allowing sellers to easily list, advertise, and sell their products through a secure 
and user-friendly digital marketplace.`,
    categories: [
        {
            title: "Buyer & Seller Marketplace",
            description: [
                "Cricket instrument sellers can easily list and sell their products.",
                "Cricket lovers can browse and buy products at affordable prices.",
                "Buyers can select any product and complete the purchase securely."
            ],
            images: [img1, img4, img14]
        },
        {
            title: "Product Advertisement System",
            description: [
                "Sellers can advertise their products on the home page.",
                "Advertised products are displayed prominently on the homepage."
            ],
            images: [img2]
        },
        {
            title: "Authentication & Security",
            description: [
                "Firebase Authentication is used for secure user registration and login.",
                "Only verified users can access selling and buying features."
            ],
            images: [img5, img3]
        },
        {
            title: "Admin Monitoring & Control",
            description: [
                "Admin can monitor the entire website.",
                "Admin can verify sellers.",
                "Admin can delete seller and buyer accounts when necessary."
            ],
            images: [img9, img10]
        },
        {
            title: "Admin Dashboard",
            description: [
                "Admin can view all users, buyers, and sellers in one dashboard.",
                "Admin can edit, delete, and authorize any seller."
            ],
            images: [img11]
        },
        {
            title: "Wishlist & Order Features",
            description: [
                "Buyers can save products to their wishlist.",
                "Buyers can purchase products directly from the platform."
            ],
            images: [img12, img13]
        },
        {
            title: "Payment System",
            description: [
                "Secure online payments are supported using the Stripe payment gateway."
            ],
            images: [img16, img17]
        },
        {
            title: "Seller Dashboard",
            description: [
                "Sellers can add new products at any time.",
                "Sellers can view all their products with status such as Available, Advertised, and Sold.",
                "Sellers can advertise products, mark products as sold, and delete product listings."
            ],
            images: [img14, img15]
        },
        {
            title: "Home Page & Categories",
            description: [
                "Users can view available product categories on the home page.",
                "All advertised products are displayed on the homepage."
            ],
            images: [img6, img7, img11]
        }
    ],
    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "daisyUI",
        "JavaScript",
        "React js",
        "Node js",
        "MongoDB",
        "JWT Authentication",
        "Stripe Payment Gateway"
    ],
    links: [
        {
            label: "Live Site",
            url: "https://cricket-lover-point.netlify.app/"
        },
        // {
        //     label: "GitHub Client Site",
        //     url: "https://github.com/S-M-ZUBAYER/Cricket-Lover-client-site"
        // },
        // {
        //     label: "GitHub Server Site",
        //     url: "https://github.com/S-M-ZUBAYER/Cricket-Lover-server-site"
        // }
    ]
};

export default CricketLoverData;
