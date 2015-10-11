import React, { Component } from 'react'

import Label from 'components/Label'

import styles from './Snippet'

export default class Snippet extends Component {
  render() {
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

        {labels && (
          <div className={styles.labels}>
            {labels.map((label, index) => {
              return (
                <span key={index}>
                  <Label>{label}</Label>
                  {(index < labels.length - 1) && ' + '}
                </span>
              )
            })}
          </div>
        )}

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