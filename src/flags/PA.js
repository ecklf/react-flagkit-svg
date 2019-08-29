import React from 'react'
import PropTypes from 'prop-types'

const PA = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E52448" offset="0%"/><stop stop-color="#D01739" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#1367AE" offset="0%"/><stop stop-color="#0A5492" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v7H0z"/><path fill="url(#c)" d="M0 7h21v8H0z"/><path d="M0 7V0h10v7H0zm10 8V7h11v8H10z" fill="url(#a)"/><path fill="url(#c)" d="M5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z"/><path fill="url(#b)" d="M15.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z"/></g></svg>
  )
}

PA.propTypes = {
  width: '21',
  height: '15',
}

export default PA