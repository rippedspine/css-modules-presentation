import React, { Component, PropTypes } from 'react'

import styles from './title.css'

export default class Title extends Component {
  constructor(props) {
    super(props)
  }

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