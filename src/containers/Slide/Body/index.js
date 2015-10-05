import React, { Component } from 'react'

import styles from './slide-body.css'

export default class Body extends Component {
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