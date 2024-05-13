import React from "react";
import { Text, Img } from "..";

export default function Footer({ className }) {
  return (
    <footer className={`${className} self-stretch mt-24 bg-white-A700`}>
      <div className="flex w-full justify-center bg-gradient1 pb-12 pt-10 md:py-5">
        <div className="container-xs flex justify-center px-5 md:px-5">
          <div className="flex w-full flex-col items-center text-center">
            <Img
              src="images/img_image_removebg_preview.png"
              alt="brand image"
              className="h-30 w-1/3 object-cover"
            />
            <div className="flex justify-center items-center pt-16 md:pt-5 space-x-4">
              {" "}
              {/* Adjusted for horizontal layout */}
              <a href="/features" target="_blank" rel="noopener noreferrer">
                <Text as="p">Features</Text>
              </a>
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                <Text as="p">Privacy</Text>
              </a>
              <a href="/help" target="_blank" rel="noopener noreferrer">
                <Text as="p">Help</Text>
              </a>
            </div>
            <Text as="p" className="ml-4 mt-[20px]">
              {" "}
              {/* Added margin for separation */}© 2021 Flex. All rights
              reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
