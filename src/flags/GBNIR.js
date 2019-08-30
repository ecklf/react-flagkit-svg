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
          id="GBNIR_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_prefix__b"
        >
          <stop stopColor="#E82739" offset="0%" />
          <stop stopColor="#CA1A2B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_prefix__c"
        >
          <stop stopColor="#E6101E" offset="0%" />
          <stop stopColor="#CA0814" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_prefix__e"
        >
          <stop stopColor="#FFD148" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
        <path
          d="M9 3.75L10 4l.5-.5.5.5 1-.25-.404 1.009a.4.4 0 01-.341.241h-1.51a.39.39 0 01-.341-.241L9 3.75zM10.5 3a.5.5 0 110-1 .5.5 0 010 1z"
          id="GBNIR_svg_prefix__d"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GBNIR_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z"
          fill="url(#GBNIR_svg_prefix__b)"
        />
        <path
          fill="url(#GBNIR_svg_prefix__a)"
          d="M11.516 9.26L10.5 11 9.484 9.26l-2.015-.01.998-1.75-.998-1.75 2.015-.01L10.5 4l1.016 1.74 2.015.01-.998 1.75.998 1.75z"
        />
        <path
          d="M9.55 7.006a.656.656 0 01.425-.664l.55-.184c.263-.087.475.063.475.35V7.5s.321-1.037.5-.5c.179.537-.128 1.526-.128 1.526a.671.671 0 01-.63.474h-.484c-.28 0-.531-.23-.559-.506l-.148-1.488z"
          fill="url(#GBNIR_svg_prefix__c)"
        />
        <path
          d="M10.5 2.908c-.511 0-.967.304-1.168.763l-.1.229.457.201.1-.229a.775.775 0 011.418-.005l.102.228.456-.205-.102-.228a1.275 1.275 0 00-1.164-.754z"
          fill="url(#GBNIR_svg_prefix__a)"
          fillRule="nonzero"
        />
        <mask id="GBNIR_svg_prefix__f" fill="#fff">
          <use xlinkHref="#GBNIR_svg_prefix__d" />
        </mask>
        <use
          fill="url(#GBNIR_svg_prefix__e)"
          xlinkHref="#GBNIR_svg_prefix__d"
        />
        <circle
          fill="#5169E2"
          mask="url(#GBNIR_svg_prefix__f)"
          cx={10.5}
          cy={4.5}
          r={1}
        />
        <circle
          fill="#D34D43"
          mask="url(#GBNIR_svg_prefix__f)"
          cx={11.5}
          cy={4.5}
          r={1}
        />
        <circle
          fill="#D34D43"
          mask="url(#GBNIR_svg_prefix__f)"
          cx={9.5}
          cy={4.5}
          r={1}
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
