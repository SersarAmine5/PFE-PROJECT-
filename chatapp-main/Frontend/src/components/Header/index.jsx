import React, { useState } from 'react';
import { Img, Text, Heading } from './..';
import { useUserContext } from './../../contexts/user.context';
import { useNavigate } from "react-router-dom"; 

export default function Header({ ...props }) {
  const { user, isLogedIn, isLoading, logout } = useUserContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  // Fonction pour obtenir les initiales du nom complet
  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase();
  };

  // Gestionnaire d'événements pour le clic sur l'avatar
  const handleAvatarClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Gestionnaire d'événements pour le clic sur "Déconnexion"
  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate('/hompage');
  };

  // Gestionnaire d'événements pour le clic sur "Paramètres"
  const handleSettings = () => {
    setMenuOpen(false);
    window.location.href = '/settingsframe';
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center pt-2 pb-2 px-3.5 sm:pb-3`}
    >
      <div className="mx-auto flex w-full max-w-[1415px] items-center justify-between gap-5 sm:flex-col">
        <Img
          src="images/img_image_removebg_preview.png"
          alt="background image"
          className="h-[60px] w-[14%] object-cover sm:w-full m-[10px]"
        />
        <div className="flex w-[18%] items-start justify-center gap-[22px] self-end py-1 sm:w-full">
          <div className="relative h-[25px] w-[15%]"></div>
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-start">
              {isLoading && "Loading"}
              <Heading
                as="h6"
                className="!font-poppins !font-semibold !text-gray-50"
              >
                {user && (user.lastname + " " + user.firstname)}
              </Heading>
              <div className="flex items-center gap-[3px]">
                <Text as="p" className="!font-poppins !text-gray-50">
                  {user && user.role}
                </Text>
              </div>
            </div>
            {user && (
              <div className="relative">
                <div
                  className="bg-gray-500 text-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
                  onClick={handleAvatarClick}
                >
                  {getInitials(user.lastname + " " + user.firstname)}
                </div>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button
                      onClick={handleSettings}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Paramètres
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
