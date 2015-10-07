import React, { Component, PropTypes } from 'react'

import styles from './Body.css'

export default class Body extends Component {
  render() {
    const { content } = this.props;

    return content ? (
      <div className={styles.root} dangerouslySetInnerHTML={{ __html: content }} />
    ) : (<div className={styles.root}>{this.props.children}</div>);
  }
}
