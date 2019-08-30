import React from "react";
import PropTypes from "prop-types";

const GE = props => {
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
          <stop stopColor="#FF2B37" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#b)" />
        <path
          d="M16.2 2.7L16 1.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zM4.2 2.7L4 1.5h1l-.2 1.2L6 2.5v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM4.2 11.7L4 10.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM16.2 11.7l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
          fill="#FD0D1B"
        />
      </g>
    </svg>
  );
};

GE.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GE.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default GE;
