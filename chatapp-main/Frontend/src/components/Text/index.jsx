import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-[38px] font-normal md:text-4xl sm:text-[34px]",
  s: "text-sm font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-indigo-900_b2 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
