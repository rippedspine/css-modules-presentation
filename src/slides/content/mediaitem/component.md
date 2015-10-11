```
import React, { Component } from 'react'

import styles from './MediaItem.css'

export default class MediaItem extends Component {
  render() {
    return (
      <div className={styles.root}>
        <img 
          className={styles.image} 
          src={this.props.src} 
        />
        <p className={styles.description}>
          {this.props.description}
        </p>
      </div>
    )
  }
}
```