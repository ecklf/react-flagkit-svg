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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__b">
          <stop stopColor="#083D96" offset="0%" />
          <stop stopColor="#053380" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__c">
          <stop stopColor="#37AE39" offset="0%" />
          <stop stopColor="#2E9630" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__d">
          <stop stopColor="#FFD13F" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__e">
          <stop stopColor="#E42346" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg_prefix__f">
          <stop stopColor="#FFD03B" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CF_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CF_svg_prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#CF_svg_prefix__c)" d="M0 7h21v4H0z" />
        <path fill="url(#CF_svg_prefix__d)" d="M0 11h21v4H0z" />
        <path fill="url(#CF_svg_prefix__a)" d="M0 4h21v3H0z" />
        <path fill="url(#CF_svg_prefix__e)" d="M8 0h5v15H8z" />
        <path
          fill="url(#CF_svg_prefix__f)"
          d="M3.5 2.585l-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z"
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
