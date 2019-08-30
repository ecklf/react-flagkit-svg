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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg_prefix__b">
          <stop stopColor="#0B389F" offset="0%" />
          <stop stopColor="#052E8D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg_prefix__c">
          <stop stopColor="#E12A43" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CU_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CU_svg_prefix__b)" d="M0 0h21v3H0zM0 6h21v3H0z" />
        <path fill="url(#CU_svg_prefix__a)" d="M0 3h21v3H0z" />
        <path fill="url(#CU_svg_prefix__b)" d="M0 12h21v3H0z" />
        <path fill="url(#CU_svg_prefix__a)" d="M0 9h21v3H0z" />
        <path fill="url(#CU_svg_prefix__c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#CU_svg_prefix__a)"
          d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
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
