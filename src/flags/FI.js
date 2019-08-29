import React from 'react'
import PropTypes from 'prop-types'

const FI = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0848A6" offset="0%"/><stop stop-color="#003480" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z"/></g></svg>
  )
}

FI.propTypes = {
  width: '21',
  height: '15',
}

export default FI
