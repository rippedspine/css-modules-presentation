import React, { Component } from 'react'

import styles from './title.css'

export default class Title extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 className={styles.root}>
        {this.props.children}
      </h1>
    )
  }
}