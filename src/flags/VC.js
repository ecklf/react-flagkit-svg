import React from "react";
import PropTypes from "prop-types";

const VC = props => {
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
          <stop stopColor="#08C47A" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#0C87E1" offset="0%" />
          <stop stopColor="#0073C7" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFD147" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#00C778" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M10 0h11v15H10z" />
        <path fill="url(#c)" d="M0 0h7v15H0z" />
        <path fill="url(#d)" d="M6 0h9v15H6z" />
        <path
          d="M11 6l1.5-3L14 6l-1.5 3L11 6zM7 6l1.5-3L10 6 8.5 9 7 6zm2 4l1.5-3 1.5 3-1.5 3L9 10z"
          fill="url(#e)"
        />
      </g>
    </svg>
  );
};

VC.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VC.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default VC;
