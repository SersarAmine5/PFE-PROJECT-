import React from "react";
import { Button } from "./..";

export default function SignUpTwoRowtags({
  dynamicproperty1 = "Tags",
  dynamicproperty2 = "Tags",
  dynamicproperty3 = "Tags",
  dynamicproperty4 = "Tags",
  dynamicproperty5 = "Tags",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col items-center gap-[17px] flex-1`}>
      <Button shape="round" className="w-full !rounded-[22px] font-bold tracking-[-2.20px] sm:px-5">
        {dynamicproperty1}
      </Button>
      <Button shape="round" className="w-full !rounded-[22px] font-bold tracking-[-2.20px] sm:px-5">
        {dynamicproperty2}
      </Button>
      <Button shape="round" className="w-full !rounded-[22px] font-bold tracking-[-2.20px] sm:px-5">
        {dynamicproperty3}
      </Button>
      <Button shape="round" className="w-full !rounded-[22px] font-bold tracking-[-2.20px] sm:px-5">
        {dynamicproperty4}
      </Button>
      <Button shape="round" className="w-full !rounded-[22px] font-bold tracking-[-2.20px] sm:px-5">
        {dynamicproperty5}
      </Button>
    </div>
  );
}
