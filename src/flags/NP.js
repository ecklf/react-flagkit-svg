import React from "react";
import PropTypes from "prop-types";

const NP = props => {
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#EE1B44" offset="0%" />
          <stop stopColor="#DD153C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
          <stop stopColor="#0543A8" offset="0%" />
          <stop stopColor="#003893" offset="100%" />
        </linearGradient>
        <path
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
          id="a"
        />
        <path
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
          id="e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="c" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="url(#b)" xlinkHref="#a" />
        <g mask="url(#c)">
          <use fill="url(#d)" xlinkHref="#e" />
          <path
            stroke="url(#f)"
            d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 001.496.5H.5z"
          />
        </g>
        <path
          d="M5.138 5.85a3.52 3.52 0 00.789-.318 2 2 0 01-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z"
          fill="url(#b)"
          mask="url(#c)"
        />
      </g>
    </svg>
  );
};

NP.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NP.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default NP;
