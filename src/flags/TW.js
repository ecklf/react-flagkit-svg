import React from "react";
import PropTypes from "prop-types";

const TW = props => {
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="93.767%" id="b">
          <stop stopColor="#FE3030" offset="0%" />
          <stop stopColor="red" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#0909B6" offset="0%" />
          <stop stopColor="#000096" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M0 8h11V0H0z" />
        <path
          fill="url(#a)"
          d="M5.5 5.25l-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z"
        />
      </g>
    </svg>
  );
};

TW.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TW.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default TW;
