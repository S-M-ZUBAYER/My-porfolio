import img1 from "../assets/Student Management System/site/Banner.jpg";
import img2 from "../assets/Student Management System/site/about.jpg";
import img3 from "../assets/Student Management System/site/count.jpg";
import img4 from "../assets/Student Management System/site/review.jpg";
import img5 from "../assets/Student Management System/site/footer.jpg";
import img6 from "../assets/Student Management System/site/allStudent.jpg";
import img7 from "../assets/Student Management System/site/payment.jpg";
import img8 from "../assets/Student Management System/site/result.jpg";
import img9 from "../assets/Student Management System/site/activity.jpg";
import img10 from "../assets/Student Management System/site/activityDetails.jpg";
import img11 from "../assets/Student Management System/site/admission.jpg";
import img12 from "../assets/Student Management System/site/atdance.jpg";
import img13 from "../assets/Student Management System/site/calender.jpg";
import img14 from "../assets/Student Management System/site/classRoutine.jpg";
import img15 from "../assets/Student Management System/site/leaveApp.jpg";
import img16 from "../assets/Student Management System/site/admissionStatus.jpg";
import img17 from "../assets/Student Management System/site/salaryStatus.jpg";
import img18 from "../assets/Student Management System/site/notice.jpg";
import img19 from "../assets/Student Management System/site/slider.jpg";
import img20 from "../assets/Student Management System/site/StudentInfo.jpg";
import img21 from "../assets/Student Management System/site/team2.jpg";
import img22 from "../assets/Student Management System/site/team.jpg";
import img23 from "../assets/Student Management System/site/tcrProfile.jpg";
import img24 from "../assets/Student Management System/site/tcrAtnd.jpg";
import img25 from "../assets/Student Management System/site/contact.jpg";

import img26 from "../assets/Student Management System/admin/addAdmissionInfo.jpg";
import img27 from "../assets/Student Management System/admin/addClass.jpg";
import img29 from "../assets/Student Management System/admin/addEvent.jpg";
import img30 from "../assets/Student Management System/admin/addSalary.jpg";
import img31 from "../assets/Student Management System/admin/addStaff.jpg";
import img32 from "../assets/Student Management System/admin/addStudent.jpg";
import img33 from "../assets/Student Management System/admin/addTermSub.jpg";
import img34 from "../assets/Student Management System/admin/allStaff.jpg";
import img35 from "../assets/Student Management System/admin/allStudent.jpg";
import img36 from "../assets/Student Management System/admin/atnd.jpg";
import img37 from "../assets/Student Management System/admin/calenderData.jpg";
import img38 from "../assets/Student Management System/admin/certificate.jpg";
import img39 from "../assets/Student Management System/admin/dashboard.jpg";
import img40 from "../assets/Student Management System/admin/notice.jpg";
import img41 from "../assets/Student Management System/admin/noticeInput.jpg";
import img42 from "../assets/Student Management System/admin/payment.jpg";
import img43 from "../assets/Student Management System/admin/paymentInput.jpg";
import img44 from "../assets/Student Management System/admin/paymentSumery.jpg";
import img45 from "../assets/Student Management System/admin/result.jpg";
import img46 from "../assets/Student Management System/admin/setTime.jpg";
import img47 from "../assets/Student Management System/admin/showAdmission.jpg";
import img49 from "../assets/Student Management System/admin/showSalary.jpg";
import img50 from "../assets/Student Management System/admin/showTermSub.jpg";
import img51 from "../assets/Student Management System/admin/siteManagement.jpg";
import img52 from "../assets/Student Management System/admin/stdId.jpg";
import img53 from "../assets/Student Management System/admin/tcrId.jpg";

