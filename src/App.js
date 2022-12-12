import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CricketLover from "./components/CricketLover";
import Experience from "./components/Experience";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Kidspace from "./components/Kidspace";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import StudyZone from "./components/StudyZone";

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
