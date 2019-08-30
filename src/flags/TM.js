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
        <ellipse id="TM_svg_prefix__d" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_prefix__f" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_prefix__h" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_prefix__j" cx={1.5} cy={0.5} rx={1.5} ry={1} />
        <ellipse id="TM_svg_prefix__k" cx={1.5} cy={1} rx={1.5} ry={1} />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_prefix__b"
        >
          <stop stopColor="#30C375" offset="0%" />
          <stop stopColor="#28AE67" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_prefix__c"
        >
          <stop stopColor="#DE414F" offset="0%" />
          <stop stopColor="#CA3745" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TM_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#TM_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#TM_svg_prefix__c)" d="M3 0h3v15H3z" />
        <g transform="translate(3 1)">
          <mask id="TM_svg_prefix__e" fill="#fff">
            <use xlinkHref="#TM_svg_prefix__d" />
          </mask>
          <use fill="#FFF" xlinkHref="#TM_svg_prefix__d" />
          <circle
            fill="#DD404F"
            mask="url(#TM_svg_prefix__e)"
            cx={1.5}
            cy={1}
            r={1}
          />
          <path
            fill="#FBAF29"
            mask="url(#TM_svg_prefix__e)"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          />
        </g>
        <g transform="translate(3 12)">
          <mask id="TM_svg_prefix__g" fill="#fff">
            <use xlinkHref="#TM_svg_prefix__f" />
          </mask>
          <use fill="#FFF" xlinkHref="#TM_svg_prefix__f" />
          <circle
            fill="#DD404F"
            mask="url(#TM_svg_prefix__g)"
            cx={1.5}
            cy={1}
            r={1}
          />
          <path
            fill="#FBAF29"
            mask="url(#TM_svg_prefix__g)"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          />
        </g>
        <g transform="translate(3 7)">
          <mask id="TM_svg_prefix__i" fill="#fff">
            <use xlinkHref="#TM_svg_prefix__h" />
          </mask>
          <use fill="#28AE67" xlinkHref="#TM_svg_prefix__h" />
          <circle
            fill="#DD404F"
            mask="url(#TM_svg_prefix__i)"
            cx={1.5}
            cy={1}
            r={1}
          />
        </g>
        <use
          fill="#28AE67"
          xlinkHref="#TM_svg_prefix__j"
          transform="translate(3 10)"
        />
        <g transform="translate(3 4)">
          <mask id="TM_svg_prefix__l" fill="#fff">
            <use xlinkHref="#TM_svg_prefix__k" />
          </mask>
          <use fill="#FBAF29" xlinkHref="#TM_svg_prefix__k" />
          <circle
            fill="#DD404F"
            mask="url(#TM_svg_prefix__l)"
            cx={1.5}
            cy={1}
            r={1}
          />
          <path
            fill="#28AE67"
            mask="url(#TM_svg_prefix__l)"
            d="M0 0h1v2H0zM2 0h1v2H2z"
          />
        </g>
        <path
          d="M11.117 3.179a.5.5 0 10.766.642.5.5 0 00-.766-.642zM9.821 5.117a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-1-1a.5.5 0 10-.642.766.5.5 0 00.642-.766zm2-2a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-.5 1.5a.5.5 0 10-.642.766.5.5 0 00.642-.766z"
          fill="url(#TM_svg_prefix__a)"
        />
        <path
          d="M13.107 7.088a3.05 3.05 0 01-4.626-.366 3.05 3.05 0 004.26-4.26 3.05 3.05 0 01.366 4.626z"
          fill="url(#TM_svg_prefix__a)"
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
