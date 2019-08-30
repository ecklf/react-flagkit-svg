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
          id="ZA_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_prefix__b"
        >
          <stop stopColor="#06A86E" offset="0%" />
          <stop stopColor="#007A4E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_prefix__c"
        >
          <stop stopColor="#FFBF2E" offset="0%" />
          <stop stopColor="#FFB612" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_prefix__d"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_prefix__e"
        >
          <stop stopColor="#F44E46" offset="0%" />
          <stop stopColor="#DF3931" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZA_svg_prefix__f"
        >
          <stop stopColor="#072CB4" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ZA_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#ZA_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#ZA_svg_prefix__c)" d="M0 2l7 5.5L0 13z" />
        <path fill="url(#ZA_svg_prefix__d)" d="M-1 2.25L5.75 7.5-1 12.75z" />
        <path fill="#FFF" d="M9 6L2 0h19v6z" />
        <path fill="url(#ZA_svg_prefix__e)" d="M9.25 5l-6-5H21v5z" />
        <path fill="#FFF" d="M2 15h19V9H9z" />
        <path fill="url(#ZA_svg_prefix__f)" d="M3.25 15H21v-5H9.25z" />
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
