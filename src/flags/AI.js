import React from "react";
import PropTypes from "prop-types";

const AI = props => {
  const { width, height, ...otherProps } = props;
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
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#0A17A7" offset="0%" />
          <stop stop-color="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#DB1E36" offset="0%" />
          <stop stop-color="#D51931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="g">
          <stop stop-color="#FFA51B" offset="0%" />
          <stop stop-color="#FF9A00" offset="100%" />
        </linearGradient>
        <filter
          x="-6.2%"
          y="-5%"
          width="112.5%"
          height="120%"
          filterUnits="objectBoundingBox"
          id="e"
        >
          <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            in="shadowOffsetOuter1"
          />
        </filter>
        <path
          d="M0 2.5V0l1 .5L2 0l1 .5L4 0v2.5C4 4 2 5 2 5S0 4 0 2.5z"
          id="d"
        />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#a)"
          fill-rule="nonzero"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#a)"
        />
        <path fill="url(#c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <g transform="translate(13 5)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#d" />
          </mask>
          <use fill="#000" filter="url(#e)" xlinkHref="#d" />
          <use fill="url(#a)" xlinkHref="#d" />
          <path fill="#9ACCFF" mask="url(#f)" d="M0 4h4v1H0z" />
          <path
            d="M2 2a.5.5 0 110-1 .5.5 0 010 1zM1 3a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
            fill="url(#g)"
            mask="url(#f)"
          />
        </g>
      </g>
    </svg>
  );
};

AI.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AI.defaultProps = {
  width: "21",
  height: "15",
};

export default AI;
