import React, { Component } from 'react'

import styles from './card.css'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.code ? styles.code : styles.text}>
        {this.props.children}
      </div>
    )
  }
}