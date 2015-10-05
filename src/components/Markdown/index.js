import React, { Component, PropTypes } from 'react'

import Highlight from 'react-highlight'
import marked from 'marked'

import styles from './markdown.css'

export default class Markdown extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    code: PropTypes.bool
  }

  static defaultProps = {
    code: false,
    children: ''
  }

  render() {
    const { code, children } = this.props

    return (
      <div 
        className={code ? styles.code : styles.text} 
        dangerouslySetInnerHTML={{ __html: marked(children) }} 
      />
    )
  }
}