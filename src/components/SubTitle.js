import React, { Component } from 'react'

import styles from './SubTitle.css'

export default class SubTitle extends Component {
  render() {
    return (
      <h2 className={styles.root}>
        {this.props.children}
      </h2>
    )
  }
}