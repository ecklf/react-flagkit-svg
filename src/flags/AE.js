import React from 'react'
import PropTypes from 'prop-types'

const AE = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#12833B" offset="0%"/><stop stop-color="#0D7332" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FF323E" offset="0%"/><stop stop-color="#FD0D1B" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M6 0h15v5H6z"/><path fill="url(#c)" d="M6 10h15v5H6z"/><path fill="url(#a)" d="M6 5h15v5H6z"/><path fill="url(#d)" d="M0 0h6v15H0z"/></g></svg>
  )
}

AE.propTypes = {
  width: '21',
  height: '15',
}

export default AE