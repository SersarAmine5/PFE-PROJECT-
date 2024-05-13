import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HompagePage() {
  return (
    <>
      <Helmet>
        <title>Collaborative Messaging - Connect and Innovate Online | Flex</title>
        <meta
          name="description"
          content="Join Flex and explore a world of online collaboration. Communicate in real-time, dive into dedicated topics, and innovate together. Sign up now!"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gray-200">
        {/* navigation bar section */}
        <Header />
        <div className="container-xs mt-[54px] md:p-5">
          {/* main content section */}
          <div className="flex flex-col gap-[247px] md:gap-[185px] sm:gap-[123px]">
            <div className="flex flex-col items-center justify-center pt-36 md:pt-5">
              <div className="flex w-[89%] items-start justify-between gap-5 self-start md:w-full md:flex-col">
                <Text
                  size="2xl"
                  as="p"
                  className="w-[63%] leading-[97px] tracking-[6.00px] !text-indigo-900_03 md:w-full"
                >
                  Échangez, collaborez et innovez ensemble en ligne !
                </Text>
                <Img
                  src="images/img_iconmessage.png"
                  alt="message icon"
                  className="h-[415px] w-[27%] rounded-[156px] object-cover md:w-full"
                />
              </div>
              <div className="mt-[122px] flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col">
                <Img
                  src="images/img_message.png"
                  alt="message image"
                  className="mb-[37px] h-[456px] w-[30%] self-end object-cover md:w-full"
                />
                <Text
                  size="xl"
                  as="p"
                  className="w-[54%] !font-plusjakartasans leading-[97px] tracking-[4.00px] !text-indigo-900_03 md:w-full"
                >
                  Notre application de messagerie collaborative vous permet de communiquer et de travailler en équipe en
                  temps réel
                </Text>
              </div>
              <div className="mt-[237px] flex w-[89%] items-center justify-between gap-5 md:w-full md:flex-col">
                <Text
                  size="xl"
                  as="p"
                  className="h-[645px] w-[646px] !font-plusjakartasans leading-[97px] tracking-[4.00px] !text-indigo-900_03"
                >
                  Explorez une multitude de sujets et plongez dans des salles dédiées pour des échanges dynamiques et
                  ciblés !
                </Text>
                <Img
                  src="images/img_groupepic.png"
                  alt="group image"
                  className="mb-[129px] h-[353px] w-[39%] self-end object-cover md:w-full"
                />
              </div>
            </div>
            <div className="pl-[177px] pr-44 md:px-5">
              <Button
                size="lg"
                variant="gradient"
                color="light_blue_800_indigo_900_04"
                className="w-full rounded-[7px] font-plusjakartasans font-bold tracking-[4.76px] sm:px-5"
              >
                Rejoins nous maintenant
              </Button>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
