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
          id="SH_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SH_svg_prefix__b"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SH_svg_prefix__d"
        >
          <stop stopColor="#A7D2FF" offset="0%" />
          <stop stopColor="#91C6FD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SH_svg_prefix__e"
        >
          <stop stopColor="#EE7B2D" offset="0%" />
          <stop stopColor="#CC621A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SH_svg_prefix__g"
        >
          <stop stopColor="#FFFC4B" offset="0%" />
          <stop stopColor="#FFFC38" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SH_svg_prefix__h"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path
          d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 5.5 2.5 6 2.5 6S0 5.5 0 3.5z"
          id="SH_svg_prefix__c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SH_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SH_svg_prefix__b)" d="M0 0h21v15H0z" />
        <g transform="translate(13 6)">
          <mask id="SH_svg_prefix__f" fill="#fff">
            <use xlinkHref="#SH_svg_prefix__c" />
          </mask>
          <use fill="url(#SH_svg_prefix__d)" xlinkHref="#SH_svg_prefix__c" />
          <path
            d="M.5 6.5c.828 0 1-1.395 1-2.5s-.172-1.5-1-1.5C-.328 2.5-1 2.895-1 4S-.328 6.5.5 6.5z"
            fill="url(#SH_svg_prefix__e)"
            mask="url(#SH_svg_prefix__f)"
          />
          <ellipse
            fill="#A75113"
            mask="url(#SH_svg_prefix__f)"
            cx={2.5}
            cy={4.5}
            rx={1.5}
            ry={1}
          />
          <circle
            fill="#FFF"
            mask="url(#SH_svg_prefix__f)"
            cx={2.5}
            cy={3.5}
            r={1}
          />
          <path
            fill="url(#SH_svg_prefix__g)"
            mask="url(#SH_svg_prefix__f)"
            d="M0 0h5v2H0z"
          />
        </g>
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#SH_svg_prefix__a)"
          fillRule="nonzero"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#SH_svg_prefix__h)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#SH_svg_prefix__a)"
        />
        <path fill="url(#SH_svg_prefix__h)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
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
