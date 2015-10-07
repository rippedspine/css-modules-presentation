import React, { Component } from 'react'

// Slides
// 1
import slide1 from 'slides/slide_01.md'

// 2
import slide2 from 'slides/slide_02.md'
import slide2Snippet from 'slides/slide_02_snippet.md'

// 3
import slide3Snippet1A from 'slides/slide_03_snippet01a.md'
import slide3Snippet1B from 'slides/slide_03_snippet01b.md'
import slide3Snippet1C from 'slides/slide_03_snippet01c.md'
import slide3Snippet2 from 'slides/slide_03_snippet02.md'
import slide3Snippet3 from 'slides/slide_03_snippet03.md'
import slide3Snippet4 from 'slides/slide_03_snippet04.md'
import slide3Snippet5 from 'slides/slide_03_snippet05.md'

import how1 from 'slides/how_01.md'
import useCases from 'slides/usecases.md'
import buzz from 'slides/buzz.md'

// Containers
import Slide from './Slide'

// Components
import Button from 'components/Button'
import Description from 'components/Description'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import Label from 'components/Label'
import SnappyScroll from 'components/SnappyScroll'
import Card from 'components/Card'
import MediaItem from 'components/MediaItem'

// Styles
import styles from './Main.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const arrowDown = (<div style={{fontSize: '4rem', marginBottom: '1rem'}}>{'↓'}</div>);

    return (
      <div className={styles.root}>
        <SnappyScroll>
          <Slide style='hero'>
            <Title size='mega'>CSS Modules</Title>
          </Slide>

          <Slide style='hero'>
            <Title size='mega'>What?</Title>
            <Slide.Body content={slide1} />
          </Slide>

          <Slide>
            <Title>Current Hype</Title>
            <Slide.Body content={buzz} />
          </Slide>

          <Slide style='hero'>
            <Title size='mega'>Why?</Title>
          </Slide>

          <Slide style='hero'>
            <Title>CSS stands for:</Title>
            <Slide.Body content={slide2}/>
          </Slide>

          <Slide style='hero'>
            <Slide>
              <Title>Avoiding CSS Specificity Hell</Title>
              <Slide.Body>
                <Card code content={slide2Snippet} />
              </Slide.Body>
            </Slide>

            <Slide>
              <Title>Until the <span style={{ textShadow: '0 0 0.5em black, 0 0 1em black'}}>Shadow DOM</span> is mainstream</Title>
              <SubTitle>... or will it still solve problems?</SubTitle>
            </Slide>
          </Slide>

          <Slide style='hero'>
            <Title size='mega'>How?</Title>
          </Slide>

          <Slide style='dashed'>
            <Title>Media Item Component</Title>
            <Slide.Body>
              <Label>MediaItem.css</Label>
              
              <Description>Compose from a file in project using a relative path.</Description>
              <Card code content={slide3Snippet1A} />
              
              <Description>Compose from file in directory added to moduleDirectories in webpack config.</Description>
              <Card code content={slide3Snippet1B} />

              <Description>Compose from a node_module.</Description>
              <Card code content={slide3Snippet1C} />
              
              {arrowDown}
              <SubTitle>webpack setup</SubTitle>
              <Label>style-loader</Label> + <Label>css-loader</Label> + <Label>postcss-loader</Label>
              <Card code content={slide3Snippet2} />
              {arrowDown}
              <Label>lookup object</Label>
              <Card code content={slide3Snippet3} />
              Automatically generated classnames guaranteed to be unique.
              {arrowDown}
              <Label>MediaItem.js</Label>
              <Card code content={slide3Snippet4} />
              {arrowDown}
              <Label>HTML</Label>
              <Card code content={slide3Snippet5} />
            </Slide.Body>
          </Slide>

          <Slide>
            <MediaItem src="static/stroller.jpg" description="They see me strollin'" />
          </Slide>

          <Slide>
            <Title>Possible Use Cases:</Title>
            <Slide.Body content={useCases} />
          </Slide>
          
          <Slide style='hero'>
              <Title size='mega'>Styling Buttons</Title>
              <div>
                <Button>Normal</Button>
                <Button error>Error</Button>
                <Button inProgress>Processing...</Button>
                <Button disabled>Disabled</Button>
              </div>
          </Slide>


          <Slide style='hero'>
              <Title size='mega'>Thanks!</Title>
          </Slide>
        </SnappyScroll>
      </div>
    )
  }
}
