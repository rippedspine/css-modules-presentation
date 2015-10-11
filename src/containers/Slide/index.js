import React from 'react'

const styles = {
  hero: require('./styles/hero.scss'),
  normal: require('./styles/normal.scss'),
  dashed: require('./styles/dashed.scss')
}

const Slide = ({ children, type = 'normal' }) => (
  <div className={styles[type].outer}>
    <div className={styles[type].inner}>
      {children}
    </div>
  </div>
)

export default Slide
