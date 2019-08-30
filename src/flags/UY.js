import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      size={size}
      {...otherProps}
    >
      <title>{"UY"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UY_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UY_svg_linearGradient-2"
        >
          <stop stopColor="#0E4DC5" offset="0%" />
          <stop stopColor="#073DA6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="UY_svg_linearGradient-3"
        >
          <stop stopColor="#FED443" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="UY_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="UY_svg_UY">
          <rect
            id="UY_svg_FlagBackground"
            fill="url(#UY_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="UY_svg_Mask-Copy"
            fill="url(#UY_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M10,0 L21,0 L21,2 L10,2 L10,0 Z M10,4 L21,4 L21,6 L10,6 L10,4 Z M10,8 L21,8 L21,10 L10,10 L10,8 Z M0,12 L21,12 L21,14 L0,14 L0,12 Z M0,0 L10,0 L10,10 L0,10 L0,0 Z"
            id="UY_svg_Rectangle-537"
            fill="url(#UY_svg_linearGradient-1)"
          />
          <path
            d="M5,6.99097645 L4.3324372,7.98746396 L4.16334362,6.80001509 L3.12953059,7.40817467 L3.4923973,6.26495326 L2.2970934,6.36433144 L3.12005018,5.4917665 L2,5.06268022 L3.12005018,4.63359394 L2.2970934,3.761029 L3.4923973,3.86040718 L3.12953059,2.71718577 L4.16334362,3.32534535 L4.3324372,2.13789648 L5,3.13438399 L5.6675628,2.13789648 L5.83665638,3.32534535 L6.87046941,2.71718577 L6.5076027,3.86040718 L7.7029066,3.761029 L6.87994982,4.63359394 L8,5.06268022 L6.87994982,5.4917665 L7.7029066,6.36433144 L6.5076027,6.26495326 L6.87046941,7.40817467 L5.83665638,6.80001509 L5.6675628,7.98746396 L5,6.99097645 Z M5,6.97177113 C6.0543618,6.97177113 6.90909091,6.11704201 6.90909091,5.06268022 C6.90909091,4.00831842 6.0543618,3.15358931 5,3.15358931 C3.9456382,3.15358931 3.09090909,4.00831842 3.09090909,5.06268022 C3.09090909,6.11704201 3.9456382,6.97177113 5,6.97177113 Z M5,6.5 C4.17157288,6.5 3.5,5.82842712 3.5,5 C3.5,4.17157288 4.17157288,3.5 5,3.5 C5.82842712,3.5 6.5,4.17157288 6.5,5 C6.5,5.82842712 5.82842712,6.5 5,6.5 Z"
            id="UY_svg_Star-28"
            fill="url(#UY_svg_linearGradient-3)"
          />
          <path
            d="M4.125,5 C4.125,4.93096441 4.18096441,4.875 4.25,4.875 C4.31903559,4.875 4.375,4.93096441 4.375,5 C4.375,5.10621142 4.4014208,5.20831584 4.45116204,5.29929729 C4.56008685,5.49853111 4.7688556,5.625 5,5.625 C5.24308668,5.625 5.4608675,5.48502599 5.56405744,5.26959534 C5.58328284,5.23184333 5.58328284,5.23184333 5.60236434,5.19923148 C5.60924534,5.18763516 5.60924534,5.18763516 5.61584827,5.17655999 C5.66352573,5.09644459 5.67828369,5.05821166 5.67828369,5 C5.67828369,4.93096441 5.7342481,4.875 5.80328369,4.875 C5.87231929,4.875 5.92828369,4.93096441 5.92828369,5 C5.92828369,5.11418719 5.89948015,5.18880748 5.83068361,5.30441059 C5.82394544,5.31571335 5.82394544,5.31571335 5.81759523,5.32641505 C5.80162351,5.35379629 5.80162351,5.35379629 5.78952663,5.37759368 C5.64515037,5.67900942 5.34021526,5.875 5,5.875 C4.67653889,5.875 4.38414799,5.69787409 4.2318048,5.41922394 C4.16208221,5.29169472 4.125,5.14838874 4.125,5 Z M5.5,4.75 C5.36192881,4.75 5.25,4.63807119 5.25,4.5 C5.25,4.36192881 5.36192881,4.25 5.5,4.25 C5.63807119,4.25 5.75,4.36192881 5.75,4.5 C5.75,4.63807119 5.63807119,4.75 5.5,4.75 Z M4.5,4.75 C4.36192881,4.75 4.25,4.63807119 4.25,4.5 C4.25,4.36192881 4.36192881,4.25 4.5,4.25 C4.63807119,4.25 4.75,4.36192881 4.75,4.5 C4.75,4.63807119 4.63807119,4.75 4.5,4.75 Z"
            id="UY_svg_Combined-Shape"
            fill="#C6A326"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
