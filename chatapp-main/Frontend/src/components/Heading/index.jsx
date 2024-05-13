import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-[22px] font-semibold",
  xs: "text-base font-bold",
  lg: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
