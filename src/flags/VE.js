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
          id="VE_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VE_svg_prefix__b"
        >
          <stop stopColor="#063191" offset="0%" />
          <stop stopColor="#03287C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VE_svg_prefix__c"
        >
          <stop stopColor="#E2213B" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VE_svg_prefix__d"
        >
          <stop stopColor="#FFD044" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#VE_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#VE_svg_prefix__b)" d="M0 5h21v5H0z" />
        <path fill="url(#VE_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path
          d="M10.5 7a.5.5 0 110-1 .5.5 0 010 1zm-2 .5a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zM7.5 9a.5.5 0 110-1 .5.5 0 010 1zm6 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#VE_svg_prefix__a)"
        />
        <path fill="url(#VE_svg_prefix__d)" d="M0 0h21v5H0z" />
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
