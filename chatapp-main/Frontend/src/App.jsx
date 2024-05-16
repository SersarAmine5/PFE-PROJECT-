import React from "react";
import ProjectRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./contexts/user.context";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <ProjectRoutes />
      </UserContextProvider>
    </Router>
  );
}

export default App;
