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
          id="IN_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IN_svg_prefix__b"
        >
          <stop stopColor="#FFA44A" offset="0%" />
          <stop stopColor="#FF9934" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IN_svg_prefix__c"
        >
          <stop stopColor="#1A9F0B" offset="0%" />
          <stop stopColor="#138806" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#IN_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#IN_svg_prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#IN_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#IN_svg_prefix__a)" d="M0 5h21v5H0z" />
        <circle fillOpacity={0.15} fill="#181A93" cx={10.5} cy={7.5} r={1.5} />
        <path
          d="M10.5 9.5a2 2 0 110-4 2 2 0 010 4zm0-.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="#181A93"
          fillRule="nonzero"
        />
        <circle fill="#181A93" cx={10.5} cy={7.5} r={1} />
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
