import React from 'react'
import PropTypes from 'prop-types'

const KR = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E01B41" offset="0%"/><stop stop-color="#C51335" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#0E4B9C" offset="0%"/><stop stop-color="#053677" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><circle id="b" cx="3.5" cy="3.5" r="3.5"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><g transform="translate(7 4)"><mask id="e" fill="#fff"><use xlink:href="#b"/></mask><use fill="url(#c)" xlink:href="#b"/><path d="M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3z" fill="url(#d)" mask="url(#e)"/></g><path d="M14.208 3.922a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.3-.75a.25.25 0 01.09-.347l.429-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm-12.125 7a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.299-.75a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095L4.682 9.422zm10.77-.5a.25.25 0 01.347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.3.75a.25.25 0 01.346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm-12.125-7a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.299.75a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156z" fill="url(#f)" opacity=".75"/></g></svg>
  )
}

KR.propTypes = {
  width: '21',
  height: '15',
}

export default KR