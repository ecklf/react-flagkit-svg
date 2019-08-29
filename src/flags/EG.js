import React from "react";
import PropTypes from "prop-types";

const EG = props => {
  const { width, height, ...otherProps } = props;
  return (
    <svg
      width={width}
      height={height}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#FFF" offset="0%" />
          <stop stop-color="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <stop stop-color="#E41D33" offset="0%" />
          <stop stop-color="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <stop stop-color="#262626" offset="0%" />
          <stop stop-color="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" d="M0 0h21v15H0z" />
        <path fill="url(#b)" d="M0 0h21v5H0z" />
        <path fill="url(#c)" d="M0 10h21v5H0z" />
        <path fill="url(#a)" d="M0 5h21v5H0z" />
        <path
          d="M8 6.495C8 6.222 8.232 6 8.5 6h.248c.139 0 .298.092.368.232L9.5 7s.55-1 1-1c.5 0 1 1 1 1l.384-.768A.445.445 0 0112.252 6h.248c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L11.5 8H11v.5c0 .276-.232.5-.5.5a.505.505 0 01-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222v-2.01z"
          fill-opacity=".25"
          fill="#F4B32E"
        />
        <path
          d="M12.5 8.066V6.5h-.191l-.54 1.079.731.487zM8.691 6.5h-.19L8.5 6.495v1.57l.73-.486L8.691 6.5zm1.809 1v1-1h.691l-.138-.276c-.05-.1-.146-.265-.266-.424-.12-.16-.23-.26-.271-.29a1.387 1.387 0 00-.29.296c-.126.163-.23.33-.288.435l-.142.259h.704zm.874-.724c.08.13.126.224.126.224l.112-.224s.231-.195.157-.313l.115-.231A.445.445 0 0112.252 6h.248c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L11.5 8H11v.5c0 .276-.232.5-.5.5a.505.505 0 01-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222v-2.01C8 6.222 8.232 6 8.5 6h.248c.139 0 .298.092.368.232l.12.24c-.071.108.147.293.147.293L9.5 7s.053-.097.14-.23l.178-.253c.195-.255.451-.517.682-.517.25 0 .502.252.69.503l.184.273z"
          fill="#C6A846"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

EG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EG.propTypes = {
  width: "21",
  height: "15",
};

export default EG;
