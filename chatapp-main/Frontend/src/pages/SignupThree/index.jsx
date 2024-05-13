import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Heading, Img } from "../../components";

export default function SignupThreePage() {
  return (
    <>
      <Helmet>
        <title>Sign Up for Your New Account - Headspace</title>
        <meta
          name="description"
          content="Join Headspace by setting up your account. Agree to terms and conditions, and become an expert to shape our community. Start your journey with us today."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[38px] bg-white-A700 pb-[99px] md:pb-5">
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

        {/* account setup section */}
        <div className="container-xs flex flex-col items-center gap-2 rounded bg-blue_gray-200_a5 px-[35px] pb-[31px] pt-[35px] shadow-sm md:p-5">
          <Heading as="h1" className="!text-[36.25px]">
            Setting up your account
          </Heading>
          <div className="flex w-[86%] md:w-full">
            <div className="flex w-full items-center gap-[45px] md:flex-col">
              {/* terms conditions section */}
              <div className="flex w-full flex-col items-start gap-[67px] self-end sm:gap-[33px]">
                <div className="relative h-[310px] w-[83%] md:h-auto">
                  <Img
                    src="images/img_close.svg"
                    alt="close image"
                    className="absolute bottom-[29.00px] left-[0.00px] m-auto h-[13px] rounded-sm"
                  />
                  <Text
                    size="xs"
                    as="p"
                    className="absolute bottom-[0.00px] right-[0.00px] m-auto w-[89%] !text-[13.34px] leading-5 !text-black-900"
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
                  <Heading size="s" as="h2" className="ml-[7px] mt-[9px] md:ml-0">
                    Postulez pour le badge d&#39;Expert
                  </Heading>
                  <Text
                    size="xs"
                    as="p"
                    className="absolute left-[0.00px] top-[0.00px] m-auto w-[93%] text-center !text-[13.34px] leading-8 tracking-[0.40px] !text-indigo-900_04"
                  >
                    En tant qu&#39;Expert, vous aurez le privilège de créer des sujets, des chats, et d&#39;approuver de
                    nouvelles conversations. Un modérateur vérifiera vos qualifications. Si vous souhaitez façonner
                    notre communauté, appliquez maintenant ou cliquez sur « Passer pour l&#39;instant ».
                  </Text>
                </div>
                <Button
                  size="sm"
                  variant="gradient"
                  shape="round"
                  color="light_blue_800_indigo_900_04"
                  className="min-w-[426px] self-end !rounded-[22px] font-bold tracking-[2.16px] sm:px-5"
                >
                  Skip for now
                </Button>
              </div>

              {/* form section */}
              <div className="w-full">
                <div className="flex flex-col items-start gap-24 md:gap-[72px] sm:gap-12">
                  <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <div className="h-[317px] w-[6px]" />
                    <div className="mb-[7px] flex w-[78%] flex-col items-start self-end sm:w-full">
                      <Input
                        shape="round"
                        name="Degree Input"
                        placeholder={`Your highest degree*`}
                        className="self-stretch sm:pr-5"
                      />
                      <Input
                        shape="round"
                        name="Specialization Input"
                        placeholder={`Area of specialization*`}
                        className="mt-[26px] self-stretch sm:pr-5"
                      />
                      <Text size="md" as="p" className="ml-[5px] mt-4 !text-[15.13px] !text-black-900 md:ml-0">
                        Upload proof of degree*
                      </Text>

                      {/* file upload section */}
                      <div className="mt-3.5 flex justify-center self-stretch rounded-lg bg-white-A700 p-1.5">
                        <Text
                          size="s"
                          as="p"
                          className="w-[61%] text-center !font-plusjakartasans leading-[17px] !text-blue_gray-900_7f"
                        >
                          <>
                            Click to browse or <br />
                            drag and drop your files
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="gradient"
                    shape="round"
                    color="light_blue_800_indigo_900_04"
                    className="ml-3.5 min-w-[426px] !rounded-[22px] font-bold tracking-[2.16px] md:ml-0 sm:px-5"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
