import React, { Component, PropTypes } from 'react'

import cn from 'css-modules-classnames'

import styles from './Button.css'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
    success: PropTypes.bool
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