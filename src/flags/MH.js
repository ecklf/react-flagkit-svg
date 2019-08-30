import React from "react";
import PropTypes from "prop-types";

const MH = props => {
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
          <stop stopColor="#064DAE" offset="0%" />
          <stop stopColor="#003D91" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#F18D36" offset="0%" />
          <stop stopColor="#DB761E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M21 0v4L0 15z" />
        <path
          fill="url(#a)"
          d="M21 8V4L0 15zM4.839 4.372L4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383-.911 1.037z"
        />
      </g>
    </svg>
  );
};

MH.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MH.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default MH;
