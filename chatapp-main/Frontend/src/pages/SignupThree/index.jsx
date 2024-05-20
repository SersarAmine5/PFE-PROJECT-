import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Heading, Img } from "../../components";

export default function SignupThreePage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Helmet>
        <title>Expert badge</title>
        <meta
          name="description"
          content="Join Headspace by setting up your account. Agree to terms and conditions, and become an expert to shape our community. Start your journey with us today."
        />
      </Helmet>

      <div className="flex w-full flex-col items-center gap-[38px] pb-[99px] md:pb-5">
        {/* header section */}
        <div className="flex justify-center self-stretch bg-gradient pb-[18px] pt-[33px] sm:pt-5">
          <div className="container-xs flex justify-center md:p-5 md:px-5">
            <Img
              src="images/img_image_removebg_preview.png"
              alt="header image"
              className="h-[60px] w-[150px] sm:w-[200px] md:w-[300px]"
            />
          </div>
        </div>
        {/* account setup section */}
        <div className="container-xs flex flex-col items-center gap-2 rounded bg-blue_gray-200_a5 px-[35px] pb-[31px] pt-[35px] shadow-sm md:p-5">
          <Heading as="h1" className="!text-[36.25px] mb-5 text-center mb-8">
            Setting up your account
          </Heading>
          <div className="flex w-[86%] md:w-full flex-col gap-8">
            <div className="flex w-full justify-between items-start">
              {/* left column */}
              <div className="flex flex-col w-1/2 pr-4 gap-6 ">
              <center>
                <Heading size="s" as="h2">
                  Postulez pour le badge d'Expert
                </Heading>
                
                <Text
                  size="xs"
                  as="p"
                  className="text-[13.34px] leading-8 tracking-[0.40px] text-indigo-900_04"
                >
                  En tant qu'Expert, vous aurez le privilège de créer des
                  sujets, des chats, et d'approuver de nouvelles conversations.
                  Un modérateur vérifiera vos qualifications. Si vous souhaitez
                  façonner notre communauté, appliquez maintenant ou cliquez sur
                  « Passer pour l'instant ».
                </Text>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className="flex items-center ">
                    I agree to Headspace's Terms & Conditions and acknowledge
                    the Privacy Policy.
                  </label>
                </div>
              </center>
              </div>
              {/* vertical divider */}
              <div className="border-l border-gray-300 h-full mx-4"></div>
              {/* right column */}
              <div className="flex flex-col w-1/2 pl-4 gap-6">
                <Input
                  shape="round"
                  name="Degree Input"
                  placeholder="Your highest degree*"
                  className="self-stretch sm:pr-5"
                />
                <Input
                  shape="round"
                  name="Specialization Input"
                  placeholder="Area of specialization*"
                  className="self-stretch sm:pr-5"
                />

                <label className="flex flex-col items-center w-full px-4 py-6 bg-white-A700 text-blue-500 h-13 rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-100 hover:text-blue-700 shadow-sm shadow-black">
                  {" "}
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.5 11a.5.5 0 00.5-.5V8.707L14.707 6.914a1 1 0 00-1.414 0L9 11.207l-1.293-1.293a1 1 0 00-1.414 0L3.5 13.207V10.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V16a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V16h-9v-4.793l2.793-2.793 3 3L14 8.707V10.5a.5.5 0 00.5.5h2z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal text-gray-400">
                    Upload proof of degree*
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
            </div>
            {/* buttons section */}
            <div className="flex justify-center gap-4 mt-6 w-full">
              <Button
                className="mt-[10px] min-w-[250px] bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="fill"
                color="blue_500"
                shape="round"
                size="md"
              >
                Skip for now
              </Button>
              <Button
                className="mt-[10px] min-w-[250px] bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="fill"
                color="blue_500"
                shape="round"
                size="md"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
