import React, { Component } from 'react'

import styles from './subtitle.css'

export default class SubTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h2 className={styles.root}>
        {this.props.children}
      </h2>
    )
  }
}