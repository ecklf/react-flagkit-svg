import React from "react";
import PropTypes from "prop-types";

const BY = props => {
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
          <stop stopColor="#E54252" offset="0%" />
          <stop stopColor="#C63442" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#5CBE6B" offset="0%" />
          <stop stopColor="#4EA55B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v10H0z" />
        <path fill="url(#c)" d="M0 10h21v5H0z" />
        <path
          d="M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75.5.75z"
          fill="url(#a)"
        />
        <path
          d="M-1.5 3l1-1.5L.5 3l-1 1.5-1-1.5zm0 3l1-1.5L.5 6l-1 1.5-1-1.5zm0 3l1-1.5L.5 9l-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zM.5 1.5l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5z"
          fill="url(#b)"
        />
      </g>
    </svg>
  );
};

BY.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BY.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default BY;
