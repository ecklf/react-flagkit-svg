import React from 'react'
import PropTypes from 'prop-types'

const MU = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1DBB63" offset="0%"/><stop stop-color="#17A455" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#222B82" offset="0%"/><stop stop-color="#1B236C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD741" offset="0%"/><stop stop-color="#FFD430" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#F4374A" offset="0%"/><stop stop-color="#E92C3F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 12h21v3H0z"/><path fill="url(#c)" d="M0 4h21v4H0z"/><path fill="url(#d)" d="M0 8h21v4H0z"/><path fill="url(#e)" d="M0 0h21v4H0z"/></g></svg>
  )
}

MU.propTypes = {
  width: '21',
  height: '15',
}

export default MU