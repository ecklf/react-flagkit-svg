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
          id="GQ_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_prefix__b"
        >
          <stop stopColor="#EC3938" offset="0%" />
          <stop stopColor="#E12524" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_prefix__c"
        >
          <stop stopColor="#51B422" offset="0%" />
          <stop stopColor="#429919" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GQ_svg_prefix__d"
        >
          <stop stopColor="#258DE7" offset="0%" />
          <stop stopColor="#1276CC" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GQ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GQ_svg_prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#GQ_svg_prefix__c)" d="M0 0h21v5H0z" />
        <path fill="url(#GQ_svg_prefix__a)" d="M0 5h21v5H0z" />
        <path
          d="M10.066 8.932a.73.73 0 00.175-.425l.008-1.264A.25.25 0 009.996 7h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 01.348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 00-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.171-.082.171h-.496c-.139 0-.176-.08-.078-.182l-.108.114z"
          fill="#159940"
        />
        <path fill="url(#GQ_svg_prefix__d)" d="M0 0l7 7.5L0 15z" />
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
