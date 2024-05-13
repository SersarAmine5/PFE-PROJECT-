import React from "react";
import { Text, Button, Input,Img, Heading } from "../../components";
import Footer from "../../components/Footer1";
import { SelectBox } from "components/SelectBox1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SignupOnePage() {
  return (
    <div className="bg-white-A700 py-8 sm:py-5">
      {/* Header Section */}
      <div className="bg-gradient py-6 sm:py-3 flex justify-center">
        <Img
          src="images/img_image_removebg_preview.png"
          alt="header image"
          className="w-1/5 sm:w-full"
        />
      </div>

      {/* Signup Form Section */}
      <div className="flex justify-center p-9 sm:p-5 bg-blue_gray-200_a5 rounded shadow-sm">
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
          <Input
            shape="round"
            name="gender"
            placeholder="Gender*"
            suffix={<Img src="images/img_arrowright.svg" alt="arrow right" />}
            className="w-full mb-4"
          />
          <div className="flex w-full gap-3 mb-4">
            <SelectBox
              shape="round"
              name="day"
              placeholder="DD"
              options={dropDownOptions}
              className="w-1/3"
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

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 border border-gray-600 bg-white rounded-sm"></div>
            <Text size="xs" as="p" className="text-black leading-5">
              I agree to Headspace’s{" "}
              <span className="text-blue-400">Terms & Conditions</span>
              and acknowledge the{" "}
              <span className="text-blue-400">Privacy Policy.</span>
            </Text>
          </div>

          {/* Signup Button */}
          <Button
            variant="gradient"
            shape="round"
            className="w-full py-3 rounded-lg font-bold text-lg"
          >
            Create an account
          </Button>

          {/* Already have an account */}
          <Text size="md" as="p" className="mt-4 text-center">
            Already have an account?{" "}
            <span className="text-blue-400 cursor-pointer">Sign in</span>
          </Text>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
