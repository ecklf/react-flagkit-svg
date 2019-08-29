import React from 'react'
import PropTypes from 'prop-types'

const AW = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#5098EA" offset="0%"/><stop stop-color="#458BDB" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E82045" offset="0%"/><stop stop-color="#D01739" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M1.803 4.96a.5.5 0 010-.92l1.566-.67.671-1.567a.5.5 0 01.92 0l.67 1.566 1.567.671a.5.5 0 010 .92l-1.566.67-.671 1.567a.5.5 0 01-.92 0l-.67-1.566-1.567-.671z" fill="url(#a)" fill-rule="nonzero"/><path fill="url(#c)" d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"/><path fill="#F9D536" d="M0 11h21v1H0zM0 9h21v1H0z"/></g></svg>
  )
}

AW.propTypes = {
  width: '21',
  height: '15',
}

export default AW