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
          id="NC_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_prefix__b"
        >
          <stop stopColor="#094CC7" offset="0%" />
          <stop stopColor="#003CAB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_prefix__c"
        >
          <stop stopColor="#2AAD55" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_prefix__d"
        >
          <stop stopColor="#F65D55" offset="0%" />
          <stop stopColor="#E9443C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_prefix__e"
        >
          <stop stopColor="#FAE749" offset="0%" />
          <stop stopColor="#FBE533" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_prefix__f"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#NC_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#NC_svg_prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#NC_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#NC_svg_prefix__d)" d="M0 5h21v5H0z" />
        <circle fill="url(#NC_svg_prefix__e)" cx={10.5} cy={7.5} r={3.5} />
        <path
          d="M10.092 6.211a.5.5 0 10.514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 110-1 .5.5 0 010 1zm0-1a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#NC_svg_prefix__f)"
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
