import React, { Component } from 'react'

import styles from './Card.css'

export default class Card extends Component {
  render() {
    const { content, code } = this.props;
    const className = code ? styles.code : styles.text;

    return content ? (
      <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    ) : (<div className={className}>{this.props.children}</div>);
  }
}