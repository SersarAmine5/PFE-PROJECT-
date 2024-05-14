import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading, TextArea } from "../../components";
import Header from "../../components/Header";

export default function SettingsframePage() {
  const [user, setUser] = useState({
    firstName: "Mohammed el amine",
    lastName: "Sersar",
    email: "Sersaramine@gmail.com",
    aboutMe: "I’m a web designer, I work in programs like Figma, Adobe Photoshop, Adobe Illustrator",
    password: "**********************"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Helmet>
        <title>User Settings - Manage Your Profile and Privacy</title>
        <meta
          name="description"
          content="Access your user settings to update personal information, privacy preferences, and account security. Manage your first name, last name, email, and password with ease."
        />
      </Helmet>

        <Header className="bg-gradient" />
      <div className="flex w-full flex-col items-center justify-center gap-10 bg-gray-50 pb-20 md:pb-5">
        <div className="w-4/5 md:w-full md:p-5">
          <div className="flex flex-col items-center">
            <div className="container-xs mt-9 pl-20 pr-16 md:p-5 md:px-5">
              <div className="flex flex-wrap justify-between gap-5">
                
              </div>
            </div>
            <div className="mt-2 h-0.5 w-1/2 bg-gray-300_01" />

            {/* Form Fields */}
            <div className="mt-8 w-full flex flex-col items-center gap-5 md:flex-col">
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">First name</Heading>
                <Input
                  shape="round"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">Last name</Heading>
                <Input
                  shape="round"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">About me</Heading>
                <TextArea
                  shape="round"
                  name="aboutMe"
                  value={user.aboutMe}
                  onChange={handleInputChange}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h4" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">Email</Heading>
                <Input
                  color="gray_50"
                  shape="round"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  prefix={
                    <Img
                      src="images/img_message_24_outline.svg"
                      alt="message / 24 / outline"
                      className="h-6 w-6"
                    />
                  }
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h4" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">Password</Heading>
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  prefix={<Img src="images/mdpssvg.svg" alt="svg" className="h-6 w-6" />}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Button
                 className="mt-10 min-w-[250px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 variant="fill"
                 color="blue_500"
                 shape="round"
                 size="md"
                >
                  Reset password
                </Button>
              </div>
            </div>

            <div className="mt-8 w-full flex flex-col items-center gap-5 md:flex-col">
              {/* <Button
                color="indigo_900"
                size="xs"
                className="min-w-[139px] self-center rounded-2xl font-bold !text-white-A700"
              >
                Save changes
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
