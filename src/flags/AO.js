import React from "react";
import PropTypes from "prop-types";

const AO = props => {
  const { width, height, ...otherProps } = props;
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
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#FF323E" offset="0%" />
          <stop stop-color="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stop-color="#DD2137" offset="0%" />
          <stop stop-color="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stop-color="#F8D84B" offset="0%" />
          <stop stop-color="#F9D536" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M0 8h21v7H0z" />
        <path fill="url(#d)" d="M0 0h21v8H0z" />
        <path
          d="M10.63 8.855l-1.407-.939a.5.5 0 01.554-.832l1.536 1.024a2 2 0 00-1.253-2.863.5.5 0 11.259-.966 3 3 0 011.83 4.386l.628.419a.5.5 0 01-.554.832l-.713-.475c-.727.631-1.744.901-2.744.633a.5.5 0 01.259-.966c.57.153 1.147.044 1.606-.253zM9.5 6.5a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#e)"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

AO.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AO.defaultProps = {
  width: "21",
  height: "15",
};

export default AO;
