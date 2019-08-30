import React from "react";
import PropTypes from "prop-types";

const TZ = props => {
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
          <stop stopColor="#33CC4D" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#2DAFE4" offset="0%" />
          <stop stopColor="#1BA4DC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFD84F" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M.001 10.004l21-10h-21z" />
        <path fill="url(#c)" d="M.001 15.004h21v-10z" />
        <path
          fill="url(#d)"
          d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"
        />
        <path
          fill="url(#e)"
          d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"
        />
      </g>
    </svg>
  );
};

TZ.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TZ.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default TZ;
