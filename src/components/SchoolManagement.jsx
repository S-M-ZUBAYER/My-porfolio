import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';

import img1 from "../assets/Student Management System/site/Banner.jpg"
import img2 from "../assets/Student Management System/site/about.jpg"
import img3 from "../assets/Student Management System/site/count.jpg"
import img4 from "../assets/Student Management System/site/review.jpg"
import img5 from "../assets/Student Management System/site/footer.jpg"
import img6 from "../assets/Student Management System/site/allStudent.jpg"
import img7 from "../assets/Student Management System/site/payment.jpg"
import img8 from "../assets/Student Management System/site/result.jpg"
import img9 from "../assets/Student Management System/site/activity.jpg"
import img10 from "../assets/Student Management System/site/activityDetails.jpg"
import img11 from "../assets/Student Management System/site/admission.jpg"
import img12 from "../assets/Student Management System/site/atdance.jpg"
import img13 from "../assets/Student Management System/site/calender.jpg"
import img14 from "../assets/Student Management System/site/classRoutine.jpg"
import img15 from "../assets/Student Management System/site/leaveApp.jpg"
import img16 from "../assets/Student Management System/site/admissionStatus.jpg"
import img17 from "../assets/Student Management System/site/salaryStatus.jpg"
import img18 from "../assets/Student Management System/site/notice.jpg"
import img19 from "../assets/Student Management System/site/slider.jpg"
import img20 from "../assets/Student Management System/site/StudentInfo.jpg"
import img21 from "../assets/Student Management System/site/team2.jpg"
import img22 from "../assets/Student Management System/site/team.jpg"
import img23 from "../assets/Student Management System/site/tcrProfile.jpg"
import img24 from "../assets/Student Management System/site/tcrAtnd.jpg"
import img25 from "../assets/Student Management System/site/contact.jpg"
import img26 from "../assets/Student Management System/admin/addAdmissionInfo.jpg"
import img27 from "../assets/Student Management System/admin/addClass.jpg"
import img28 from "../assets/Student Management System/admin/addClass.jpg"
import img29 from "../assets/Student Management System/admin/addEvent.jpg"
import img30 from "../assets/Student Management System/admin/addSalary.jpg"
import img31 from "../assets/Student Management System/admin/addStaff.jpg"
import img32 from "../assets/Student Management System/admin/addStudent.jpg"
import img33 from "../assets/Student Management System/admin/addTermSub.jpg"
import img34 from "../assets/Student Management System/admin/allStaff.jpg"
import img35 from "../assets/Student Management System/admin/allStudent.jpg"
import img36 from "../assets/Student Management System/admin/atnd.jpg"
import img37 from "../assets/Student Management System/admin/calenderData.jpg"
import img38 from "../assets/Student Management System/admin/certificate.jpg"
import img39 from "../assets/Student Management System/admin/dashboard.jpg"
import img40 from "../assets/Student Management System/admin/notice.jpg"
import img41 from "../assets/Student Management System/admin/noticeInput.jpg"
import img42 from "../assets/Student Management System/admin/payment.jpg"
import img43 from "../assets/Student Management System/admin/paymentInput.jpg"
import img44 from "../assets/Student Management System/admin/paymentSumery.jpg"
import img45 from "../assets/Student Management System/admin/result.jpg"
import img46 from "../assets/Student Management System/admin/setTime.jpg"
import img47 from "../assets/Student Management System/admin/showAdmission.jpg"
import img49 from "../assets/Student Management System/admin/showSalary.jpg"
import img50 from "../assets/Student Management System/admin/showTermSub.jpg"
import img51 from "../assets/Student Management System/admin/siteManagement.jpg"
import img52 from "../assets/Student Management System/admin/stdId.jpg"
import img53 from "../assets/Student Management System/admin/tcrId.jpg"
import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';

