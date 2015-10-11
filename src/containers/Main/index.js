import React, { Component } from 'react'

// Slides
import slides from 'slides'

// Containers
import Slide from 'containers/Slide'
import Body from 'containers/Body'

// Components
import Title from 'components/Title'

// Styles
import styles from './Main.scss'

const slideComponents = slides.map((slide, index) => {
  const { type, title, content } = slide
  return (
    <Slide key={index} type={type}>
      <Title type={type}>{title}</Title>
      {content && <Body content={content} />}
    </Slide>
  )
})

// No hotreloading with stateless functional components yet...
const Main = () => (
  <div className={styles.root}>
    {slideComponents}
  </div>
)

export default Main