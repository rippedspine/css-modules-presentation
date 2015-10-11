import React, { Component } from 'react'

import styles from './Button'

export default class Button extends Component {
  render() {
    const { children, type } = this.props;

    return (
      <button {...this.props} className={styles[type]}>
        {children}
      </button>
    )
  }
}

// Can't use hot reload with stateless functional components yet...
// const Button = ({ children, type = 'normal' }) => (
//   <button {...this.props} className={styles[type]}>
//     {children}
//   </button>
// )

// export default Button