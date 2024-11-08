import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';

import img1 from "../assets/ASMS/Admin/Register.jpg"
import img2 from "../assets/ASMS/Admin/userList.jpg"
import img3 from "../assets/ASMS/Admin/HereUpdateUserInfo.jpg"

import img4 from "../assets/ASMS/Admin/AddNewShopInof.jpg"
import img5 from "../assets/ASMS/Admin/ShowShopInfoList.jpg"

import img6 from "../assets/ASMS/Admin/ShowAllOrderList.jpg"

import img7 from "../assets/ASMS/Customer service officer/General.jpg"
import img8 from "../assets/ASMS/Customer service officer/General2.jpg"
import img9 from "../assets/ASMS/Customer service officer/special1.jpg"
import img10 from "../assets/ASMS/Customer service officer/Special2.jpg"

import img11 from "../assets/ASMS/Customer service officer/General Status bar.jpg"
import img12 from "../assets/ASMS/Customer service officer/SpecailStatusBar.jpg"
import img13 from "../assets/ASMS/Customer service officer/requestDetails.jpg"

import img14 from "../assets/ASMS/Leader/AcessLeader.jpg"
import img15 from "../assets/ASMS/Leader/gereralCheckApproved.jpg"
import img16 from "../assets/ASMS/Leader/specialCheckApproved.jpg"
import img17 from "../assets/ASMS/Leader/CheckDetailApproved.jpg"
import img18 from "../assets/ASMS/Leader/CheckDetailApproved1.jpg"


import img19 from "../assets/ASMS/Warhouse/ShowWarehouseRequest.jpg"
import img20 from "../assets/ASMS/Warhouse/SpecialRequestshow.jpg"
import img21 from "../assets/ASMS/Warhouse/imageUploadCheckApporved.jpg"
import img22 from "../assets/ASMS/Warhouse/UpdateStatusBar.jpg"
import img23 from "../assets/ASMS/Warhouse/ChangeSpecialRequestStatus.jpg"

import img24 from "../assets/ASMS/WarehoueManger/Showlist.jpg"
import img25 from "../assets/ASMS/WarehoueManger/Chcek and update.jpg"
import img26 from "../assets/ASMS/WarehoueManger/Status update.jpg"


import img27 from "../assets/ASMS/Finance/StatusChange.jpg"
import img28 from "../assets/ASMS/Finance/ShowSpecialRequestForFinance.jpg"
import img29 from "../assets/ASMS/Finance/Check and upload and approved.jpg"
import img30 from "../assets/ASMS/Finance/UpdateStatus.jpg"

import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';

