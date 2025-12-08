import img1 from "../assets/ASMS/Admin/Register.jpg";
import img2 from "../assets/ASMS/Admin/userList.jpg";
import img3 from "../assets/ASMS/Admin/HereUpdateUserInfo.jpg";
import img4 from "../assets/ASMS/Admin/AddNewShopInof.jpg";
import img5 from "../assets/ASMS/Admin/ShowShopInfoList.jpg";
import img6 from "../assets/ASMS/Admin/ShowAllOrderList.jpg";
import img7 from "../assets/ASMS/Customer service officer/General.jpg";
import img8 from "../assets/ASMS/Customer service officer/General2.jpg";
import img9 from "../assets/ASMS/Customer service officer/special1.jpg";
import img10 from "../assets/ASMS/Customer service officer/Special2.jpg";
import img11 from "../assets/ASMS/Customer service officer/General Status bar.jpg";
import img12 from "../assets/ASMS/Customer service officer/SpecailStatusBar.jpg";
import img13 from "../assets/ASMS/Customer service officer/requestDetails.jpg";
import img14 from "../assets/ASMS/Leader/AcessLeader.jpg";
import img15 from "../assets/ASMS/Leader/gereralCheckApproved.jpg";
import img16 from "../assets/ASMS/Leader/specialCheckApproved.jpg";
import img17 from "../assets/ASMS/Leader/CheckDetailApproved.jpg";
import img18 from "../assets/ASMS/Leader/CheckDetailApproved1.jpg";
import img19 from "../assets/ASMS/Warhouse/ShowWarehouseRequest.jpg";
import img20 from "../assets/ASMS/Warhouse/SpecialRequestshow.jpg";
import img21 from "../assets/ASMS/Warhouse/imageUploadCheckApporved.jpg";
import img22 from "../assets/ASMS/Warhouse/UpdateStatusBar.jpg";
import img23 from "../assets/ASMS/Warhouse/ChangeSpecialRequestStatus.jpg";
import img24 from "../assets/ASMS/WarehoueManger/Showlist.jpg";
import img25 from "../assets/ASMS/WarehoueManger/Chcek and update.jpg";
import img26 from "../assets/ASMS/WarehoueManger/Status update.jpg";
import img27 from "../assets/ASMS/Finance/StatusChange.jpg";
import img28 from "../assets/ASMS/Finance/ShowSpecialRequestForFinance.jpg";
import img29 from "../assets/ASMS/Finance/Check and upload and approved.jpg";
import img30 from "../assets/ASMS/Finance/UpdateStatus.jpg";

const AfterSalesData = {
    title: "After Sales Management System",
    overview: `The After Sale Management System (ASMS) website was developed to
streamline and optimize the after-sales and warehouse operations of
THT-Space Electrical Company Ltd. It enhances inventory management,
improves repair/resend/refund processes, and provides real-time
visibility into customer service, warehouse, and financial operations.`,

    roles: [
        {
            name: "Admin Panel",
            responsibilities: [
                {
                    title: "Create New User",
                    description: [
                        "Only admin has access to create a new user.",
                        "General users can change their password.",
                        "Admin can edit, delete user information, and assign roles.",
                        "Admins can promote general users to admins."
                    ],
                    images: [img1, img2, img3]
                },
                {
                    title: "Warehouse Management for Particular Shop",
                    description: [
                        "Add new warehouses to manage inventory and product flow.",
                        "Add reasons for refund, resend, and repair requests.",
                        "Generate lists for each shop with roles assigned (warehouse man, manager, etc.).",
                        "Only admins can delete shop information."
                    ],
                    images: [img4, img5]
                },
                {
                    title: "Refund, Resend, Repair Request Edit/Delete",
                    description: [
                        "Only admin can edit or delete refund, resend, and repair requests before finance approval."
                    ],
                    images: [img6]
                }
            ]
        },
        {
            name: "Customer Service Team",
            responsibilities: [
                {
                    title: "Create New Customer Request",
                    description: [
                        "User must log in as customer service.",
                        "CS team creates requests according to customer orders.",
                        "Urgent requests can be marked to expedite the process.",
                        "General requests are processed without urgency."
                    ],
                    images: [img7, img8, img9, img10]
                },
                {
                    title: "Check Request Status and Edit",
                    description: [
                        "CS team can edit or delete requests before leader approval.",
                        "CS team can check the status of any request."
                    ],
                    images: [img11, img12, img13]
                }
            ]
        },
        {
            name: "Customer Service Leader",
            responsibilities: [
                {
                    title: "Responsibilities",
                    description: [
                        "User needs to log in as a customer service leader.",
                        "Leader approves requests and verifies all information.",
                        "Leader can view current status of all requests."
                    ],
                    images: [img14, img15, img16, img17, img18]
                }
            ]
        },
        {
            name: "Warehouse Man",
            responsibilities: [
                {
                    title: "Responsibilities for Particular Warehouse Man",
                    description: [
                        "User has responsibility for a specific warehouse.",
                        "Can check/update refund, resend, repair requests.",
                        "Uploads images and approves requests for the next procedure.",
                        "Can see status of all requests."
                    ],
                    images: [img19, img20, img21, img22, img23]
                }
            ]
        },
        {
            name: "Warehouse Manager",
            responsibilities: [
                {
                    title: "Responsibilities for Particular Warehouse Manager",
                    description: [
                        "User logs in as warehouse manager.",
                        "Responsible for specific warehouse.",
                        "Approves general requests, reviews all warehouse man inputs.",
                        "Prepares requests for finance department."
                    ],
                    images: [img24, img25, img26]
                }
            ]
        },
        {
            name: "Finance Part",
            responsibilities: [
                {
                    title: "Responsibilities of Finance",
                    description: [
                        "User logs in as finance.",
                        "Responsible for a specific warehouse.",
                        "Checks refund/resend/repair requests and current status.",
                        "Completes payment procedure, uploads receipts, and approves requests."
                    ],
                    images: [img27, img28, img29, img30]
                }
            ]
        }
    ],

    technologies: [
        "HTML", "CSS", "Tailwind CSS", "JavaScript", "daisyUI", "React.js", "Node.js", "JWT Token", "Express.js", "MySql"
    ],

    links: [
        { label: "Live Site", url: "https://after-sales-management-system.netlify.app/" },
        // { label: "GitHub Client Site", url: "https://github.com/S-M-ZUBAYER/THT-Refund-Repair-Resend-Management-System" },
        // { label: "GitHub Server Site", url: "https://github.com/S-M-ZUBAYER/THT-Refund-Management-System-clint" }
    ],

    // account: { email: "fengguilin@shininger.com.cn", password: "123456" }
};

export default AfterSalesData;
