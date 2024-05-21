import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Roomsframe from "pages/Roomsframe";
import Login from "pages/Login";
import Topicsframe from "pages/Topicsframe";
import Createnewroom from "pages/Createnewroom";
import Messagesframe from "pages/Messagesframe";
import Settingsframe from "pages/Settingsframe";
import Hompage from "pages/Hompage";
import SignupOne from "pages/SignupOne";
import SignupTwo from "pages/SignupTwo";
import SignupThree from "pages/SignupThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Hompage /> },
    { path: "*", element: <NotFound /> },
    { path: "/topics/:topicId", element: <Roomsframe /> },
    { path: "createnewroom", element: <Createnewroom /> },
    { path: "hompage", element: <Hompage /> },
    { path: "signupone", element: <SignupOne /> },
    { path: "signuptwo", element: <SignupTwo /> },
    { path: "signupthree", element: <SignupThree /> },
    { path: "/topics/:topicId/:roomId", element: <Messagesframe /> },
    { path: "settingsframe", element: <Settingsframe /> },
    { path: "/topics", element: <Topicsframe /> },
    { path: "login", element: <Login /> },
  ]);

  return element;
};

export default ProjectRoutes;
