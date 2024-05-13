import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-[38px] font-normal md:text-4xl sm:text-[34px]",
  s: "text-sm font-normal",
  md: "text-base font-medium",
  xl: "text-[40px] font-normal md:text-4xl sm:text-[44px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-300 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
