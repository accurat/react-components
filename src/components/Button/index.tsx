import * as React from 'react'
import classNames from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode // Array<JSX.Element> | JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  style?: object
}

export function Button({
  children,
  className = '',
  style = {},
  onClick = () => {},
  ...props
}: ButtonProps): JSX.Element {
  const classes = classNames(className, 'button-reset outline-transparent', {
    'pointer-events-none': props.disabled,
  })

  return (
    <button {...props} className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  )
}
