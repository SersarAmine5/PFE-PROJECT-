import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  tarGray200: "!border-blue_gray-100 border border-solid bg-white-A700 shadow-sm",
};
const sizes = {
  xs: "h-[102px] p-3.5 text-base",
};

const TextArea = React.forwardRef(
  (
    { className = "", name = "", placeholder = "", shape, size = "xs", variant = "tarGray200", onChange, ...restProps },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarGray200"]),
};

export { TextArea };
