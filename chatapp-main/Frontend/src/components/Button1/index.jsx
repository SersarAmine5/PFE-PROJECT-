import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[23px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-900_02",
    blue: "bg-blue-500 text-white hover:bg-gray-500",  // Couleur bleue avec hover gris
  },
  gradient: {
    light_blue_800_indigo_900_04: "bg-gradient-to-r from-light-blue-800 to-indigo-900 text-white",
  },
};
const sizes = {
  lg: "h-[110px] px-[33px] text-[34px]",
  md: "h-[48px] px-[35px] text-base",
  sm: "h-[46px] px-[35px] text-xl",
  xs: "h-[44px] px-[35px] text-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue", // Couleur par défaut ajustée à bleu
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
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf(["white_A700", "light_blue_800_indigo_900_04", "blue"]), // Ajout de l'option "blue"
};

export { Button };
