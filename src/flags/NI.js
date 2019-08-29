import React from 'react'
import PropTypes from 'prop-types'

const NI = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1A78D6" offset="0%"/><stop stop-color="#106AC4" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0zM0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path d="M10.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z" fill="#DBCD92" fill-rule="nonzero"/><path fill="#9CDDEE" d="M10.5 6.5l1 2h-2z"/></g></svg>
  )
}

NI.propTypes = {
  width: '21',
  height: '15',
}

export default NI