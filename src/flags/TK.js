import React from 'react'
import PropTypes from 'prop-types'

const TK = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0637C5" offset="0%"/><stop stop-color="#002CAA" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FDD33F" offset="0%"/><stop stop-color="#FED02F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M4 12h15v1H3l1-1zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5z" fill="url(#c)"/><path fill="#FFF" d="M4 9l-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z"/></g></svg>
  )
}

TK.propTypes = {
  width: '21',
  height: '15',
}

export default TK