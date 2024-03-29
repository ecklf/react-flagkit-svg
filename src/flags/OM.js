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
          id="OM_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="OM_svg_prefix__b"
        >
          <stop stopColor="#138E16" offset="0%" />
          <stop stopColor="#0F7F12" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="OM_svg_prefix__c"
        >
          <stop stopColor="#ED2B35" offset="0%" />
          <stop stopColor="#D91B25" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#OM_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#OM_svg_prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#OM_svg_prefix__c)" d="M0 15h7v-5h14V5H7V0H0z" />
        <path
          fill="url(#OM_svg_prefix__a)"
          d="M3.5 3.534l-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469zM7 0h14v5H7z"
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
