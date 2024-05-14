import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-gray-600 border border-solid bg-white-A700 checked:border-gray-600 checked:border-2 checked:border-solid checked:bg-gray-600 checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-gray-600",
};
const sizes = {
  xs: "h-[13px] w-[13px] rounded-sm",
  sm: "h-[16px] w-[16px] rounded-sm",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={`${className} flex items-center gap-2 cursor-pointer`}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id} className="cursor-pointer">{label}</label>}
        </div>
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
