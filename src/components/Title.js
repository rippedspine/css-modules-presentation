import React, { Component, PropTypes } from 'react'

import styles from './Title.css'

export default class Title extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['normal', 'mega'])
  }

  static defaultProps = {
    size: 'normal'
  }

  render() {
    return (
      <h1 className={styles[this.props.size]}>
        {this.props.children}
      </h1>
    )
  }
}