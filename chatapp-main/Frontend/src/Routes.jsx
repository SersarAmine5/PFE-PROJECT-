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
import { Table } from "@chakra-ui/react";
import UserTable from "pages/Table";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Hompage /> },
    { path: "*", element: <NotFound /> },
<<<<<<< Updated upstream
    { path: "roomsframe", element: <Roomsframe /> },
    { path: "createnewroom", element: <Createnewroom /> },
=======
    { path: "/topics/:topicId", element: <Roomsframe /> },
    // { path: "createnewroom", element: <Createnewroom /> },
    { path: "/topics/:topicId/new", element: <Createnewroom /> },
>>>>>>> Stashed changes
    { path: "hompage", element: <Hompage /> },
    { path: "signupone", element: <SignupOne /> },
    { path: "signuptwo", element: <SignupTwo /> },
    { path: "signupthree", element: <SignupThree /> },
    { path: "messagesframe", element: <Messagesframe /> },
    { path: "settingsframe", element: <Settingsframe /> },
    { path: "topicsframe", element: <Topicsframe /> },
    { path: "login", element: <Login /> },
    { path: "users", element: <UserTable /> }
  ]);

  return element;
};

export default ProjectRoutes;
