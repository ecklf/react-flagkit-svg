import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IL_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IL_svg_prefix__b"
        >
          <stop stopColor="#0E46D4" offset="0%" />
          <stop stopColor="#0538B9" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#IL_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#IL_svg_prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#IL_svg_prefix__a)" d="M0 3h21v9H0z" />
        <path
          d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
          stroke="#093EC5"
          strokeWidth={0.5}
        />
        <path
          d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
          stroke="#093EC5"
          strokeWidth={0.5}
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
