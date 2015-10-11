import React, { Component } from 'react'

import styles from './Description.css'

export default class Description extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }
}