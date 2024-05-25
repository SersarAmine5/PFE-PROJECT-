import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import Footer from "../../components/Footer1";
import Header from "../../components/Header1";

export default function Hompage() {
  return (
    <>
      <Helmet>
        <title>Chat X Home page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center ">
        {/* navigation bar section */}
        <Header />
        <div className="container-xs md:p-5">
          {/* main content section */}
          <div className="flex flex-col gap-[247px] md:gap-[185px] sm:gap-[123px]">
            <div className="flex flex-col items-center justify-center pt-20 md:pt-5">
              <div className="flex w-[89%] items-start justify-between gap-5 self-start md:w-full md:flex-col">
                <Text
                  size="xl"
                  as="p"
                  className="ml-[120px] mb-[20px] w-[93%] leading-[87px] tracking-[3.00px] !text-indigo-900_03 "
                >
                  Échangez, collaborez et innovez ensemble en ligne !
                </Text>
                <Img
                  src="images/img_iconmessage.png"
                  alt="message icon"
                  className="ml-[120px] h-[325px] w-[57%] rounded-[156px] object-cover md:w-full"
                />
              </div>
              <div className="mt-[122px] flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col">
                <Img
                  src="images/img_message.png"
                  alt="message image"
                  className="mb-[37px] h-[356px] w-[30%] self-end object-cover md:w-full"
                />
                <Text
                  size="xl"
                  as="p"
                  className="w-[54%] !font-plusjakartasans leading-[87px] tracking-[3.00px] !text-indigo-900_03 md:w-full"
                >
                  Notre application de messagerie collaborative vous permet de
                  communiquer et de travailler en équipe en temps réel
                </Text>
              </div>
              <div className="mt-[237px] flex w-[89%] items-center justify-between gap-5 md:w-full md:flex-col">
                <Text
                  size="xl"
                  as="p"
                  className="ml-[30px] h-[245px] w-[546px] mt-[-200px] !font-plusjakartasans leading-[87px] tracking-[3.00px] !text-indigo-900_03"
                >
                  Explorez une multitude de sujets et plongez dans des salles
                  dédiées pour des échanges dynamiques et ciblés !
                </Text>
                <Img
                  src="images/img_groupepic.png"
                  alt="group image"
                  className="mt-[-100px] mb-[-50px] h-[383px] w-[41%] tracking-[3.00px] self-end object-cover md:w-full"
                />
              </div>
            </div>
            <div className="pl-[177px] pr-44 md:px-5">
              {/* <Button
                size="lg"
                variant="gradient"
                color="light_blue_800_indigo_900_04"
                className=" ml-[170px] w-[59%] rounded-[19px] font-plusjakartasans font-bold tracking-[4.76px] sm:px-5"
              >
                Rejoinez nous maintenant
              </Button> */}
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
