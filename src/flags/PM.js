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
          id="PM_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__b"
        >
          <stop stopColor="#138E16" offset="0%" />
          <stop stopColor="#0F7F12" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__c"
        >
          <stop stopColor="#26A7DC" offset="0%" />
          <stop stopColor="#1B94C6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__d"
        >
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FFCE2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__f"
        >
          <stop stopColor="#F03633" offset="0%" />
          <stop stopColor="#D82A28" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="82.842%"
          y1="18.137%"
          x2="20.426%"
          y2="78.479%"
          id="PM_svg_prefix__g"
        >
          <stop stopColor="#2AA854" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__i"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__j"
        >
          <stop stopColor="#D7181D" offset="0%" />
          <stop stopColor="#C60E13" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_prefix__k"
        >
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
        <path id="PM_svg_prefix__e" d="M0 0h7v5H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PM_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#PM_svg_prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#PM_svg_prefix__c)" d="M0 15h21V0H0z" />
        <path
          d="M17.326 6.429C18.353 6.176 19 6.109 19 7c0 1.657-2.239 3-5 3S9 8.657 9 7c0-.89.647-.824 1.674-.571a4.114 4.114 0 01-.161-.563c-.287-1.35.137-2.584.947-2.757.81-.172 1.7.783 1.987 2.134.136.636.113 1.247-.034 1.733a7.414 7.414 0 001.174 0c-.147-.486-.17-1.097-.034-1.733.287-1.35 1.176-2.306 1.987-2.134.81.173 1.234 1.407.947 2.757a4.114 4.114 0 01-.161.563z"
          fill="url(#PM_svg_prefix__d)"
        />
        <path
          d="M15.776 12.947a.5.5 0 00.448 0l2-1a.5.5 0 00-.448-.894L16 11.94l-1.776-.888a.5.5 0 00-.448 0L12 11.94l-1.776-.888a.5.5 0 00-.448.894l2 1a.5.5 0 00.448 0L14 12.06l1.776.888z"
          fill="url(#PM_svg_prefix__a)"
          fillRule="nonzero"
        />
        <mask id="PM_svg_prefix__h" fill="#fff">
          <use xlinkHref="#PM_svg_prefix__e" />
        </mask>
        <use fill="url(#PM_svg_prefix__f)" xlinkHref="#PM_svg_prefix__e" />
        <path
          d="M4 2v-4H3v4h-4v1h4v4h1V3h4V2H4z"
          fill="url(#PM_svg_prefix__g)"
          mask="url(#PM_svg_prefix__h)"
          transform="rotate(-45 3.5 2.5)"
        />
        <path
          d="M4 2v-3H3v3H0v1h3v3h1V3h3V2H4z"
          fill="url(#PM_svg_prefix__a)"
          mask="url(#PM_svg_prefix__h)"
        />
        <path fill="url(#PM_svg_prefix__a)" d="M0 5h7v5H0z" />
        <path
          d="M1.5 7a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-1 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#PM_svg_prefix__i)"
        />
        <path fill="url(#PM_svg_prefix__j)" d="M0 10h7v5H0z" />
        <path
          d="M3.5 12c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5zm0 2c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5z"
          fill="url(#PM_svg_prefix__k)"
        />
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
