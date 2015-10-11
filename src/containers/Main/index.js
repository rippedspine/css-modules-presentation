import React, { Component } from 'react'

// Slides
import slides from 'slides'

// Containers
import Slide from 'containers/Slide'

// Styles
import styles from './Main.scss'

export default class Main extends Component {
  render() {
    return (
      <div className={styles.root}>
        {slides.map((slide, index) => {
          return <Slide key={index} {...slide} />
        })}
      </div>
    )
  }
}

// No hotreloading with stateless functional components yet...
// const Main = () => (
//   <div className={styles.root}>
//     {slides.map((slide, index) => {
//       return <Slide key={index} {...slide} />
//     })}
//   </div>
// )

// export default Main