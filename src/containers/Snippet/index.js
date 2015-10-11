import React, { Component } from 'react'

import Label from 'components/Label'

import styles from './Snippet'

export default class Snippet extends Component {
  render() {
    console.log(this.props);

    const {
      labels,
      title,
      description,
      snippet
    } = this.props;

    return (
      <div className={styles.root}>
        {title && (
          <h3 className={styles.title}>{title}</h3>
        )}

        {labels && labels.map((label, index) => {
          const el = <Label key={index}>{label}</Label>;
          return (index < labels.length - 1) ? <span>{el} + </span> : el;
        })}

        {snippet && (
          <div className={styles.snippet} dangerouslySetInnerHTML={{  __html: snippet }} />
        )}

        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    )
  }
}