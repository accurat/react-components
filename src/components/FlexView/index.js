import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

export default class FlexView extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    column: PropTypes.bool,
    vAlign: PropTypes.oneOf([
      'top',
      'center',
      'bottom',
      'between',
      'around',
      'baseline',
      'stretch',
    ]),
    hAlign: PropTypes.oneOf([
      'left',
      'center',
      'right',
      'between',
      'around',
      'baseline',
      'stretch',
    ]),
    grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wrap: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  }
  static defaultProps = {
    className: '',
    style: {},
  }

  getGrow() {
    const { grow } = this.props
    if (typeof grow === 'number') {
      return grow
    } else if (grow) {
      return 1
    }

    return 0 // default
  }

  getShrink() {
    const { shrink, basis } = this.props
    if (typeof shrink === 'number') {
      return shrink
    } else if (shrink) {
      return 1
    } else if (shrink === false) {
      return 0
    }

    if (basis && basis !== 'auto') {
      return 0
    }

    return 1 // default
  }

  getBasis() {
    const { basis } = this.props
    if (basis) {
      const suffix = typeof basis === 'number' || String(parseInt(basis, 10)) === basis ? 'px' : ''
      return basis + suffix
    }

    return 'auto' // default
  }

  getFlexStyle() {
    const grow = this.getGrow()
    const shrink = this.getShrink()
    const basis = this.getBasis()
    const values = `${grow} ${shrink} ${basis}`
    return {
      WebkitBoxFlex: values,
      MozBoxFlex: values,
      msFlex: values,
      WebkitFlex: values,
      flex: values,
    }
  }

  getStyle() {
    return { ...this.getFlexStyle(), ...this.props.style }
  }

  getContentAlignmentClasses() {
    const vAlignClasses = this.props.column
      ? {
        top: 'justify-start',
        center: 'justify-center',
        bottom: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
      }
      : {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      }

    const hAlignClasses = this.props.column
      ? {
        left: 'items-start',
        center: 'items-center',
        right: 'items-end',
        baseline: 'items-baseline',
        stretch: 'items-stretch',
      }
      : {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
      }

    const vAlign = this.props.vAlign && vAlignClasses[this.props.vAlign]
    const hAlign = this.props.hAlign && hAlignClasses[this.props.hAlign]

    return classNames(vAlign, hAlign)
  }

  getClasses() {
    const direction = this.props.column && 'flex-column'
    const contentAlignment = this.getContentAlignmentClasses()
    const wrap = this.props.wrap && 'flex-wrap'
    return classNames('flex', direction, contentAlignment, wrap, this.props.className)
  }

  render() {
    const className = this.getClasses()
    const style = this.getStyle()
    const props = omit(this.props, Object.keys(FlexView.propTypes))
    return (
      <div className={className} style={style} {...props}>
        {this.props.children}
      </div>
    )
  }
}
