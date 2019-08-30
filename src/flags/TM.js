import React from "react";
import PropTypes from "prop-types";

const TM = props => {
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
        <ellipse id="d" cx="1.5" cy="1" rx="1.5" ry="1" />
        <ellipse id="f" cx="1.5" cy="1" rx="1.5" ry="1" />
        <ellipse id="h" cx="1.5" cy="1" rx="1.5" ry="1" />
        <ellipse id="j" cx="1.5" cy=".5" rx="1.5" ry="1" />
        <ellipse id="k" cx="1.5" cy="1" rx="1.5" ry="1" />
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#30C375" offset="0%" />
          <stop stopColor="#28AE67" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#DE414F" offset="0%" />
          <stop stopColor="#CA3745" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M3 0h3v15H3z" />
        <g transform="translate(3 1)">
          <mask id="e" fill="#fff">
            <use xlinkHref="#d" />
          </mask>
          <use fill="#FFF" xlinkHref="#d" />
          <circle fill="#DD404F" mask="url(#e)" cx="1.5" cy="1" r="1" />
          <path
            fill="#FBAF29"
            mask="url(#e)"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          />
        </g>
        <g transform="translate(3 12)">
          <mask id="g" fill="#fff">
            <use xlinkHref="#f" />
          </mask>
          <use fill="#FFF" xlinkHref="#f" />
          <circle fill="#DD404F" mask="url(#g)" cx="1.5" cy="1" r="1" />
          <path
            fill="#FBAF29"
            mask="url(#g)"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          />
        </g>
        <g transform="translate(3 7)">
          <mask id="i" fill="#fff">
            <use xlinkHref="#h" />
          </mask>
          <use fill="#28AE67" xlinkHref="#h" />
          <circle fill="#DD404F" mask="url(#i)" cx="1.5" cy="1" r="1" />
        </g>
        <use fill="#28AE67" xlinkHref="#j" transform="translate(3 10)" />
        <g transform="translate(3 4)">
          <mask id="l" fill="#fff">
            <use xlinkHref="#k" />
          </mask>
          <use fill="#FBAF29" xlinkHref="#k" />
          <circle fill="#DD404F" mask="url(#l)" cx="1.5" cy="1" r="1" />
          <path fill="#28AE67" mask="url(#l)" d="M0 0h1v2H0zM2 0h1v2H2z" />
        </g>
        <path
          d="M11.117 3.179a.5.5 0 10.766.642.5.5 0 00-.766-.642zM9.821 5.117a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-1-1a.5.5 0 10-.642.766.5.5 0 00.642-.766zm2-2a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-.5 1.5a.5.5 0 10-.642.766.5.5 0 00.642-.766z"
          fill="url(#a)"
        />
        <path
          d="M13.107 7.088a3.05 3.05 0 01-4.626-.366 3.05 3.05 0 004.26-4.26 3.05 3.05 0 01.366 4.626z"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

TM.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TM.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default TM;
