```
import React from 'react'

import styles from './MediaItem'

const MediaItem = ({ src, description }) => (
  <div className={styles.root}>
    <img src={src} className={styles.image} />
    <p className={styles.description}>{description}</p>
  </div>
)

export default MediaItem
```