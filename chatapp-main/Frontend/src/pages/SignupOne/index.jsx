import React from "react";
import { Text, Button, Input, Img, Heading } from "../../components";
import { SelectBox } from "components/SelectBox1";
import { Helmet } from "react-helmet";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SignupOnePage() {
  return (
    <>
      <Helmet>
        <title>Personal infos</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient py-6 sm:py-3 flex justify-center">
          <Img
            src="images/img_image_removebg_preview.png"
            alt="header image"
            className="h-[60px] w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </div>
        <center>
          {/* Signup Form Section */}
          <div className="flex justify-center p-9 sm:p-5 bg-blue_gray-200_a5 rounded shadow-sm w-[45rem] mt-8">
            <div className="w-full max-w-md flex flex-col items-center">
              <Heading as="h1" className="text-4xl text-indigo-900 mb-5">
                Sign up
              </Heading>

              {/* Form Fields */}
              <Input
                shape="round"
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="w-full mb-4"
              />
              <Input
                shape="round"
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className="w-full mb-4"
              />
              <SelectBox
                shape="round"
                name="year"
                placeholder="Gender"
                options={dropDownOptions}
                className="w-full mb-4"
              />
              <div className="flex w-full gap-3 mb-4">
                <SelectBox
                  shape="round"
                  name="day"
                  placeholder="DD"
                  options={dropDownOptions}
                  variant="fill"
                  size="xs"
                  color="white_A700"
                  className=""
                />
                <SelectBox
                  shape="round"
                  name="month"
                  placeholder="MM"
                  options={dropDownOptions}
                  className="w-1/3"
                />
                <SelectBox
                  shape="round"
                  name="year"
                  placeholder="YYYY"
                  options={dropDownOptions}
                  className="w-1/3"
                />
              </div>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Email Address*"
                className="w-full mb-4"
              />
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder="Password*"
                className="w-full mb-4"
              />
              <Input
                shape="round"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password*"
                className="w-full mb-4"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="flex items-center ">
                  I agree to Headspace's Terms & Conditions and acknowledge the
                  Privacy Policy.
                </label>
              </div>

              {/* Signup Button */}
              <div className="flex justify-center mt-[50px] w-full">
                <Button
                  className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  variant="fill"
                  color="blue_500"
                  shape="round"
                  size="md"
                >
                  Create an account
                </Button>
              </div>

              {/* Already have an account */}
              <Text size="md" as="p" className="mt-4 text-center">
                Already have an account?{" "}
                <span className="text-blue-400 cursor-pointer">Login</span>
              </Text>
            </div>
          </div>

          {/* Footer */}
        </center>
      </div>
    </>
  );
}
