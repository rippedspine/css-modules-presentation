import React, { Component, PropTypes } from 'react'

import cn from 'css-modules-classnames'

import styles from './buttons.css'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
    success: PropTypes.bool
  }

  static defaultProps = {
    
  }

  render() {
    const { disabled, error, inProgress, success } = this.props;

    return (
      <button disabled={disabled} className={cn(styles, {
        normal: !(error || inProgress || success),
        error: error,
        inProgress: inProgress,
        success: success
      })} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}