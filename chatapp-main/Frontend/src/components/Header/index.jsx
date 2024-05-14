import React from "react";
import { Img, Text, Heading } from "./..";

export default function Header({ ...props }) {
  // Exemple d'objet utilisateur avec des informations dynamiques
  const user = {
    name: "Sersar Amine mohammed ",
    role: "User expert",
    avatar: "images/logo 2i.jpg",
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
              <Heading as="h6" className="!font-poppins !font-semibold !text-gray-50">
                {user.name}
              </Heading>
              <div className="flex items-center gap-[3px]">
                <Text as="p" className="!font-poppins !text-gray-50">
                  {user.role}
                </Text>
              </div>
            </div>
            <a href="#">
              <Img src={user.avatar} alt="profile image" className="h-[40px] w-[60px] rounded-[50%]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
