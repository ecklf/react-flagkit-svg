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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg_prefix__b">
          <stop stopColor="#043CAE" offset="0%" />
          <stop stopColor="#00339A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg_prefix__c">
          <stop stopColor="#FFD429" offset="0%" />
          <stop stopColor="#FC0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#EU_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#EU_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          d="M10.5 3l-.707.207L10 2.5l-.207-.707L10.5 2l.707-.207L11 2.5l.207.707L10.5 3zm0 10l-.707.207L10 12.5l-.207-.707.707.207.707-.207L11 12.5l.207.707L10.5 13zm5-5l-.707.207L15 7.5l-.207-.707L15.5 7l.707-.207L16 7.5l.207.707L15.5 8zm-10 0l-.707.207L5 7.5l-.207-.707L5.5 7l.707-.207L6 7.5l.207.707L5.5 8zm9.33-2.5l-.707.207L14.33 5l-.207-.707.707.207.707-.207L15.33 5l.207.707-.707-.207zm-8.66 5l-.707.207L5.67 10l-.207-.707.707.207.707-.207L6.67 10l.207.707-.707-.207zM13 3.67l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 3.67zm-5 8.66l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L8 12.33zm6.83-1.83l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-8.66-5l-.707.207L5.67 5l-.207-.707.707.207.707-.207L6.67 5l.207.707L6.17 5.5zM13 12.33l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 12.33zM8 3.67l-.707.207.207-.707-.207-.707L8 2.67l.707-.207-.207.707.207.707L8 3.67z"
          fill="url(#EU_svg_prefix__c)"
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
