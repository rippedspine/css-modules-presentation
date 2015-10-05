import React, { Component, PropTypes } from 'react'

import marked from 'marked'
import highlight from 'highlight.js'

import 'highlight.js/styles/mono-blue.css'
import styles from './markdown.css'

export default class Markdown extends Component {
  constructor(props) {
    super(props)

    if (props.code) {
      marked.setOptions({
        highlight(code) { 
          return highlight.hightLightAuto(code).value 
        }
      })
    }
  }

  static propTypes = {
    code: PropTypes.bool
  }

  static defaultProps = {
    code: false
  }

  render() {
    return (
      <div 
        className={this.props.code ? styles.code : styles.text} 
        dangerouslySetInnerHTML={{__html: marked(this.props.children)}} 
      />
    )
  }
}