import React from "react";
import PropTypes from "prop-types";

const KN = props => {
  let { size, width, height, ...otherProps } = props;

  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stopColor="#1EC160" offset="0%" />
          <stop stopColor="#169E4D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#DF2A40" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="16.742%" x2="50%" y2="82.422%" id="d">
          <stop stopColor="#FFD956" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M.001 10l21-10h-21z" />
        <path fill="url(#c)" d="M.001 15h21V5z" />
        <path fill="url(#d)" d="M.59 19L25.182 3.632 20.413-4-4.18 11.368z" />
        <path
          fill="url(#e)"
          d="M-.47 17.304L24.122 1.936l-2.65-4.24L-3.12 13.064z"
        />
        <path
          fill="url(#a)"
          d="M15.233 5.848l-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022zM7.233 10.698l-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z"
        />
      </g>
    </svg>
  );
};

KN.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KN.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default KN;
