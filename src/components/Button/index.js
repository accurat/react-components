import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'bg-black white b--none'
const transparentStyle = 'bg-transparent black ba bw1 b--black'

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
    transparent: false,
    className: '',
    style: {},
    onClick: () => {},
    type: 'button',
  }

  render() {
    const { children, disabled, transparent, onClick, className, style, type } = this.props

    const classes = classNames(
      'flex justify-center items-center pointer ph3 pv1 br1 outline-transparent',
      {
        [disabledStyle]: disabled,
        [transparentStyle]: transparent,
        [defaultStyle]: !transparent,
        [className]: className,
      }
    )

    const props = omit(this.props, Object.keys(Button.propTypes))

    return (
      <button
        {...props}
        disabled={disabled}
        className={classes}
        style={style}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    )
  }
}
