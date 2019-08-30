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
          id="TG_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TG_svg_prefix__b"
        >
          <stop stopColor="#FFD44D" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TG_svg_prefix__c"
        >
          <stop stopColor="#159A74" offset="0%" />
          <stop stopColor="#0C6A4F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TG_svg_prefix__d"
        >
          <stop stopColor="#ED1F45" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TG_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#TG_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z"
          fill="url(#TG_svg_prefix__c)"
        />
        <path fill="url(#TG_svg_prefix__d)" d="M0 0h9v9H0z" />
        <path
          fill="url(#TG_svg_prefix__a)"
          d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
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
