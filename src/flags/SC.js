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
          id="SC_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_prefix__b"
        >
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_prefix__c"
        >
          <stop stopColor="#0858B4" offset="0%" />
          <stop stopColor="#013F87" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_prefix__d"
        >
          <stop stopColor="#ED3535" offset="0%" />
          <stop stopColor="#D62828" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_prefix__e"
        >
          <stop stopColor="#08964F" offset="0%" />
          <stop stopColor="#017B3E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SC_svg_prefix__f"
        >
          <stop stopColor="#FFDD67" offset="0%" />
          <stop stopColor="#FDD856" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SC_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SC_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#SC_svg_prefix__c)" d="M0 0h7L0 15z" />
        <path fill="url(#SC_svg_prefix__d)" d="M14 0h7v5L0 15z" />
        <path fill="url(#SC_svg_prefix__e)" d="M21 15v-5L0 15z" />
        <path fill="url(#SC_svg_prefix__f)" d="M7 0h7L0 15z" />
        <path fill="url(#SC_svg_prefix__a)" d="M21 10V5L0 15z" />
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
