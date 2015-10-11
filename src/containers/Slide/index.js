import React, { Component } from 'react'

import Snippet from 'containers/Snippet'

const styles = {
  hero: require('./styles/hero'),
  normal: require('./styles/normal'),
  dashed: require('./styles/dashed')
}

export default class Slide extends Component {
  render() {
    const { 
      children,
      snippets, 
      title, 
      subtitle, 
      content, 
      type = 'normal' 
    } = this.props

    const snippetDivider = (<div className={styles[type].snippetDivider} />)

    return (
      <div className={styles[type].outer}>
        <div>
          {title && (
            <h1 className={styles[type].title}>{title}</h1>
          )}

          {subtitle && (
            <h2 className={styles[type].subtitle}>{subtitle}</h2>
          )}
          
          {content && (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}

          {children && (
            <div>{children}</div>
          )}

          {snippets && snippets.map((snippet, index) => {
            return (
              <div key={index}>
                <Snippet {...snippet} />
                {(index < snippets.length - 1) && snippetDivider}
              </div>
            )
          })}
        </div>
      </div>  
    );  
  }
}