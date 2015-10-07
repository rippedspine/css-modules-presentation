import React, { Component, PropTypes } from 'react'

import Body from './Body'
import styles from './Slide.css'

export default class Slide extends Component {
  constructor(props) {
    super(props)
  }

  static Body = Body

  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    style: 'normal'
  }

  render() {
    const { style } = this.props;

    return (
      <div className={styles[style]}>
        <div className={styles[style === 'hero' ? 'heroInner': 'inner']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
