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
          id="MN_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MN_svg_prefix__b"
        >
          <stop stopColor="#146BBC" offset="0%" />
          <stop stopColor="#0B5396" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MN_svg_prefix__c"
        >
          <stop stopColor="#E43642" offset="0%" />
          <stop stopColor="#C32A34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MN_svg_prefix__d"
        >
          <stop stopColor="#F8D246" offset="0%" />
          <stop stopColor="#F9CE2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MN_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MN_svg_prefix__b)" d="M7 0h7v15H7z" />
        <path fill="url(#MN_svg_prefix__c)" d="M0 0h7v15H0zM14 0h7v15h-7z" />
        <path
          d="M4 9h1v3H4V9zM2 9h1v3H2V9zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1L3 9zm0-1l.5-.5.5.5H3zm.5 1a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#MN_svg_prefix__d)"
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
