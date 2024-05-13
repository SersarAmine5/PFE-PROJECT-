import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-xl font-medium",
  s: "text-sm font-normal",
  "2xl": "text-6xl font-medium md:text-[52px] sm:text-[46px]",
  xl: "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  md: "text-[15px] font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-300 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
