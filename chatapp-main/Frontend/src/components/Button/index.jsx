import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    blue_gray_200: "bg-blue_gray-200 shadow-sm text-black-900",
    gray_300: "bg-gray-300 shadow-md text-indigo-900",
    indigo_900: "bg-indigo-900 text-white-A700_cc",
  },
  gradient: {
    light_blue_800_indigo_900: "bg-gradient text-white-A700",
  },
};
const sizes = {
  lg: "h-[53px] px-[17px]",
  md: "h-[45px] px-[35px] text-lg",
  sm: "h-[41px] px-[34px] text-sm",
  xs: "h-[36px] px-[35px] text-base",
  xl: "h-[54px] px-[35px] text-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "blue_gray_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "md", "sm", "xs", "xl"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf(["blue_gray_200", "gray_300", "indigo_900", "light_blue_800_indigo_900"]),
};

export { Button };
