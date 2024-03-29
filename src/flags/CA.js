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
          id="CA_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CA_svg_prefix__b"
        >
          <stop stopColor="#FF3131" offset="0%" />
          <stop stopColor="red" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CA_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CA_svg_prefix__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#CA_svg_prefix__a)" d="M6 0h9v15H6z" />
        <path
          d="M11.674 7.326l.652-.652a.251.251 0 01.355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 01.008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 01.009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.249.249 0 01.354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075z"
          fill="url(#CA_svg_prefix__b)"
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
