import React, { Component, PropTypes } from 'react'

import styles from './Title.scss'

const Title = ({ children, type = 'normal' }) => (
  <h1 className={styles[type]}>
    {children}
  </h1>
)

export default Title