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
          id="UZ_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UZ_svg_prefix__b"
        >
          <stop stopColor="#04AAC8" offset="0%" />
          <stop stopColor="#009AB6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UZ_svg_prefix__c"
        >
          <stop stopColor="#23C840" offset="0%" />
          <stop stopColor="#1EB639" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#UZ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#UZ_svg_prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#UZ_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path
          fill="url(#UZ_svg_prefix__a)"
          d="M0 5h21v5H0zM4.334 1.253a1.5 1.5 0 100 2.495 1.25 1.25 0 110-2.495zM5.5 4a.5.5 0 110-1 .5.5 0 010 1zm2-2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
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
