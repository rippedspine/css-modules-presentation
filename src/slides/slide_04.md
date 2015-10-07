<Slide style='dashed'>
              <Title>Media Item Component</Title>
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
          </Slide>
