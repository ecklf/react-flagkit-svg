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
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_prefix__b"
        >
          <stop stopColor="#0C47B7" offset="0%" />
          <stop stopColor="#073DA4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_prefix__c"
        >
          <stop stopColor="#E53B35" offset="0%" />
          <stop stopColor="#D32E28" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_prefix__d"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SK_svg_prefix__f"
        >
          <stop stopColor="#F73744" offset="0%" />
          <stop stopColor="#EC212F" offset="100%" />
        </linearGradient>
        <path
          d="M1.711 2.001A1.048 1.048 0 012.751 1H7.25c.553 0 1.018.447 1.04 1.001L8.46 6.5c.022.553-.297 1.289-.72 1.652L6.146 9.518c-.633.542-1.662.54-2.292 0L2.259 8.15c-.419-.36-.742-1.098-.72-1.652L1.71 2z"
          id="SK_svg_prefix__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SK_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SK_svg_prefix__b)" d="M0 5h21v5H0z" />
        <path fill="url(#SK_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#SK_svg_prefix__a)" d="M0 0h21v5H0z" />
        <g transform="translate(2.5 2)">
          <path
            d="M2.751 0H7.25c1.09 0 1.997.872 2.039 1.963L9.46 6.46c.033.86-.415 1.89-1.07 2.45l-1.594 1.367c-1.007.863-2.589.861-3.594 0L1.61 8.91C.957 8.352.506 7.32.539 6.46l.173-4.497A2.048 2.048 0 012.752 0z"
            fill="url(#SK_svg_prefix__d)"
            fillRule="nonzero"
          />
          <mask id="SK_svg_prefix__g" fill="#fff">
            <use xlinkHref="#SK_svg_prefix__e" />
          </mask>
          <use fill="url(#SK_svg_prefix__f)" xlinkHref="#SK_svg_prefix__e" />
          <path
            d="M4.5 6.245A.25.25 0 004.252 6H3.248A.246.246 0 013 5.748v-.496C3 5.113 3.118 5 3.248 5h1.004a.246.246 0 00.248-.252v-.496A.249.249 0 004.248 4h-.496a.249.249 0 01-.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252-.107.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.107.252.252.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 00-.252.252v.496c0 .139.118.252.248.252h1.004C6.89 5 7 5.107 7 5.252v.496C7 5.887 6.882 6 6.752 6H5.748a.245.245 0 00-.248.245v1.51A.245.245 0 015.248 8h-.496a.247.247 0 01-.252-.245v-1.51z"
            fill="url(#SK_svg_prefix__a)"
            mask="url(#SK_svg_prefix__g)"
          />
          <path
            d="M4.097 8.07C2.882 8.26 2 8.828 2 9.5c0 .828 1.343 1.5 3 1.5s3-.672 3-1.5c0-.671-.882-1.24-2.097-1.43a1 1 0 00-1.806 0z"
            fill="#1251A1"
            mask="url(#SK_svg_prefix__g)"
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
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
