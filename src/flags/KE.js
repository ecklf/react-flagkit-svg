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
          id="KE_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_prefix__b"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_prefix__c"
        >
          <stop stopColor="#018301" offset="0%" />
          <stop stopColor="#006700" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_prefix__d"
        >
          <stop stopColor="#DC0808" offset="0%" />
          <stop stopColor="#BC0000" offset="100%" />
        </linearGradient>
        <path
          d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
          id="KE_svg_prefix__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#KE_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#KE_svg_prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#KE_svg_prefix__c)" d="M0 11h21v4H0z" />
        <path fill="url(#KE_svg_prefix__a)" d="M0 4h21v7H0z" />
        <path fill="url(#KE_svg_prefix__d)" d="M0 5h21v5H0z" />
        <g transform="translate(8 2)">
          <mask id="KE_svg_prefix__f" fill="#fff">
            <use xlinkHref="#KE_svg_prefix__e" />
          </mask>
          <use fill="#BC0000" xlinkHref="#KE_svg_prefix__e" />
          <ellipse
            fill="url(#KE_svg_prefix__b)"
            mask="url(#KE_svg_prefix__f)"
            cx={-1.5}
            cy={5.5}
            rx={2.5}
            ry={5.5}
          />
          <ellipse
            fill="url(#KE_svg_prefix__b)"
            mask="url(#KE_svg_prefix__f)"
            cx={6.5}
            cy={5.5}
            rx={2.5}
            ry={5.5}
          />
          <path
            d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
            fill="url(#KE_svg_prefix__a)"
            mask="url(#KE_svg_prefix__f)"
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
