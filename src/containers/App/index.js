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
import Card from 'components/Card'
import MediaItem from 'components/MediaItem'

// Styles
import styles from './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const arrowDown = (<div style={{fontSize: '4rem', marginBottom: '1rem'}}>{'↓'}</div>);

    return (
      <div className={styles.root}>
        <SnappyScroll>
          <Slide style='hero'>
            <Slide.Header>
              <Title size='mega'>CSS Modules</Title>
            </Slide.Header>
          </Slide>

          <Slide>
            <Slide.Header>
              <Title size='mega'>What?</Title>
            </Slide.Header>
            <Slide.Body>
              <Markdown>
                > A __CSS Module__ is a CSS file in which all class names and animation names are scoped locally by default.
              </Markdown>
            </Slide.Body>
          </Slide>

          <Slide>
            <Slide.Header>
              <Title size='mega'>Why?</Title>
            </Slide.Header>
          </Slide>

          <Slide color='white'>
            <Slide.Header>
              <Title>Avoiding CSS Specificity Hell</Title>
            </Slide.Header>
            <Slide.Body>
<Card code>
<code>{`body.article > #main > #content > #intro > p > b {
  font-weight: 600;
}`}</code>
</Card>
            </Slide.Body>
          </Slide>

          <Slide>
            <Slide.Header>
              <Title size='mega'>How?</Title>
            </Slide.Header>
          </Slide>

          <Slide style='dashed'>
            <Slide.Header>
              <Title>Media Item Component</Title>
            </Slide.Header>
            <Slide.Body>
              <Label>mediaitem.css</Label>
<Card code>
<code>
{`.root {
  composes: card from 'styles/cards.css';
}

.image {
  width: 100%;
}

.description {
  font-size: 1.5rem;
}
`}</code>
</Card>
{arrowDown}
<SubTitle>Webpack Setup</SubTitle>
<Label>style-loader</Label> + <Label>css-loader</Label> + <Label>postcss-loader</Label>
<Card code>
<code>
{`...

{
  test: /\.css$/,
  loader: 'style!css?
    modules&importLoaders=1&
    localIdentName=[name]_[local]_[hash:base64:5]
    !postcss'
}

...`}</code>
</Card>
{arrowDown}
<Label>lookup object</Label>
<Card code>
<code>
{`{
  root: 'mediaitem_root_3CPId cards_card_gLfsm',
  image: 'mediaitem_image_dJNAb',
  description: 'mediaitem_description_3uUEv'
}
`}</code>
</Card>
{arrowDown}
<Label>MediaItem.js</Label>
<Card code>
<code>
{`import React, { Component } from 'react'

import styles from './mediaitem.css'

export default class MediaItem extends Component {
  constructor(props) {
    super(props)
  }

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
`}</code>
</Card>
{arrowDown}
<Label>HTML</Label>
<Card code>
<code>
{`
<div class="mediaitem_root_2kKk9">
  <img class="mediaitem_image_dJNAb" src="/image.jpg" />
  <p class"mediaitem_description_3uUEv">
    A nice description
  </p>
</div>
`}</code>
</Card>
            </Slide.Body>
          </Slide>

          <Slide>
            <MediaItem src="static/stroller.jpg" description="They see me rollin'" />
          </Slide>
          
          <Slide style='hero'>
            <Slide.Header>
              <Title size='mega'>Styling Buttons</Title>
            </Slide.Header>
            <Slide.Body>
              <Button>Normal</Button>
              <Button error>Error</Button>
              <Button inProgress>Processing...</Button>
              <Button disabled>Disabled</Button>
            </Slide.Body>
          </Slide>
        </SnappyScroll>
      </div>
    )
  }
}