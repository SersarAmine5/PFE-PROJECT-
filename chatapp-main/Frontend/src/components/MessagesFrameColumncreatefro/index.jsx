import React from "react";
import { Img, Text } from "./..";

export default function MessagesFrameColumncreatefro({
  line,
  text = "C&#39;est vrai, et c&#39;est pourquoi la vaccination est essentielle pour prévenir les formes graves de la maladie.",
  text1 = "20:30",
  image,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex self-end pt-[11px]`}>
      {!!line ? (
        <div className="flex flex-col items-start gap-[186px] self-stretch md:gap-[139px] sm:gap-[93px]">
          {!!line ? <div className="h-[-157px] w-[89%] rounded-[-78px] bg-blue_gray-800_01 shadow-xs" /> : null}
          <Text as="p" className="ml-4 !font-medium tracking-[-0.28px] !text-white-A700 md:ml-0">
            {text}
          </Text>
          <Text size="xs" as="p" className="mr-[95px] self-end !font-poppins !text-white-A700_b2 md:mr-0">
            {text1}
          </Text>
        </div>
      ) : null}
      {!!image ? (
        <Img src={image} alt="avatar image" className="mr-[17px] h-px w-[8%] rounded-[-78px] object-cover md:mr-0" />
      ) : null}
    </div>
  );
}
