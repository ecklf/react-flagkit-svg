import React from "react";
import PropTypes from "prop-types";

const KH = props => {
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
          <stop stopColor="#0F3EB6" offset="0%" />
          <stop stopColor="#09339F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#ED1A3C" offset="0%" />
          <stop stopColor="#DE0B2D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
        <path fill="url(#c)" d="M0 4h21v7H0z" />
        <path
          d="M7.5 8h1v2h-2l1-2zM9 8h3v2H9V8zm3.5 0h1l1 2h-2V8zm0-1.492A.51.51 0 0113 6a.5.5 0 01.5.508V7.5h-1v-.992zM9 6.545h1v-.547c0-.275.232-.498.5-.498.276 0 .5.222.5.498v.547h1V7.5H9v-.955zm-1.5-.037A.51.51 0 018 6a.5.5 0 01.5.508V7.5h-1v-.992z"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
};

KH.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KH.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default KH;
