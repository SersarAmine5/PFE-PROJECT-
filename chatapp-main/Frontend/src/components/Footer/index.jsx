import React from "react";
import { Text, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} self-stretch mt-[246px] bg-white-A700`}>
      <div className="flex w-full justify-center bg-gradient1 pb-[127px] pt-[109px] md:py-5">
        <div className="container-xs flex justify-center pl-[237px] pr-[234px] md:p-5 md:px-5">
          <div className="flex w-full flex-col items-center">
            <Img
              src="images/img_image_removebg_preview.png"
              alt="brand image"
              className="h-[122px] w-[36%] object-cover"
            />
            <div className="relative mt-[-109px] flex flex-col items-start justify-center pt-[157px] md:pt-5">
              <a href="Product" target="_blank" rel="noreferrer">
                <Text as="p">Product</Text>
              </a>
              <a href="Careers" target="_blank" rel="noreferrer" className="mr-[216px] mt-[125px] self-end md:mr-0">
                <Text as="p">Careers</Text>
              </a>
              <a href="Features" target="_blank" rel="noreferrer" className="ml-[127px] mt-[125px] md:ml-0">
                <Text as="p">Features</Text>
              </a>
              <a href="Resources" target="_blank" rel="noreferrer" className="mt-[125px] self-center">
                <Text as="p">Resources</Text>
              </a>
              <a href="Privacy" target="_blank" rel="noreferrer" className="mt-[127px] self-end">
                <Text as="p">Privacy</Text>
              </a>
              <a href="Pricing" target="_blank" rel="noreferrer" className="ml-[263px] mt-[127px] md:ml-0">
                <Text as="p">Pricing</Text>
              </a>
              <a href="Help" target="_blank" rel="noreferrer" className="mr-[122px] mt-[127px] self-end md:mr-0">
                <Text as="p">Help</Text>
              </a>
              <Text as="p" className="mt-[210px] self-center">
                © 2021 Flex. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
