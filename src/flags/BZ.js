import React from "react";
import PropTypes from "prop-types";

const BZ = props => {
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
          <stop stopColor="#094995" offset="0%" />
          <stop stopColor="#074185" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#D5182F" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 2h21v11H0z" />
        <path fill="url(#c)" d="M0 0h21v2H0zM0 13h21v2H0z" />
        <circle fill="url(#a)" cx="10.5" cy="7.5" r="4.5" />
        <path
          d="M10.5 11a.5.5 0 110-1c.284 0 .56-.047.822-.138a.5.5 0 11.329.944A3.495 3.495 0 0110.5 11zm2.651-1.215a3.5 3.5 0 00.605-.998.5.5 0 00-.93-.368 2.5 2.5 0 01-.432.713.5.5 0 00.757.653zm.817-2.759a3.48 3.48 0 00-.348-1.114.5.5 0 00-.891.454c.126.248.21.516.248.794a.5.5 0 10.991-.134zm-1.611-2.493a3.482 3.482 0 00-1.08-.446.5.5 0 00-.22.975c.273.062.532.17.769.318a.5.5 0 10.53-.847zm-2.8-.405a3.487 3.487 0 00-1.055.498.5.5 0 10.571.82c.23-.159.484-.28.753-.354a.5.5 0 00-.268-.964zM7.35 5.973a3.48 3.48 0 00-.327 1.121.5.5 0 10.994.115 2.48 2.48 0 01.232-.8.5.5 0 10-.9-.436zm-.06 2.925c.157.359.373.689.638.976a.5.5 0 10.735-.678 2.503 2.503 0 01-.456-.698.5.5 0 10-.917.4zm2.146 1.937a.5.5 0 11.304-.953c.229.073.469.113.714.118a.5.5 0 01-.018 1 3.495 3.495 0 01-1-.165z"
          fill="#118014"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

BZ.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BZ.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default BZ;
