import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading, TextArea, Text } from "../../components";
import Header from "../../components/Header";

export default function SettingsframePage() {
  return (
    <>
      <Helmet>
        <title>User Settings - Manage Your Profile and Privacy</title>
        <meta
          name="description"
          content="Access your user settings to update personal information, privacy preferences, and account security. Manage your first name, last name, email, and password with ease."
        />
      </Helmet>

      {/* settings section */}
      <div className="flex w-full flex-col justify-center gap-[59px] bg-gray-50 pb-[151px] md:pb-5 sm:gap-[29px]">
        {/* user profile section */}
        <div>
          {/* header section */}
          <Header className="bg-gradient" />
        </div>
        <div className="ml-[89px] flex w-[85%] md:ml-0 md:w-full md:p-5">
          <div className="flex w-full flex-col items-start">
            <Text size="lg" as="p" className="!text-black-900">
              Settings
            </Text>
            <div className="container-xs mt-[37px] pl-[88px] pr-[68px] md:p-5 md:px-5">
              <div className="flex flex-wrap justify-between gap-5">
                <Heading size="md" as="h1" className="self-start">
                  User informations
                </Heading>
                <a href="Privacy" target="_blank" rel="noreferrer" className="self-end">
                  <Heading size="md" as="h2">
                    Privacy
                  </Heading>
                </a>
              </div>
            </div>
            <div className="mt-[9px] h-[2px] w-[51%] bg-gray-300_01" />
            <div className="mt-[31px] flex justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[46%] justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex w-[44%] flex-col items-start gap-1.5 sm:w-full">
                  <Heading as="h3">First name</Heading>
                  <Input
                    shape="round"
                    name="First Name Field"
                    placeholder={`Mohammed el amine`}
                    className="self-stretch border border-solid border-blue_gray-100 font-poppins sm:pr-5"
                  />
                </div>
                <div className="flex w-[44%] flex-col items-start gap-1.5 sm:w-full">
                  <Heading as="h4">Last name</Heading>
                  <Input
                    shape="round"
                    name="Last Name Field"
                    placeholder={`Sersar `}
                    className="self-stretch border border-solid border-blue_gray-100 font-poppins sm:pr-5"
                  />
                </div>
              </div>
              <div className="flex w-[26%] flex-col items-start gap-1.5 md:w-full">
                <Heading as="h5">Email</Heading>
                <Input
                  color="gray_50"
                  shape="round"
                  type="email"
                  name="Email Field"
                  placeholder={`Sersaramine@gmail.com`}
                  prefix={
                    <Img
                      src="images/img_message_24_outline.svg"
                      alt="message / 24 / outline"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  className="gap-2 self-stretch border border-solid border-blue_gray-100 font-poppins sm:pr-5"
                />
              </div>
            </div>
            <div className="mt-[49px] flex items-start justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[60%] flex-col items-start gap-1.5 md:w-full">
                <Heading as="h6">About me</Heading>
                <TextArea
                  shape="round"
                  name="About Me Field"
                  placeholder={`I’m web designer, I work in programs like figma, adobe photoshop, adobe illustrator`}
                  className="w-[76%] !border-blue_gray-100 font-poppins leading-6 text-blue_gray-900 sm:py-5"
                />
              </div>
              <div className="mt-1.5 flex w-[26%] flex-col items-start gap-1.5 md:w-full">
                <Heading as="h6">Password</Heading>
                <Input
                  shape="round"
                  type="password"
                  name="Password Field"
                  placeholder={`**********************`}
                  prefix={<Img src="images/img_svg.svg" alt="svg" className="h-[24px] w-[24px]" />}
                  className="gap-2 self-stretch border border-solid border-blue_gray-100 font-poppins sm:pr-5"
                />
              </div>
            </div>
            <div className="mt-[30px] flex w-[91%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="flex w-[48%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <Img
                  src="images/img_avatar_image.png"
                  alt="avatar image"
                  className="h-[57px] w-[16%] rounded-[24px] object-cover sm:w-full"
                />
                <Button color="indigo_900" size="xs" shape="round" className="min-w-[304px] font-bold sm:px-5">
                  Upload new avatar
                </Button>
              </div>
              <Button
                color="indigo_900"
                size="xs"
                className="mb-[7px] min-w-[139px] self-end rounded-[7px] font-bold !text-white-A700"
              >
                Reset password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
