import React, { Component, PropTypes } from 'react'

import styles from './slide-header.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }
}