const AfterSalesManagement = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const CreateUserImg = [img1, img2, img3]
    const warehouseUserForShop = [img4, img5]

    const adminUpdateDeleteRequest = [img6]
    const customerServiceTeam = [img7, img8, img9, img10]
    const customerServiceCheckUpdate = [img11, img12, img13]
    const Leader = [img14, img15, img16, img17, img18]
    const warehouseMan = [img19, img20, img21, img22, img23]
    const warehouseManager = [img24, img25, img26]
    const finance = [img27, img28, img29, img30]
    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    const handleToLiveLink = (link) => {
        window.open(link, '_blank');
    };


    return (
        <div className=" relative w-full py-24 sm:px-5 md:px-48   bg-gradient-to-r from-black via-blue-900 to-black text-white">
            <Link to='/' className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200  text-white font-black dark:text-gray-900"><GrLinkPrevious></GrLinkPrevious></Link>
            <h1 className="text-3xl underline text-center mb-10 font-bold" style={{
                background: 'linear-gradient(90deg, #00FF00, #FFFF00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                After Sales Management System
            </h1>
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">The After Sale Management System (ASMS) website was developed to streamline and optimize the after-sales and warehouse operations of THT-Space Electrical Company Ltd. The primary goals of this website are to enhance inventory management, improve the efficiency of product re-sending, repair, and refund processes, and provide real-time visibility into customer service, warehouse, and financial operations.<br />

                The development of the ASMS was initiated in response to several challenges, including inaccurate inventory tracking, slow processing of after-sales requests, and inefficient space utilization.
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:
            </h2>
            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                After Sales Management System:-
            </h3>

            <div className="p-5">
                {/* Admin Panel */}
                <h2 className="text-2xl font-bold text-green-500">Admin Panel</h2>

                {/* Create New User */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">1. Create New User</h3>
                    <ul className="ml-5 list-disc">
                        <li>Only admin has access to create a new user.</li>
                        <li>General users can change their password.</li>
                        <li>Admin can edit, delete user information, and assign roles.</li>
                        <li>Admins can promote general users to admins.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {CreateUserImg && CreateUserImg.length > 0 && CreateUserImg?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>

                {/* Warehouse Management */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">2. Warehouse Management for Particular Shop</h3>
                    <ul className="ml-5 list-disc">
                        <li>Add new warehouses to manage inventory and product flow.</li>
                        <li>Add reasons for refund, resend, and repair requests.</li>
                        <li>Generate lists for each shop with roles assigned (e.g., warehouse man, manager, etc.).</li>
                        <li>Only admins can delete shop information.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {warehouseUserForShop && warehouseUserForShop.length > 0 && warehouseUserForShop?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>


                {/* Refund, Resend, Repair Request Edit/Delete */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">3. Refund, Resend, Repair Request Edit/Delete</h3>
                    <ul className="ml-5 list-disc">
                        <li>Only admin can edit or delete refund, resend, and repair requests before finance approval.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {adminUpdateDeleteRequest && adminUpdateDeleteRequest.length > 0 && adminUpdateDeleteRequest?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                {/* Customer Service Team */}
                <h2 className="text-2xl font-bold text-green-500">Customer Service Team</h2>

                {/* Create New Customer Request */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">1. Create New Customer Request</h3>
                    <ul className="ml-5 list-disc">
                        <li>User must log in as customer service.</li>
                        <li>CS team creates requests according to customer orders.</li>
                        <li>Urgent requests can be marked to expedite the process.</li>
                        <li>General requests are processed without urgency.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {customerServiceTeam && customerServiceTeam.length > 0 && customerServiceTeam?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>

                {/* Check Request Status */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">2. Check Request Status and Edit</h3>
                    <ul className="ml-5 list-disc">
                        <li>CS team can edit or delete requests before leader approval.</li>
                        <li>CS team can check the status of any request.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {customerServiceCheckUpdate && customerServiceCheckUpdate.length > 0 && customerServiceCheckUpdate?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5">
                {/* CS Leader */}
                <h2 className="text-2xl font-bold text-green-500">Customer Service Leader</h2>

                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Responsibilities</h3>
                    <ul className="ml-5 list-disc">
                        <li>First of all, a user needs to log in as a customer service leader.</li>
                        <li>The system will show the requests that need to be approved by the customer service leader.</li>
                        <li>Individually, a customer service leader can check all the information. If all information is correct, the CS leader can approve it for the next procedure.</li>
                        <li>A CS leader can also check and see the current status of every request.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {Leader && Leader.length > 0 && Leader?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                {/* Warehouse Man */}
                <h2 className="text-2xl font-bold text-green-500">Warehouse Man</h2>

                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Responsibilities for Particular Warehouse Man</h3>
                    <ul className="ml-5 list-disc">
                        <li>As a warehouse man, the user has responsibility for a specific warehouse.</li>
                        <li>The warehouse man can check and update only the refund, resend, and repair requests for their assigned warehouse.</li>
                        <li>The warehouse man checks all information, including whether the product has been returned to the warehouse.</li>
                        <li>The warehouse man then completes the warehouse-related processes for resend, refund, or repair requests.</li>
                        <li>The warehouse man uploads pictures related to the request. If all processes are complete, they approve the request for the next procedure.</li>
                        <li>The warehouse man can also see the status of all requests.</li>
                    </ul>
                    <div className="mt-3">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                            {warehouseMan && warehouseMan.length > 0 && warehouseMan?.map((perImg, index) => {
                                return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                {/* Warehouse Manager */}
                <h2 className="text-2xl font-bold text-green-500">Warehouse Manager</h2>

                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Responsibilities for Particular Warehouse Manager</h3>
                    <ul className="ml-5 list-disc">
                        <li>First of all, a user needs to log in as a warehouse manager.</li>
                        <li>As a warehouse manager, the user has responsibility for a specific warehouse.</li>
                        <li>Only general requests need to be approved by the warehouse manager. Special requests do not need approval from the warehouse manager.</li>
                        <li>The warehouse manager can check the refund, resend, and repair requests for their assigned warehouse.</li>
                        <li>The warehouse manager checks all information, reviews the processes and pictures provided by the warehouse man, and then approves the request for the finance department.</li>
                    </ul>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                        {warehouseManager && warehouseManager.length > 0 && warehouseManager?.map((perImg, index) => {
                            return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                        })
                        }

                    </div>
                </div>
            </div>
            <div className="p-5">
                {/* Finance Part */}
                <h2 className="text-2xl font-bold text-green-500">Finance Part</h2>

                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Responsibilities of Finance for a Particular Shop</h3>
                    <ul className="ml-5 list-disc">
                        <li>First of all, a user needs to log in as finance.</li>
                        <li>As finance, the user has responsibility for a specific warehouse.</li>
                        <li>Finance can check the refund, resend, and repair requests and also check the current status of all requests.</li>
                        <li>Finance checks all information, reviews the processes and pictures provided by the warehouse man, and then, if a refund or payment is needed, completes the payment procedure. They then get the receipt, upload the receipt and all related images, and approve the request.</li>
                    </ul>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                        {finance && finance.length > 0 && finance?.map((perImg, index) => {
                            return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                        })
                        }

                    </div>
                </div>
            </div>

            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind CSS, JavaScript, React js, Node js,jwt token, Express JS, Mongoose, MongoDB and more.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>

            <button className="flex" onClick={() => handleToLiveLink("https://grozziie.zjweiting.com:3086/")}>
                <p className="my-3 text-blue-600 font-bold text-lg">School Website Live Site: <span className="font-medium ">https://grozziie.zjweiting.com:3086/</span></p>

            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/THT-Refund-Repair-Resend-Management-System")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Client Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/THT-Refund-Repair-Resend-Management-System</span></p>
            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://github.com/S-M-ZUBAYER/THT-Refund-Management-System-clint")}>
                <p className="my-3 text-blue-600 font-bold text-lg">GitHub Server Site: <span className="font-medium">https://github.com/S-M-ZUBAYER/THT-Refund-Management-System-clint</span></p>
            </button>

            <h2 className="text-white mt-12 font-semibold text-3xl">
                Account:
            </h2>
            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                All Access user:
            </h3>
            <p className="my-5">Email: <span>fengguilin@shininger.com.cn</span></p>
            <p className="my-5">Password: <span>123456</span></p>



            {isModalOpen && (
                <ImageModal
                    imgSrc={selectedImage}
                    alt="Guitar"
                    onClose={closeImageModal} // Close the modal when the "Close" button is clicked
                />
            )}
        </div >
    );
};

export default AfterSalesManagement;