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
          id="MM_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MM_svg_prefix__b"
        >
          <stop stopColor="#F13D4F" offset="0%" />
          <stop stopColor="#E92C3F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MM_svg_prefix__c"
        >
          <stop stopColor="#4AC94B" offset="0%" />
          <stop stopColor="#3BB13C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MM_svg_prefix__d"
        >
          <stop stopColor="#FFD043" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MM_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MM_svg_prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#MM_svg_prefix__c)" d="M0 5h21v5H0z" />
        <path fill="url(#MM_svg_prefix__d)" d="M0 0h21v5H0z" />
        <path
          fill="url(#MM_svg_prefix__a)"
          d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"
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
