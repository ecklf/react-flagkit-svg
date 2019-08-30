import React from "react";
import PropTypes from "prop-types";

const CM = props => {
  let { size, width, height, ...otherProps } = props;

  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#FFDC44" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#059170" offset="0%" />
          <stop stopColor="#007B5E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#E21A30" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#FFDC42" offset="0%" />
          <stop stopColor="#FDD217" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M10 0h11v15H10z" />
        <path fill="url(#c)" d="M0 0h7v15H0z" />
        <path fill="url(#d)" d="M7 0h7v15H7z" />
        <path fill="url(#b)" d="M14 0h7v15h-7z" />
        <path
          fill="url(#e)"
          d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
};

CM.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CM.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default CM;
