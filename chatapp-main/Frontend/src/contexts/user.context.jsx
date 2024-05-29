import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [isLogedIn, setIsLogedIn] = React.useState(undefined);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(async () => {
    // Le code ci dessous se declenchera une seule fois au premier chargement de l'application 

    try {
      const response = await axios.get(
        `http://localhost:8800/api/auth/authenticated-user`,
        { withCredentials: true },
      );

      if (response.data !== null) {
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
        { withCredentials: true },
      );

      if (response.data !== null) {
        setUser(response.data);
        setIsLogedIn(true);
        setIsLoading(false);

        return response.data;
      } else {
        setUser(null);
        setIsLogedIn(false);
        setIsLoading(false);

        return null;
      }
    } catch {
      setUser(null);
      setIsLogedIn(false);
      setIsLoading(false);

      return null;
    }
  };
  const logout = async () => {
    try {
      // Utilisez l'URL correcte 
      await axios.post("http://localhost:8800/api/auth/logout", {}, {
        withCredentials: true,
      });
      setUser(null);
      setIsLogedIn(false);
      // navigate("/login"); // Redirige vers la page de connexion 
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLogedIn, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  return context;
};