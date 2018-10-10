import * as React from 'react'
import classNames from 'classnames'
const omit = require('lodash')
const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'ph3 pv1 br1 bg-black white b--none'
const transparentStyle = 'ph3 pv1 br1 bg-transparent black ba bw1 b--black'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode // Array<JSX.Element> | JSX.Element
  disabled?: boolean
  transparent?: boolean
  reset?: boolean
  onClick?: () => void
  className?: string
  style?: object
  type?: string
}

export default class Button extends React.Component<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    disabled: false,
    transparent: false,
    reset: false,
    className: '',
    style: {},
    onClick: () => {},
    type: 'button',
  }

  public render() {
    const { children, disabled, transparent, reset, onClick, className, style, type } = this.props

    const classes = classNames(
      className,
      'flex justify-center items-center pointer outline-transparent',
      {
        [disabledStyle]: disabled,
        [transparentStyle]: transparent && !reset,
        [defaultStyle]: !transparent && !reset,
      },
    )

    const props = omit(this.props, Object.keys(Button.defaultProps))

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
