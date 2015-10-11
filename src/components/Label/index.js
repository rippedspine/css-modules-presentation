import React, { Component } from 'react'

import styles from './Label'

const Label = ({ children, dark = true }) => (
  <label className={dark ? styles.dark : styles.light}>
    {children}
  </label>
)

export default Label