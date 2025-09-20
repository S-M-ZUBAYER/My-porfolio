import React from 'react';
import img1 from "../assets/StudyZone/Header.png"
import img2 from "../assets/StudyZone/Details.png"
import img3 from "../assets/StudyZone/Checkout.png"
const WowoMartManagement = () => {


    const handleToLiveLink = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className="w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <h1 className="text-3xl underline text-center mb-10 font-bold" style={{
                background: 'linear-gradient(90deg, #00FF00, #FFFF00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                WowoMart Management System
            </h1>
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">
                WowoMart Management System is a centralized platform built to manage the seller, shop, and product approval process for the WowoMart e-commerce site (Shopify-based). It ensures a streamlined workflow from shop creation to product listing, account subscription management, and advanced coupon & discount systems for enhanced admin control.
            </p>

            <h2 className="text-white font-semibold text-3xl">
                Key Features:
                <p className="text-base font-medium">
                    <br />1. Multi-country sellers can apply to create their own shops with payment verification.
                    <br />2. Admin-controlled product upload & approval system.
                    <br />3. Automated seller account expiration & renewal.
                    <br />4. Coupon & discount management for categories and special customers.
                </p>
            </h2>

            <h2 className="text-white font-semibold text-3xl mt-10">
                Detailed Features:
            </h2>
            <p className="text-base font-medium my-5">
                <br /><strong>1. Multi-Country Shop Creation</strong>
                <br />- Any company can apply to create a shop on WowoMart.
                <br />- Application includes payment completion through the management system.
                <br />- Admin reviews and approves shop requests before activation.

                <br /><br /><strong>2. Product Upload & Approval</strong>
                <br />- Once approved, sellers can upload their products.
                <br />- Admin is notified of new uploads and must verify them.
                <br />- Verified products are displayed on the WowoMart e-commerce site.

                <br /><br /><strong>3. Account Expiration & Renewal</strong>
                <br />- Seller accounts have a limited active duration.
                <br />- Expired accounts are automatically deactivated.
                <br />- Sellers must pay again to renew.
                <br />- Admin can also manually deactivate seller accounts.

                <br /><br /><strong>4. Coupon Management</strong>
                <br />- Admins can create coupons for specific categories or products.
                <br />- Apply special offers for targeted or individual customers.
                <br />- Full coupon list with details is maintained.
                <br />- Coupons can be manually deactivated or closed.

                <br /><br /><strong>5. Special Customer Discounts</strong>
                <br />- Maintain a list of special customers eligible for custom discounts.
                <br />- View discount details for each customer.
                <br />- Disable individual discounts when needed.
            </p>

            <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind,some CSS components, JavaScript, React js,Firebase, Node js, MongoDB and so on.</p>
            <h2 className="text-white font-semibold text-3xl mt-5 mb-2">
                Link:
            </h2>

            <button className="flex" onClick={() => handleToLiveLink("https://study-zone-platform.web.app/")}>
                <p className="my-3 text-blue-600 font-bold text-lg">Live Site: <span className="font-medium ">https://study-zone-platform.web.app/</span></p>

            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Client Site: <span className="font-medium ">https://github.com/S-M-ZUBAYER/Study-Zone-Client-Site</span></p>

            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Server Site: <span className="font-medium ">https://github.com/S-M-ZUBAYER/Study-Zone-Server-Site</span></p>

            </button>

            <h2 className="text-white font-semibold text-3xl">
                Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div >
    );
};

export default WowoMartManagement;