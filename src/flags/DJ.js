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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg_prefix__b">
          <stop stopColor="#1DC837" offset="0%" />
          <stop stopColor="#13AD2B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg_prefix__c">
          <stop stopColor="#82C5F5" offset="0%" />
          <stop stopColor="#6AB3E8" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg_prefix__d">
          <stop stopColor="#E21C21" offset="0%" />
          <stop stopColor="#D7151A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#DJ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#DJ_svg_prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#DJ_svg_prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#DJ_svg_prefix__a)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#DJ_svg_prefix__d)"
          d="M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
