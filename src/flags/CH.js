import React from "react";
import PropTypes from "prop-types";

const CH = props => {
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
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="b">
          <stop stop-color="red" offset="0%" />
          <stop stop-color="#FF3131" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M9 9H6.256A.255.255 0 016 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 01-.256.256H12v2.744a.255.255 0 01-.256.256H9.256A.255.255 0 019 11.744V9z"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

CH.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CH.propTypes = {
  width: "21",
  height: "15",
};

export default CH;
