import React, { Component } from 'react'

import styles from './label.css'

export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    dark: true
  }

  render() {
    return (
      <label className={this.props.dark ? styles.dark : styles.light}>
        {this.props.children}
      </label>
    )
  }
}