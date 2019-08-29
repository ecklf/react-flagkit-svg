import React from 'react'
import PropTypes from 'prop-types'

const SG = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#E12237" offset="0%"/><stop stop-color="#CE1126" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v8H0z"/><path fill="url(#a)" d="M0 8h21v7H0zM6.874 1.657a2.5 2.5 0 100 4.686 3 3 0 110-4.686zM5.5 4a.5.5 0 110-1 .5.5 0 010 1zm1 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1-2a.5.5 0 110-1 .5.5 0 010 1zm-2-1.5a.5.5 0 110-1 .5.5 0 010 1z"/></g></svg>
  )
}

SG.propTypes = {
  width: '21',
  height: '15',
}

export default SG
