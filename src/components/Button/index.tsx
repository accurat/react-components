import classNames from 'classnames'
import * as React from 'react'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'ph3 pv1 br1 bg-black white b--none'
const transparentStyle = 'ph3 pv1 br1 bg-transparent black ba bw1 b--black'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode // Array<JSX.Element> | JSX.Element
  disabled?: boolean
  transparent?: boolean
  reset?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  style?: object
  type?: string
}

export default function Button({
  children,
  disabled = false,
  transparent = false,
  reset = false,
  className = '',
  style = {},
  onClick = event => {},
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  const classes = classNames(
    className,
    'flex justify-center items-center pointer outline-transparent',
    {
      [disabledStyle]: disabled,
      [transparentStyle]: transparent && !reset,
      [defaultStyle]: !transparent && !reset,
    },
  )

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
