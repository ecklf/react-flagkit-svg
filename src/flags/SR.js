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
          id="SR_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SR_svg_prefix__b"
        >
          <stop stopColor="#43924C" offset="0%" />
          <stop stopColor="#3A7E42" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SR_svg_prefix__c"
        >
          <stop stopColor="#CD153A" offset="0%" />
          <stop stopColor="#B31031" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SR_svg_prefix__d"
        >
          <stop stopColor="#F5D24B" offset="0%" />
          <stop stopColor="#ECC736" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SR_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SR_svg_prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#SR_svg_prefix__a)" d="M0 3h21v9H0z" />
        <path fill="url(#SR_svg_prefix__c)" d="M0 5h21v5H0z" />
        <path
          fill="url(#SR_svg_prefix__d)"
          d="M10.5 8.775l-1.47.998.495-1.706-1.403-1.09 1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z"
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
