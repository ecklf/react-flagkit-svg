import React from "react";
import PropTypes from "prop-types";

const AD = props => {
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
          <stop stopColor="#1537D1" offset="0%" />
          <stop stopColor="#0522A5" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stopColor="#EA3058" offset="0%" />
          <stop stopColor="#CE173E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v15H0z" />
        <path fill="url(#c)" d="M10 0h11v15H10z" />
        <path fill="url(#d)" d="M7 0h7v15H7z" />
        <path fill="#FFEDB1" d="M9.5 6.5h1V7h-1z" />
        <path
          d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 00.587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 019.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z"
          fill="#D32E28"
          fillRule="nonzero"
        />
        <path fill="#D32E28" d="M9.5 7h2v.5h-2z" />
      </g>
    </svg>
  );
};

AD.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AD.defaultProps = {
  size: 15,
  width: 21,
  height: 15,
};

export default AD;