const SchoolManagementSystemData = {
    title: "Astha School Management System",

    overview: `Astha School Management System is a complete digital solution designed for students, teachers, and school administrators. 
It replaces traditional paper-based processes with a fully automated online system. From student admission and attendance tracking 
to result publishing and salary management, all academic and administrative activities are handled digitally. This platform supports 
a multi-school architecture, allowing cloning for multiple institutions with independent websites. It includes a public website, 
admin panel, and teacher mobile app.`,

    categories: [
        {
            title: "Student Admission & Application",
            description: [
                "Online admission notice, eligibility and requirements.",
                "Students can apply online with real-time status tracking.",
                "Online admission fee payment supported.",
                "Auto-generated admit cards after approval."
            ],
            images: [img11, img16, img52]
        },
        {
            title: "Student Profile & Academic Access",
            description: [
                "Personal student profile with full academic records.",
                "Online result publication and GPA view.",
                "Daily attendance visibility.",
                "Online class routine with PDF download."
            ],
            images: [img20, img8, img12, img14]
        },
        {
            title: "School Information & Activities",
            description: [
                "School banner, about and review sections.",
                "School activities & events gallery.",
                "Parent review & feedback system.",
                "Teacher and staff profile display."
            ],
            images: [
                img1,
                img2,
                img3,
                img4,
                img5,
                img13,
                img23,
                img9,
                img10,
                img18,
                img21,
                img22
            ]
        },
        {
            title: "Payments & Leave Management",
            description: [
                "Student fee payment & status tracking.",
                "Online leave application for students & teachers.",
                "Emergency leave reporting system."
            ],
            images: [img25, img7, img15]
        },
        {
            title: "Admin ID Card, Events & Calendar",
            description: [
                "Multi-template ID card generator for students & teachers.",
                "Bulk ID card generation with minimal input.",
                "Yearly academic calendar generator.",
                "Event creation & publishing."
            ],
            images: [img52, img53, img37, img29]
        },
        {
            title: "Notice, News & Website Control",
            description: [
                "Notice publishing system.",
                "Homepage news slider control.",
                "Banner, about & slider customization.",
                "School activity content management."
            ],
            images: [img39, img26, img40, img51, img41]
        },
        {
            title: "Student & Attendance Management",
            description: [
                "Student list filtering by class, section and shift.",
                "Teacher-submitted attendance with SMS alerts.",
                "Student profile editing and deletion.",
                "Payment and attendance linkage."
            ],
            images: [img47, img31, img32, img35, img46, img24, img36, img42, img43, img27]
        },
        {
            title: "Academic & Result Processing",
            description: [
                "Exam term & subject creation.",
                "Automatic GPA and grade calculation.",
                "Class routine generator.",
                "Certificate generation."
            ],
            images: [img33, img50, img38, img45]
        },
        {
            title: "Fees, Salary & Staff Control",
            description: [
                "Class-wise yearly fee configuration.",
                "Staff salary & employment management.",
                "Teacher & staff salary publishing.",
                "Attendance schedule configuration."
            ],
            images: [img30, img44, img49, img34]
        }
        ,
        {
            title: "Attendance & Reporting From Mobile App",
            description: [
                "Mobile - based student attendance system.",
                "Real - time attendance synchronization.",
                "Parent SMS alerts for absentee students."
            ],
            images: []
        }, {
            title: "Result Entry & Student Monitoring From Mobile App",
            description: [
                "Term - wise and subject - wise result entry.",
                "Auto GPA & grade calculation.",
                "Full student academic profile view."
            ],
            images: []
        }
    ],

    technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication"
    ],

    links: [
        {
            label: "School Website Live",
            url: "https://astha-education-management-system.netlify.app/Kamalapur%20High%20School"
        },
        {
            label: "Admin Panel Live",
            url: "https://astha-education-management-amin-panel.netlify.app/Kamalapur%20High%20School/admin"
        }
    ],

    demoAccounts: {
        admin: { email: "sm@gmail.com", password: "123456" },
        teacher: { email: "kamalapur@gmail.com", password: "123456" },
        student: { email: "sayed@gmail.com", password: "123456" }
    }
};

export default SchoolManagementSystemData;
