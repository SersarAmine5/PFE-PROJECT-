import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import SignUpTwoRowtags from "../../components/SignUpTwoRowtags";
import Header from "../../components/Header";

const data = [
  {
    dynamicproperty1: "Tags",
    dynamicproperty2: "Tags",
    dynamicproperty3: "Tags",
    dynamicproperty4: "Tags",
    dynamicproperty5: "Tags",
  },
  {
    dynamicproperty1: "Tags",
    dynamicproperty2: "Tags",
    dynamicproperty3: "Tags",
    dynamicproperty4: "Tags",
    dynamicproperty5: "Tags",
  },
  {
    dynamicproperty1: "Tags",
    dynamicproperty2: "Tags",
    dynamicproperty3: "Tags",
    dynamicproperty4: "Tags",
    dynamicproperty5: "Tags",
  },
];

export default function SignupTwoPage() {
  return (
    <>
      <Helmet>
        <title>Select Your Interests - Tailor Your Headspace Experience</title>
        <meta
          name="description"
          content="Set up your Headspace account by choosing your fields of interest. Customize your experience to get the most out of your mindfulness journey."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[67px] bg-white-A700 pb-[73px] md:pb-5 sm:gap-[33px]">
        {/* header section */}
      <Header />
        <div className="flex justify-center self-stretch bg-gradient pb-[19px] pt-[18px]">
          <div className="container-xs flex justify-center pl-[529px] pr-[528px] md:p-5 md:px-5">
            <Img
              src="images/img_image_removebg_preview.png"
              alt="background removed image"
              className="h-[114px] w-full object-cover md:h-auto"
            />
          </div>
        </div>
        <div className="container-xs px-[110px] md:p-5 md:px-5">
          {/* interest selection section */}
          <div className="flex justify-center rounded bg-blue_gray-200_a5 px-[35px] pb-8 pt-[35px] shadow-sm sm:p-5">
            <div className="flex w-[82%] flex-col items-center md:w-full">
              <Heading as="h1" className="!text-[36.25px]">
                Setting up your account
              </Heading>
              <Heading size="xs" as="h2" className="mt-10 !font-plusjakartasans !text-indigo-900_04">
                Choose 5 of your feilds of intreset{" "}
              </Heading>
              <div className="mt-[73px] flex flex-col gap-[41px] self-stretch">
                {data.map((d, index) => (
                  <SignUpTwoRowtags {...d} key={"interestList" + index} />
                ))}
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  size="sm"
                  variant="gradient"
                  shape="round"
                  color="light_blue_800_indigo_900_04"
                  className="mt-[63px] min-w-[426px] !rounded-[22px] font-bold tracking-[2.16px] sm:px-5"
                >
                  Next
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