const SchoolManagement = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const mainSiteImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25]
    const adminImg = [img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img49, img50, img51, img52, img53]
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
                Astha Education Management System
            </h1>
            <h2 className="text-white font-semibold text-3xl">
                Overview:
            </h2>
            <p className="my-5">This website is designed to serve both teachers and students, acting as a comprehensive digital platform for schools. It streamlines various processes, eliminating the need for traditional pen-and-paper methods. From student applications to result publication, this website offers a wide range of features, making school operations more efficient.

                One significant aspect of this website is its ability to replicate itself for different schools with ease. Each school's website operates as a distinct and customized platform tailored to that specific institution. That's mean a important part of this website that this website can make clone website for another school easily. And every school site work as a unique site for this particular school.

                The platform consists of three core applications: a school website dedicated to serving students and teachers, an admin panel for storing data and facilitating critical school operations, and a mobile app designed for teachers. The app simplifies tasks such as taking attendance and entering grades, allowing teachers to manage their work from the convenience of their homes.
            </p>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Key Features:
            </h2>
            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Shool Management System:-
            </h3>
            <p className="text-base font-medium">
                <br /> 1. Schools can display their admission notices, requirements, and application
                processes on this site.
                <br /> 2. Students can apply for admission to the school through this website.
                <br /> 3. Applicants can pay their application fees online if required.
                <br /> 4. Admit cards are automatically generated for students if authorized by the
                school.
                <br /> 5. Students and their parents can check their admission status.
                <br /> 6. All students can create personal profiles on this website.
                <br /> 7. Students can access and check their term results online if published by the
                school.
                <br /> 8. Daily class attendance is available for students to view.
                <br /> 9. Updated class routines can be accessed from the site.
                <br /> 10. All students, teachers, and parents can view various school activities if
                uploaded by the school.
                <br /> 11. Parents can share valuable reviews on the site, and users can read these
                reviews. The admin monitors reviews to prevent intentional negative
                feedback.
                <br /> 12. All student results and attendance sheets are accessible. Any student and
                parents can see the student results and attendance list.
                <br /> 13. Schools can update their "About" section and images.
                <br /> 14. Schools can customize slider images for the school website home page.
                <br /> 15. The homepage features a news slider for important announcements. Anyone
                can see and check.
                <br /> 16. There's a notice bar for students, parents, and teachers also available in this
                site.
                <br /> 17. Information on the management panel, principal, teachers, and staff is
                available. Any user can see the short description of these people.
                <br /> 18. Users can view the academic calendar created by the school.
                <br /> 19. Teachers can access their profiles.
                <br /> 20. Teachers can check their salary status if salary information is uploaded.
                <br /> 21. Teachers can submit daily attendance and can write reports for emergencies
                need to leave.
                <br /> 22. Students can check payment status and make payments from this site.
                <br /> 23. Students and teachers can submit leave applications.
                <br /> 24. Students can download class routines.
                <br />22. This website is a single-page application.

            </p>
            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Admin Panel Dashboard:-
            </h3>
            <p className="text-base font-medium">
                <br /> 26. Admin can create student, teacher, and staff ID cards with four design
                categories.
                <br /> 27. ID cards are generated automatically with minimal information. Admin
                inputs some information then the ID card will be generated automatically.
                <br /> 28. Admins can post notices on the website.
                <br /> 29. Notices can also be added to the homepage news slider.
                <br /> 30. Admins can update the school's "About" paragraph, banner picture, slider
                images, and more.
                <br /> 31. Admins can add school activities.
                <br /> 32. Academic calendars with event names can be created by using this site.
                <br /> 33. Admins can view and search student lists by class, section, shift, or name.
                <br /> 34. Teachers can take daily attendance, store records, and send SMS
                notifications for absent students to their parents.
                <br /> 35. Admins can edit or delete student information.
                <br /> 36. Individual student details pages display an overview of attendance, payment
                status, and results.
                <br /> 37. Admins or teachers can add and calculate subject results, with grades and
                averages shown on the main website.
                <br /> 38. Admins can add classes, sections, and shifts.
                <br /> 39. New student information can be added.
                <br /> 40. Yearly costs for each class, section, and shift are easily managed. Just add in
                here. This cost will show individual student according to their class name,
                section name, and shift.
                <br /> 41. Admins can add exam terms and subjects.
                <br /> 42. Admins can create class routines based on class, section, and shift.
                <br /> 43. Admins can add admission notices and requirements.
                <br /> 44. Admins can review application lists and applicant profiles.
                <br /> 45. Admins can generate three types of certificates for students: transfer,
                character, and course completion certificates.
                <br /> 46. Admins can manage staff information, lists, and salary statuses.
                <br /> 47. Admins can add salary statuses for teachers and staff.
                <br /> 48. Admins can add new teacher information.
                <br /> 49. Admins can set teacher attendance times.

            </p>


            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Shool Management System App For Teacher:-
            </h3>
            <p className="text-base font-medium">
                <br />51. Here also have an app for taking student attendance, displaying attendance
                lists.
                <br />52. Teachers can input term and subject results from school or home.
                <br />53. Results are calculated automatically, including grades and averages.
                <br />54. Teachers can take attendance, send SMS notifications to absent students'
                parents.
                <br />55. Teachers can view student overviews from the mobile app.
            </p>

            <h2 className="text-white mt-12 font-semibold text-3xl">
                Technologies:
            </h2>
            <p> HTML,CSS,Tailwind CSS, JavaScript, React js, Node js,jwt token, Express JS, Mongoose, MongoDB and more.</p>
            {/* <p className="my-5">jlajlfdsjadljlsajsdfkj</p> */}
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Link:
            </h2>

            <button className="flex" onClick={() => handleToLiveLink("https://astha-education-management-system.netlify.app/Kamalapur%20High%20School")}>
                <p className="my-3 text-blue-600 font-bold text-lg">School Website Live Site: <span className="font-medium ">https://astha-education-management-system.netlify.app/Kamalapur%20High%20School</span></p>

            </button>
            <button className="flex" onClick={() => handleToLiveLink("https://astha-education-management-amin-panel.netlify.app/Kamalapur%20High%20School/admin")}>
                <p className="my-3 text-blue-600 font-bold text-lg">Admin Panel Live Site: <span className=" font-medium ">https://astha-education-management-amin-panel.netlify.app/Kamalapur%20High%20School/admin</span></p>

            </button>

            <h2 className="text-white mt-12 font-semibold text-3xl">
                Account:
            </h2>
            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Admin:-
            </h3>
            <p className="my-5">Email: <span>sm@gmail.com</span></p>
            <p className="my-5">Password: <span>123456</span></p>

            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Teacher:-
            </h3>
            <p className="my-5">Email: <span>kamalapur@gmail.com </span></p>
            <p className="my-5">Password: <span>123456</span></p>

            <h3 className=" text-lime-300 mt-4 font-semibold text-xl underline">
                Student:-
            </h3>
            <p className="my-5">Email: <span>sayed@gmail.com </span></p>
            <p className="my-5">Password: <span>123456</span></p>

            <h2 className="text-white mt-12 font-semibold text-3xl">
                School Website Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                {mainSiteImg && mainSiteImg.length > 0 && mainSiteImg?.map((perImg, index) => {
                    return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                })
                }

            </div>
            <h2 className="text-white mt-12 font-semibold text-3xl">
                Admin Gallery:
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-5">
                {adminImg && adminImg.length > 0 && adminImg?.map((perImg, index) => {
                    return <img key={index} src={perImg} alt="" onClick={() => openImageModal(perImg)} />
                })
                }


            </div>
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

export default SchoolManagement;