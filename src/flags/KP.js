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
          id="KP_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KP_svg_prefix__b"
        >
          <stop stopColor="#1461B6" offset="0%" />
          <stop stopColor="#0B52A1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KP_svg_prefix__c"
        >
          <stop stopColor="#F53846" offset="0%" />
          <stop stopColor="#EB2130" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#KP_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#KP_svg_prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#KP_svg_prefix__a)" d="M0 3h21v9H0z" />
        <path fill="url(#KP_svg_prefix__c)" d="M0 4h21v7H0z" />
        <path
          d="M7.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523 7.5 8.503z"
          fill="url(#KP_svg_prefix__a)"
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
