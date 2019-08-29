import React from 'react'
import PropTypes from 'prop-types'

const PY = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E33F39" offset="0%"/><stop stop-color="#D32E28" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#124BBA" offset="0%"/><stop stop-color="#073DA6" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/><path d="M10.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z" fill="#398153" fill-rule="nonzero"/><circle fill="#E5CF58" cx="10.5" cy="7.5" r="1"/></g></svg>
  )
}

PY.propTypes = {
  width: '21',
  height: '15',
}

export default PY