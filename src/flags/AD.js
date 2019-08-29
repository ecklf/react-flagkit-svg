import React from 'react'
import PropTypes from 'prop-types'

const AD = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1537D1" offset="0%"/><stop stop-color="#0522A5" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#EA3058" offset="0%"/><stop stop-color="#CE173E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFCF3C" offset="0%"/><stop stop-color="#FECB2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M10 0h11v15H10z"/><path fill="url(#d)" d="M7 0h7v15H7z"/><path fill="#FFEDB1" d="M9.5 6.5h1V7h-1z"/><path d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 00.587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 019.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z" fill="#D32E28" fill-rule="nonzero"/><path fill="#D32E28" d="M9.5 7h2v.5h-2z"/></g></svg>
  )
}

AD.propTypes = {
  width: '21',
  height: '15',
}

export default AD