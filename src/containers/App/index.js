import React, { Component } from 'react';

// Containers
import Slide from 'containers/Slide'

// Components
import Button from 'components/Button'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import Markdown from 'components/Markdown'
import Label from 'components/Label'
import SnappyScroll from 'components/SnappyScroll'

// Styles
import styles from './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <SnappyScroll>
          <Slide>
            <Slide.Header>
              <Title>CSS Modules</Title>
            </Slide.Header>
          </Slide>

          <Slide color='lightest-green'>
            <Slide.Header>
              <Title>What?</Title>
            </Slide.Header>
            <Slide.Body>
              <Markdown>
                > A __CSS Module__ is a CSS file in which all class names and animation names are scoped locally by default.
              </Markdown>
            </Slide.Body>
          </Slide>
          
          <Slide>
            <Slide.Body>
              <Button>Submit</Button>
              <Button error>Submit</Button>
              <Button inProgress>Processing...</Button>
              <Button disabled>Submit</Button>
            </Slide.Body>
          </Slide>
        </SnappyScroll>
      </div>
    )
  }
}