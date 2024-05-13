import React from "react";
import { Img, Text, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center pt-3.5 pb-[37px] px-3.5 sm:pb-5`}
    >
      <div className="mx-auto flex w-full max-w-[1415px] items-center justify-between gap-5 sm:flex-col">
        <Img
          src="images/img_image_removebg_preview.png"
          alt="background image"
          className="h-[99px] w-[17%] object-cover sm:w-full"
        />
        <div className="mb-[7px] flex w-[18%] items-start justify-center gap-[22px] self-end py-1.5 pl-1.5 sm:w-full">
          <div className="relative mt-[5px] h-[31px] w-[15%]">
            <a href="#">
              <Img
                src="images/img_user.svg"
                alt="user icon"
                className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[24px] w-[24px]"
              />
            </a>
            <Text
              as="p"
              className="absolute right-[-0.63px] top-[0.00px] m-auto flex items-center justify-center rounded-md bg-red-500 px-1.5 py-px !font-roboto !text-white-A700"
            >
              8
            </Text>
          </div>
          <div className="flex flex-1 items-center justify-between gap-5">
            <div className="flex flex-col items-end">
              <Heading as="h6" className="!font-poppins !font-semibold !text-gray-50">
                SERSAR AMINE
              </Heading>
              <div className="flex items-center gap-[3px]">
                <Text as="p" className="!font-poppins !text-gray-50">
                  User expert
                </Text>
                <Img src="images/img_frame.svg" alt="verification badge" className="h-[15px] w-[15px] self-start" />
              </div>
            </div>
            <a href="#">
              <Img src="images/img_avatar_image.png" alt="profile image" className="h-[48px] w-[48px] rounded-[50%]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
