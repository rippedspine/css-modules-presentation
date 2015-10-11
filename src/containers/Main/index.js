import React, { Component } from 'react'

// Slides
import slides from 'slides'

// Containers
import Slide from 'containers/Slide'

// Components
import MediaItem from 'components/MediaItem'
import Button from 'components/Button'
import SnappyScroll from 'components/SnappyScroll'

// Styles
import styles from './Main'

export default class Main extends Component {
  render() {
    return (
      <div className={styles.root}>
        <SnappyScroll>
          {slides.slice(0, slides.length - 1).map((slide, index) => {
            return <Slide key={index} {...slide} />
          })}

          <Slide>
            <MediaItem src="static/stroller.jpg" description="They see me strollin'" />
          </Slide>

          <Slide {...slides[slides.length - 1]} />

          <Slide type="hero" title="Let's style some buttons!">
            <div className={styles.centerContent}>
              <Button>Normal</Button>
              <Button type="error">Error</Button>
              <Button type="inProgress">Processing...</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Slide>

          <Slide type="hero" title="Thanks!" />
        </SnappyScroll>
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