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
      <title>{"CX"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_linearGradient-2"
        >
          <stop stopColor="#0637C5" offset="0%" />
          <stop stopColor="#002CAA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_linearGradient-3"
        >
          <stop stopColor="#3BA758" offset="0%" />
          <stop stopColor="#2C8945" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_linearGradient-4"
        >
          <stop stopColor="#FFCC5D" offset="0%" />
          <stop stopColor="#FEC54A" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CX_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CX_svg_CX">
          <rect
            id="CX_svg_FlagBackground"
            fill="url(#CX_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CX_svg_Mask-Copy"
            fill="url(#CX_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="CX_svg_Star-2"
            fill="#FFFFFF"
            points="4 13 3.29289322 13.2071068 3.5 12.5 3.29289322 11.7928932 4 12 4.70710678 11.7928932 4.5 12.5 4.70710678 13.2071068"
          />
          <polygon
            id="CX_svg_Star-2"
            fill="#FFFFFF"
            points="4 5.5 3.29289322 5.70710678 3.5 5 3.29289322 4.29289322 4 4.5 4.70710678 4.29289322 4.5 5 4.70710678 5.70710678"
          />
          <polygon
            id="CX_svg_Star-2"
            fill="#FFFFFF"
            points="6 8.5 5.29289322 8.70710678 5.5 8 5.29289322 7.29289322 6 7.5 6.70710678 7.29289322 6.5 8 6.70710678 8.70710678"
          />
          <polygon
            id="CX_svg_Star-2"
            fill="#FFFFFF"
            points="2 9.5 1.29289322 9.70710678 1.5 9 1.29289322 8.29289322 2 8.5 2.70710678 8.29289322 2.5 9 2.70710678 9.70710678"
          />
          <polygon
            id="CX_svg_Star-2"
            fill="#FFFFFF"
            points="5.5 10.75 5.14644661 10.8535534 5.25 10.5 5.14644661 10.1464466 5.5 10.25 5.85355339 10.1464466 5.75 10.5 5.85355339 10.8535534"
          />
          <path
            d="M0,15 L8.92088689,8.62793794 C8.92088689,8.62793794 10.9032976,9.65338011 11.6608887,9.11224365 C12.4184797,8.57110719 12.007584,6.42315426 12.007584,6.42315426 L21,0 L0,0 L0,15 Z"
            id="CX_svg_Rectangle-2"
            fill="url(#CX_svg_linearGradient-3)"
            transform="translate(10.500000, 7.500000) scale(-1, 1) translate(-10.500000, -7.500000) "
          />
          <path
            d="M14.4608154,7.5 C14.4608154,7.5 16.8752441,7.10070801 17.1632469,5.97338867 C17.4512496,4.84606934 14.8652842,4.03911885 14.7629395,3.63378906 C14.6605947,3.22845927 15.713369,3.51604253 16.1784668,3.63378906 C16.629344,3.74793543 17.5108643,4.32946777 17.5108643,4.32946777 C17.5108643,4.32946777 17.5002035,3.52896036 17.3800049,3.15930176 C17.1780193,2.53811563 16.5443115,1.35693359 16.5443115,1.35693359 C16.5443115,1.35693359 17.6192341,2.04635707 18.0804443,2.59667969 C18.3447129,2.91200868 18.4435738,4.33495351 18.7702637,4.82263184 C19.3544946,5.69476397 20.7176961,4.72111177 20.1385498,5.64562988 C19.5594035,6.570148 18.228,6.69580008 17.1632469,7.10070801 C16.1976859,7.4678948 14.0476074,7.96191406 14.0476074,7.96191406 L14.4608154,7.5 Z"
            id="CX_svg_Rectangle-1235"
            fill="url(#CX_svg_linearGradient-4)"
          />
          <path
            d="M10.5,10 C9.11928813,10 8,8.88071187 8,7.5 C8,6.11928813 9.11928813,5 10.5,5 C11.8807119,5 13,6.11928813 13,7.5 C13,8.88071187 11.8807119,10 10.5,10 Z M9.25823975,7.5 L9,8 C9,8 9.83917652,7.81083448 10.1229248,8 C10.5071976,8.25618185 10.5,9 10.5,9 L11,9 C11,9 10.8364748,8.27040987 11.0932007,7.75695801 C11.3499266,7.24350614 12,7 12,7 L12,6 C12,6 11.3187548,6.72708173 10.5,7 C9.68124518,7.27291827 9,7 9,7 L9.25823975,7.5 Z"
            id="CX_svg_Combined-Shape"
            fill="url(#CX_svg_linearGradient-4)"
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
