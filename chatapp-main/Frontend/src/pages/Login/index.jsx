import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img, Heading } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login to your Chat X account</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div>
        <div className="bg-gradient py-6 sm:py-3 flex justify-center">
          <Img
            src="images/img_image_removebg_preview.png"
            alt="header image"
            className="h-[60px] w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </div>
        <center>
          {/* login form section */}
          <div className="flex flex-wrap justify-between items-start p-5 w-[750px]">
            {/* Hide the image on small screens using 'hidden sm:block' */}
            {/* <Img
            src="images/loginpic.jpg"
            alt="Login picture"
            className=" sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover"
          /> */}
            <div className="flex justify-center flex-col w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 p-2 shadow-sm rounded bg-blue_gray-200_a5 mt-6">
              <a href="#">
                <Heading as="h1" className="text-center text-3xl">
                  Log in
                </Heading>
              </a>
              <Text size="xs" as="p" className="mt-4 text-gray-700">
                <span>New to Headspace? </span>
                <a href="#" className="text-blue-500">
                  Sign up for free
                </a>
              </Text>
              <Input
                shape="round"
                name="email"
                placeholder="Adresse e-mail"
                className="mt-4 w-full"
              />
              <Input
                shape="round"
                suffix={
                  <Img src="images/mdpssvg.svg" alt="svg" className="h-7 w-7" />
                }
                placeholder="Mot de passe"
                className="mt-4 w-full"
              />
              <a href="#" className="self-end mt-2">
                <Text size="xs" className="text-blue-500">
                  Forgot password?
                </Text>
              </a>

              <div className="flex justify-center mt-[50px]">
                <Button
                  className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  variant="fill"
                  color="blue_500"
                  shape="round"
                  size="md"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
