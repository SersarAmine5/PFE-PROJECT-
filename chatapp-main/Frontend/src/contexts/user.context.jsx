import React from "react";
import axios from "axios";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [isLogedIn, setIsLogedIn] = React.useState(undefined);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(async () => {
    // Le code ci dessous se declenchera une seule fois au premier chargement de l'application

    try {
      const response = await axios.get(
        `http://localhost:8800/api/auth/authenticated-user`,
        { withCredentials: true }
      );

      if (user !== null) {
        setUser(response.data);
        setIsLogedIn(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLogedIn(false);
        setIsLoading(false);
      }
    } catch {
      setUser(null);
      setIsLogedIn(false);
      setIsLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (user !== null) {
        setUser(response.data);
        setIsLogedIn(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLogedIn(false);
        setIsLoading(false);
      }
    } catch {
      setUser(null);
      setIsLogedIn(false);
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, isLogedIn, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  return context;
};
