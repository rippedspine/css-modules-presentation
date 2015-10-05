import React, { Component, PropTypes } from 'react'

import Header from './Header'
import Body from './Body'

import styles from './slide.css'

export default class Slide extends Component {
  constructor(props) {
    super(props)
  }

  static Header = Header
  static Body = Body

  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    color: 'white'
  }

  render() {
    return (
      <div className={styles[this.props.color]}>
        <div className={styles.inner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
