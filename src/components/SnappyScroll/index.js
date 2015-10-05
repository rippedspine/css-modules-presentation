import React, { Component, PropTypes } from 'react'

const { round, pow, min } = Math;
const iterations = 60;

var activeIndex = 0
var delta = 0
var lastTime = 0
var top = 0
var willScroll = false
var i = 0
var scrollTop = 0
var start = 0
var distance = 0

const easeInOutCubic = (pos) => {
  return (pos /= 0.5) < 1 ? 0.5 * pow(pos, 3) : 0.5 * (pow((pos - 2), 3) + 2)
}

export default class SnappyScroll extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('mousewheel', this.handleScroll)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animation);
    window.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('mousewheel', this.handleScroll)    
  }

  goToNext() {
    const index = this.refs[activeIndex + 1] ? activeIndex + 1 : activeIndex

    activeIndex = index
    this.setupScroll()
  }

  goToPrev() {
    const index = this.refs[activeIndex - 1] ? activeIndex - 1 : activeIndex

    activeIndex = index
    this.setupScroll() 
  }

  setupScroll() {
    willScroll = true
    start = window.scrollY
    scrollTop = this.refs[activeIndex].getDOMNode().getBoundingClientRect().top
    distance = scrollTop - start
    i = 0
  }

  handleKeyUp = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { keyIdentifier: keyId } = e

    if (keyId === 'Right') {
      this.goToNext();
    }

    if (keyId === 'Left') {
      this.goToPrev();
    }

    cancelAnimationFrame(this.loop);
  }

  loop = (time) => {
    delta = (time || 0) - lastTime
    lastTime = (time || 0)

    top += (scrollTop - top) * min(1, ((1 / delta) * 6))

    willScroll = (i++ - 1) < iterations

    if (willScroll) {
      window.scrollTo(0, round((distance * easeInOutCubic(i / iterations)) + start))
    }

    if (!this.loop) { return }
    requestAnimationFrame(this.loop.bind(this))
  }

  render() {
    this.loop();

    return (
      <div>
        {this.props.children.map((child, index) => {
          return (<div key={index} ref={index}>{child}</div>)
        })}
      </div>
    )
  }
}
