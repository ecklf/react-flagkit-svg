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
          id="AG_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_prefix__b"
        >
          <stop stopColor="#E2243B" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_prefix__d"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_prefix__e"
        >
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AG_svg_prefix__g"
        >
          <stop stopColor="#1984D8" offset="0%" />
          <stop stopColor="#1175C4" offset="100%" />
        </linearGradient>
        <path id="AG_svg_prefix__c" d="M0 0h21L10.5 15z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#AG_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path
          d="M8.5 7a2 2 0 00.998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
          opacity={0.75}
        />
        <ellipse
          fillOpacity={0.5}
          fill="#FFF"
          cx={10.5}
          cy={6.5}
          rx={1}
          ry={1.5}
        />
        <path fill="url(#AG_svg_prefix__b)" d="M0 0h21v15H0z" />
        <mask id="AG_svg_prefix__f" fill="#fff">
          <use xlinkHref="#AG_svg_prefix__c" />
        </mask>
        <use fill="url(#AG_svg_prefix__d)" xlinkHref="#AG_svg_prefix__c" />
        <path
          fill="url(#AG_svg_prefix__e)"
          mask="url(#AG_svg_prefix__f)"
          d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
        />
        <path
          fill="url(#AG_svg_prefix__g)"
          mask="url(#AG_svg_prefix__f)"
          d="M0 6h21v4H0z"
        />
        <path
          fill="url(#AG_svg_prefix__a)"
          mask="url(#AG_svg_prefix__f)"
          d="M0 10h21v5H0z"
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
