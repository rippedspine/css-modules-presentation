import React, { Component } from 'react'

import styles from './mediaitem.css'

console.log(styles);

export default class MediaItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <img className={styles.image} src={this.props.src} />
        <p className={styles.description}>{this.props.description}</p>
      </div>
    )
  }
}