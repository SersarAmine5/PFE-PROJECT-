import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
  round: 'rounded-lg',
};

const variants = {
  fill: {
    gray_50_01: 'bg-gray-50_01', // Ensure these class names are valid
    gray_100: 'bg-gray-100 shadow-sm text-indigo-900',
    gray_50: 'bg-gray-50 shadow-sm text-blue_gray-900',
    white_A700: 'bg-white-A700 shadow-sm text-blue_gray-900',
  },
};

const sizes = {
  md: 'h-[62px] pl-[27px] pr-[35px] text-base',
  sm: 'h-[58px] pl-[18px] pr-[35px] text-sm',
  xs: 'h-[46px] px-[35px] text-base',
};

const Input = React.forwardRef((
  {
    className = '',
    name = '',
    placeholder = '',
    type = 'text',
    label = '',
    prefix,
    suffix,
    onChange,
    shape,
    variant = 'fill',
    size = 'md',
    color = 'white_A700',
    ...restProps
  },
  ref,
) => {
  const handleChanger = (e) => {
    if (onChange) onChange(e);
  };

  return (
    <>
      <div className={`${className} flex items-center ${(shapes[shape] || '')} ${variants[variant][color] || ''} ${sizes[size] || ''}`}>
        {label && <label htmlFor={name}>{label}</label>}
        {prefix}
        <input ref={ref} type={type} name={name} id={name} onChange={handleChanger} placeholder={placeholder} {...restProps} className="flex-1 outline-none" />
        {suffix}
      </div>
    </>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['md', 'sm', 'xs']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['gray_50_01', 'gray_100', 'gray_50', 'white_A700']),
  onChange: PropTypes.func,
};

export { Input };
