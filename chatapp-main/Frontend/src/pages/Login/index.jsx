import React from "react";
import { Helmet } from "react-helmet";
import { Button, CheckBox, Text, Input, Img, Heading } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>MERN STACK</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[73px] bg-white-A700 pb-[76px] md:gap-[54px] md:pb-5 sm:gap-9">
        <div>
          {/* header section */}
          <div className="flex justify-center bg-gradient py-[15px]">
            <div className="container-xs mt-[29px] flex justify-center px-[639px] md:p-5 md:px-5">
              <Img
                src="images/img_image_removebg_preview.png"
                alt="imageremovebg"
                className="h-[122px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
        </div>

        {/* login form section */}
        <div className="ml-[98px] flex w-[84%] items-start justify-between gap-5 md:ml-0 md:w-full md:flex-col md:p-5">
          <Img
            src="images/img_signup_svg_1_1.png"
            alt="signupsvg1one"
            className="h-[750px] w-[750px] object-cover md:w-full"
          />
          <div className="mt-[77px] flex w-[38%] justify-center rounded bg-blue_gray-200_a5 p-2 shadow-sm md:w-full">
            <div className="mb-[30px] mt-[27px] flex w-full flex-col items-center">
              <a href="#">
                <Heading as="h1" className="text-center !text-[36.25px] tracking-[-2.20px]">
                  Log in
                </Heading>
              </a>
              <Text size="xs" as="p" className="mt-[17px] !text-[15.13px] !text-gray-700_01">
                <span className="text-gray-700_01">New to Headspace? </span>
                <span className="text-blue-A400">Sign up for free</span>
              </Text>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={`Email address*`}
                className="mt-[37px] self-stretch sm:pr-5"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder={`Password (8+ characters)*`}
                suffix={<Img src="images/img_svg.svg" alt="svg" className="h-[28px] w-[28px]" />}
                className="mt-[21px] gap-[35px] self-stretch"
              />
              <a href="#" className="mr-[33px] mt-[13px] self-end md:mr-0">
                <Text size="xs" as="p" className="!text-[15.13px] !text-blue-A400">
                  Forgot password?
                </Text>
              </a>
              <CheckBox
                name="labelinputterms"
                label="I agree to Headspace’s Terms & Conditions and acknowledge the 
Privacy Policy."
                id="labelinputterms"
                className="ml-4 mt-11 gap-[18px] self-start text-left text-[13.34px] leading-5 text-black-900 md:ml-0"
              />
              <Button
                size="md"
                variant="gradient"
                shape="round"
                color="light_blue_800_indigo_900_05"
                className="mt-[54px] w-full !rounded-[24px] font-bold sm:px-5"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
