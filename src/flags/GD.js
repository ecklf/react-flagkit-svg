import React from "react";
import PropTypes from "prop-types";

const GD = props => {
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#E42235" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#079B77" offset="0%" />
          <stop stopColor="#007B5D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#FFD938" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g">
          <stop stopColor="#FFD93B" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="h">
          <stop stopColor="#E21C30" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
        <path id="c" d="M0 0h17v11H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <g transform="translate(2 2)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="url(#d)" xlinkHref="#c" />
          <path
            d="M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802z"
            fill="url(#e)"
            mask="url(#f)"
          />
          <path
            d="M0 0h17L8.5 5.5 0 0zm0 11l8.5-5.5L17 11H0z"
            fill="url(#g)"
            mask="url(#f)"
          />
          <circle fill="url(#h)" mask="url(#f)" cx="8.5" cy="5.5" r="2.5" />
          <path
            fill="url(#e)"
            mask="url(#f)"
            d="M8.5 6.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
          />
        </g>
      </g>
    </svg>
  );
};

GD.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GD.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default GD;
