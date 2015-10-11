<span class='label'>MediaItem.css</span>

```
/* Compose from a file in project using a relative path. */
.root {
  composes: card from '../../styles/cards.css'; 
  max-width: 20rem;
  margin: auto;
  padding: 2rem;
}

/* Compose from file in directory added to moduleDirectories in webpack config. */
.image {
  composes: br1 from 'styles/border-radius.css';
  width: 100%;
}

/* Compose from a node_module. */
.description {
  composes: mbn from 'tachyons/css/tachyons.css';
  font-size: 1.5rem;
}
```

<span class='label'>webpack config</span>
```
...

{
  test: /\.css$/,
  loader: 'style!css?
    modules&importLoaders=1&
    localIdentName=[name]_[local]_[hash:base64:5]
    !postcss'
}

...
```

<span class='label'>lookup object</span>
```
{
  root: 'MediaItem_root_3CPId 
    cards_card_gLfsm',

  image: 'MediaItem_image_dJNAb 
    border-radius_br1_kdsf8',
  
  description: 'MediaItem_description_3uUEv 
    tachyons_mbn_33O6a'
}
```

<span class='label'>lookup object</span>
```
import React, { Component } from 'react'

import styles from './MediaItem.css'

export default class MediaItem extends Component {
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
```

<span class='label'>HTML</span>
```
<div class="MediaItem_root_2kKk9">
  <img 
    class="MediaItem_image_dJNAb" 
    src="/image.jpg" 
  />
  <p class="MediaItem_description_3uUEv">
    A nice description.
  </p>
</div>
```