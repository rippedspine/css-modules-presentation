import React from 'react'

import styles from './Body.scss'

const Body = ({ content }) => (
  <div 
    className={styles.root} 
    dangerouslySetInnerHTML={{ __html: content }} 
  />
)

export default Body
