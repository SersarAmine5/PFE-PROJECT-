import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading } from "../../components";
import { SelectBox} from "../../components/SelectBox/SelectBox";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SignupOnePage() {
  return (
    <>
      <Helmet>
        <title>Register Your Account - Start Your Journey with Headspace</title>
        <meta
          name="description"
          content="Create your Headspace account today. Sign up to access personalized mindfulness and meditation experiences. Start your path to better mental health."
        />
      </Helmet>

      {/* footer section */}
      <div className="flex w-full flex-col items-center gap-16 bg-white-A700 pb-[73px] md:pb-5 sm:gap-8">
        {/* header section */}
        <div className="flex justify-center self-stretch bg-gradient pb-[18px] pt-[33px] sm:pt-5">
          <div className="container-xs flex justify-center pl-[529px] pr-[528px] md:p-5 md:px-5">
            <Img
              src="images/img_image_removebg_preview.png"
              alt="background removed image"
              className="h-[99px] w-full object-cover md:h-auto"
            />
          </div>
        </div>

        {/* signup form section */}
        <div className="container-xs flex justify-center rounded bg-blue_gray-200_a5 pb-[34px] pl-9 pt-9 shadow-sm md:p-5 sm:py-5 sm:pl-5">
          <div className="flex w-full flex-col items-center">
            <Heading as="h1" className="!text-[36.25px] !text-indigo-900_01">
              Sing up
            </Heading>
            <div className="relative mt-[-2px] h-[428px] self-stretch pr-[188px] md:pr-5">
              <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[49%] flex-col items-start justify-center pb-28 pl-3 pt-[42px] md:py-5">
                <div className="flex justify-between gap-5 self-stretch sm:flex-col">
                  <Input
                    size="xs"
                    shape="round"
                    type="text"
                    name="Last Name Input"
                    placeholder={`Last name*`}
                    className="w-[40%] sm:w-full sm:pr-5"
                  />
                  <Input
                    size="xs"
                    shape="round"
                    type="text"
                    name="First Name Input"
                    placeholder={`First name*`}
                    className="w-[42%] sm:w-full sm:pr-5"
                  />
                </div>
                <Input
                  size="xs"
                  shape="round"
                  name="Gender Input"
                  placeholder={`Gender*`}
                  suffix={
                    <div className="flex h-[11px] w-[11px] items-center justify-center">
                      <Img src="images/img_arrowright.svg" alt="arrow_right" className="h-[11px] w-[11px]" />
                    </div>
                  }
                  className="mt-12 gap-[35px] self-stretch sm:pl-5"
                />
                <Text size="md" as="p" className="ml-1.5 mt-10 !text-[15.13px] !text-black-900 md:ml-0">
                  Date of birth*
                </Text>
                <div className="ml-[7px] mt-[23px] flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[7px] w-[14px]" />}
                    name="Day Dropdown"
                    placeholder={`DD`}
                    options={dropDownOptions}
                    className="w-[29%] gap-px self-end border border-solid border-gray-700 font-montserrat font-bold sm:w-full sm:px-5"
                  />
                  <div className="flex w-[60%] items-center justify-between gap-5 self-start sm:w-full">
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[9px] w-[13px]" />}
                      name="Month Dropdown"
                      placeholder={`MM`}
                      options={dropDownOptions}
                      className="w-[49%] gap-px self-start border border-solid border-gray-700 font-montserrat font-bold sm:px-5"
                    />
                    <SelectBox
                      shape="square"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[7px] w-[10px]" />}
                      name="Year Dropdown"
                      placeholder={`YYYY`}
                      options={dropDownOptions}
                      className="w-[37%] gap-px font-montserrat font-bold text-black-900 sm:px-5"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute right-[15%] top-[9%] m-auto flex w-[44%] items-center justify-between gap-5 sm:relative sm:flex-col">
                <div className="h-full w-[6px] bg-indigo-900_01 sm:h-[6px] sm:w-full" />
                <div className="flex w-[85%] flex-col gap-[21px] sm:w-full">
                  <Input
                    shape="round"
                    type="email"
                    name="Email Input"
                    placeholder={`Email adress*`}
                    className="sm:pr-5"
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="Password Input"
                    placeholder={`Password*`}
                    className="sm:pr-5"
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="Confirm Password"
                    placeholder={`Confirm password*`}
                    className="sm:pr-5"
                  />
                  <div className="flex items-start gap-[17px] sm:flex-col">
                    <div className="h-[13px] w-[16px] rounded-sm border border-solid border-gray-600 bg-white-A700" />
                    <Text
                      size="xs"
                      as="p"
                      className="mt-1.5 w-[95%] !text-[13.34px] leading-5 !text-black-900 sm:w-full"
                    >
                      <span className="text-black-900">I agree to Headspace’s </span>
                      <span className="text-blue_A400">Terms & Conditions</span>
                      <span className="text-black-900">
                        <>
                           and acknowledge the 
                          <br />
                        </>
                      </span>
                      <span className="text-blue_A400">Privacy Policy.</span>
                    </Text>
                  </div>
                </div>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  size="md"
                  variant="gradient"
                  shape="round"
                  color="light_blue_800_indigo_900_04"
                  className="absolute bottom-[0.00px] right-[30%] m-auto min-w-[568px] !rounded-[24px] font-bold tracking-[1.60px] sm:px-5"
                >
                  Create an account{" "}
                </Button>
              </a>
            </div>
            <Text size="md" as="p" className="mt-[17px] !text-[15.13px] !text-gray-700_01">
              <span className="text-gray-700_01">Already have an account</span>
              <span className="text-gray-700_01">? </span>
              <span className="text-blue_A400_01">Register now</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
