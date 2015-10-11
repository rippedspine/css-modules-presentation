import React, { Component } from 'react'

import Snippet from 'containers/Snippet'

const styles = {
  hero: require('./styles/hero.scss'),
  normal: require('./styles/normal.scss'),
  dashed: require('./styles/dashed.scss')
}

export default class Slide extends Component {
  render() {
    const { snippets, title, subtitle, content, type = 'normal' } = this.props
    const snippetDivider = (<div className={styles[type].snippetDivider} />)

    return (
      <div className={styles[type].outer}>
        <div className={styles[type].inner}>
          {title && (
            <h1 className={styles[type].title}>{title}</h1>
          )}

          {subtitle && (
            <h2 className={styles[type].subtitle}>{subtitle}</h2>
          )}
          
          {content && (
            <div 
              className={styles[type].content} 
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {snippets && snippets.map((snippet, index) => {
            const el = (<Snippet key={index} {...snippet} />)
            return (index < snippets.length - 1) ? <div>{el}{snippetDivider}</div> : el
          })}
        </div>
      </div>  
    );  
  }
}