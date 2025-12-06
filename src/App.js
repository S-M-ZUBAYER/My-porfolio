import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/HomePage/About";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/HomePage/Contact";
import CricketLover from "./components/detailsPages/CricketLover";
import Experience from "./components/HomePage/Experience";
import Home from "./components/HomePage/Home";
import HomePage from "./components/HomePage/HomePage";
import Kidspace from "./components/detailsPages/Kidspace";
import Main from "./components/SharedPage/Main";
import NavBar from "./components/SharedPage/NavBar";
import Portfolio from "./components/HomePage/Portfolio";
import SocialLinks from "./components/SharedPage/SocialLinks";
import StudyZone from "./components/detailsPages/StudyZone";
import THT_Space from "./components/detailsPages/THT-Space";
import SchoolManagement from "./components/detailsPages/SchoolManagement";
import GrozzieeApp from "./components/detailsPages/GrozzieeApp";
import GrozziieOnlinePrinter from "./components/detailsPages/GrozziieOnlinePrinter";
import AfterSalesManagement from "./components/detailsPages/AfterSalesManagement";
import ExportImportSystem from "./components/detailsPages/ExportImportSystem";
import WowoMartManagement from "./components/detailsPages/WowoMartManagement";
import TaskManagementSystem from "./components/detailsPages/TaskManagementSystem";
import FaceAttendanceManagementSystem from "./components/detailsPages/FaceAttendanceManagementSystem";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        }
        ,
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/kidspace',
          element: <Kidspace></Kidspace>
        },
        {
          path: '/cricketLover',
          element: <CricketLover></CricketLover>
        },
        {
          path: '/studyZone',
          element: <StudyZone></StudyZone>
        },
        {
          path: '/Customer_Management_System',
          element: <THT_Space></THT_Space>
        },
        {
          path: '/GrozzieeApp',
          element: <GrozzieeApp></GrozzieeApp>
        },
        {
          path: '/School_Management_System',
          element: <SchoolManagement></SchoolManagement>
        },
        {
          path: '/Export_Import_Management_system',
          element: <ExportImportSystem></ExportImportSystem>
        },
        {
          path: '/grozziie_online_Printing',
          element: <GrozziieOnlinePrinter></GrozziieOnlinePrinter>
        },
        {
          path: '/AfterSales_Management_System',
          element: <AfterSalesManagement></AfterSalesManagement>
        },
        {
          path: '/WowoMart_Management_System',
          element: <WowoMartManagement></WowoMartManagement>
        },
        {
          path: '/Task_Management_System',
          element: <TaskManagementSystem></TaskManagementSystem>
        },
        {
          path: '/Face_Attendance_Management_System',
          element: <FaceAttendanceManagementSystem></FaceAttendanceManagementSystem>
        },
      ]
    }

  ])
  return (

    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
      {/* <NavBar />

      <Home />

      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks /> */}

    </div>


  );
}

export default App;
