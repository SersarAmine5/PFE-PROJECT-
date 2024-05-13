import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01",
    gray_100: "bg-gray-100 shadow-sm text-indigo-900_b2",
    gray_50: "bg-gray-50 shadow-sm text-blue_gray-900",
    white_A700: "bg-white-A700 shadow-sm text-blue_gray-900",
  },
};
const sizes = {
  md: "h-[62px] pl-[27px] pr-[35px] text-base",
  sm: "h-[58px] pl-[18px] pr-[35px] text-sm",
  xs: "h-[46px] px-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </label>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50_01", "gray_100", "gray_50", "white_A700"]),
};

export { Input };
