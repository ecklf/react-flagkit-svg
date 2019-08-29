import React from 'react'
import PropTypes from 'prop-types'

const FM = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#95CEF5" offset="0%"/><stop stop-color="#78B3DC" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M10.5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365L10.5 4.32zm0 8l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 9.5l.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798zm4-4l-1.176.798.396-1.365-1.122-.871 1.42-.045L14.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L14.5 8.32zm-8 0l-1.176.798.396-1.365-1.122-.871 1.42-.045L6.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L6.5 8.32z" fill="url(#a)"/></g></svg>
  )
}

FM.propTypes = {
  width: '21',
  height: '15',
}

export default FM