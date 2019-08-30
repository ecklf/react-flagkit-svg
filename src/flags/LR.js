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
          id="LR_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LR_svg_prefix__b"
        >
          <stop stopColor="#E1244A" offset="0%" />
          <stop stopColor="#BE1134" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LR_svg_prefix__c"
        >
          <stop stopColor="#0C3F8E" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <filter
          x="-4.2%"
          y="-4.2%"
          width="108.3%"
          height="116.7%"
          filterUnits="objectBoundingBox"
          id="LR_svg_prefix__d"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          id="LR_svg_prefix__e"
          d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#LR_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2z"
          fill="url(#LR_svg_prefix__b)"
        />
        <path fill="url(#LR_svg_prefix__c)" d="M0 0h10v10H0z" />
        <use
          fill="#000"
          filter="url(#LR_svg_prefix__d)"
          xlinkHref="#LR_svg_prefix__e"
        />
        <use fill="url(#LR_svg_prefix__a)" xlinkHref="#LR_svg_prefix__e" />
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
