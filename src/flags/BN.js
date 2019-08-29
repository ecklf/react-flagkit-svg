import React from 'react'
import PropTypes from 'prop-types'

const BN = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F7E250" offset="0%"/><stop stop-color="#F7DF38" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#a)" transform="rotate(20 11.013 6.09)" d="M-3.487 4.59h29v3h-29z"/><path fill="url(#c)" transform="rotate(20 9.987 8.91)" d="M-4.513 7.41h29v3h-29z"/></g></svg>
  )
}

BN.propTypes = {
  width: '21',
  height: '15',
}

export default BN