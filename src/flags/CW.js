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
          id="CW_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CW_svg_prefix__b"
        >
          <stop stopColor="#0543A8" offset="0%" />
          <stop stopColor="#00307D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CW_svg_prefix__c"
        >
          <stop stopColor="#FCC747" offset="0%" />
          <stop stopColor="#FEC539" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CW_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CW_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#CW_svg_prefix__c)" d="M0 10h21v2H0z" />
        <path
          fill="url(#CW_svg_prefix__a)"
          d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"
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
