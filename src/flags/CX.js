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
          id="CX_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_prefix__b"
        >
          <stop stopColor="#0637C5" offset="0%" />
          <stop stopColor="#002CAA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_prefix__c"
        >
          <stop stopColor="#3BA758" offset="0%" />
          <stop stopColor="#2C8945" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CX_svg_prefix__d"
        >
          <stop stopColor="#FFCC5D" offset="0%" />
          <stop stopColor="#FEC54A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CX_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#CX_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="#FFF"
          d="M4 13l-.707.207.207-.707-.207-.707L4 12l.707-.207-.207.707.207.707zM4 5.5l-.707.207L3.5 5l-.207-.707L4 4.5l.707-.207L4.5 5l.207.707zM6 8.5l-.707.207L5.5 8l-.207-.707L6 7.5l.707-.207L6.5 8l.207.707zM2 9.5l-.707.207L1.5 9l-.207-.707L2 8.5l.707-.207L2.5 9l.207.707zM5.5 10.75l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354z"
        />
        <path
          d="M0 15l8.92-6.372s1.983 1.025 2.74.484c.758-.54.348-2.689.348-2.689L21 0H0v15z"
          fill="url(#CX_svg_prefix__c)"
          transform="matrix(-1 0 0 1 21 0)"
        />
        <path
          d="M14.46 7.5s2.415-.4 2.703-1.527c.288-1.127-2.298-1.934-2.4-2.34-.102-.405.95-.117 1.415 0 .451.115 1.333.696 1.333.696s-.01-.8-.131-1.17c-.202-.62-.836-1.802-.836-1.802s1.075.69 1.536 1.24c.265.315.364 1.738.69 2.226.584.872 1.948-.102 1.369.823-.58.924-1.911 1.05-2.976 1.455-.965.367-3.115.86-3.115.86l.413-.461zM10.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM9.258 7.5L9 8s.84-.19 1.123 0c.384.256.377 1 .377 1h.5s-.164-.73.093-1.243C11.35 7.244 12 7 12 7V6s-.681.727-1.5 1S9 7 9 7l.258.5z"
          fill="url(#CX_svg_prefix__d)"
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
