import React from "react";
import PropTypes from "prop-types";

const HR = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#FF202D" offset="0%" />
          <stop stop-color="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#2027AC" offset="0%" />
          <stop stop-color="#191F94" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#FF212E" offset="0%" />
          <stop stop-color="#FD0D1B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0z" />
        <path
          d="M8 4l.5-.5.5.5v1H8V4zm2 0l.5-.5.5.5v1h-1V4zm2 0l.5-.5.5.5v1h-1V4z"
          fill="#1895DB"
          opacity=".5"
        />
        <path
          d="M9 4l.5-.5.5.5v1H9V4zm2 0l.5-.5.5.5v1h-1V4z"
          fill="#191F94"
          opacity=".5"
        />
        <path fill="url(#c)" d="M0 10h21v5H0z" />
        <path
          d="M0 10V5h21v5H0zm12 0h1l-.273.547c-.126.25-.454.453-.727.453v-1zm-2 0h1v1h-1v-1zm-2 0h1v1a.876.876 0 01-.727-.453L8 10z"
          fill="url(#a)"
        />
        <path
          d="M10 5h1v1h-1V5zm2 0h.5l.5 1h-1V5zM8.5 5H9v1H8l.5-1zM9 6h1v1H9V6zm2 0h1v1h-1V6zm-1 1h1v1h-1V7zm2 0h1v1h-1V7zm-1 1h1v1h-1V8zM8 7h1v1H8V7zm1 1h1v1H9V8zM8 9h1v1H8V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-1 1h1v1h-1v-1zm-2 0h1v1H9v-1z"
          fill="url(#d)"
        />
      </g>
    </svg>
  );
};

HR.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HR.propTypes = {
  width: "21",
  height: "15",
};

export default HR;
