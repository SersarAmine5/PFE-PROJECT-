import React from "react";
import { Button, Img } from "..";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center pt-[26px] pb-[25px] px-[26px] sm:p-5 bg-gradient`}
    >
      <div className="mx-auto flex w-full max-w-[1401px] items-center justify-between gap-5 md:flex-col">
        <Img
          src="images/img_image_removebg_preview.png"
          alt="header image"
          className="h-[99px] w-[18%] object-cover md:w-full"
        />
        <div className="flex w-[27%] justify-between gap-5 md:w-full">
        <Button
  size="sm"
  shape="round"
  className="min-w-[155px] font-poppins font-medium !text-indigo-900 shadow-xs sm:px-5 hover:bg-white hover:text-indigo-900 transition-colors"
>
  Sign up
</Button>
<Button
  size="sm"
  shape="round"
  className="min-w-[155px] font-poppins font-medium !text-indigo-900 shadow-xs sm:px-5 hover:bg-white hover:text-indigo-900 transition-colors"
>
  Log in
</Button>

        </div>
      </div>
    </header>
  );
}
