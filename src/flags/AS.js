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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg_prefix__b">
          <stop stopColor="#071585" offset="0%" />
          <stop stopColor="#000B64" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg_prefix__c">
          <stop stopColor="#D32636" offset="0%" />
          <stop stopColor="#BA1827" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="35.4%" y2="89.131%" id="AS_svg_prefix__d">
          <stop stopColor="#AB5423" offset="0%" />
          <stop stopColor="#5A3719" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#AS_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#AS_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#AS_svg_prefix__c)"
          fillRule="nonzero"
          d="M22 15.5l-22-8 22-8z"
        />
        <path
          fill="url(#AS_svg_prefix__a)"
          fillRule="nonzero"
          d="M21 .928L2.926 7.5 21 14.072z"
        />
        <path
          d="M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"
          fill="url(#AS_svg_prefix__d)"
        />
        <circle fill="#FFC322" cx={13.5} cy={7.5} r={1} />
        <path
          d="M12.5 9h5a.5.5 0 100-1h-5a.5.5 0 100 1z"
          fill="#FFC322"
          fillRule="nonzero"
        />
        <path
          d="M14.197 10.46l3.5-1.5a.5.5 0 00-.394-.92l-3.5 1.5a.5.5 0 00.394.92z"
          fill="#FFC322"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
