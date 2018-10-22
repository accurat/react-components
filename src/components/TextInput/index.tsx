import * as React from 'react'
import classNames from 'classnames'

const { omit } = require('lodash')

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black black bg-white'

export interface TextInputpropsType {
  className?: string
  style?: object
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local'
  value?: string | number
  defaultValue?: string
  disabled?: boolean
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
  checkValidity?: (cond: boolean) => boolean
  reset?: boolean
}

export default function TextInput({
  value,
  defaultValue,
  className = '',
  style = {},
  type = 'text',
  onChange = event => {},
  checkValidity = condition => {},
  reset = false,
  disabled = false,
  ...props
}: TextInputpropsType): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event)
    checkValidity(event.target.checkValidity())
  }

  const classes = classNames(className, 'pa2 ba input-reset outline-transparent', {
    [disabledStyle]: disabled,
    [defaultStyle]: !reset,
  })

  return (
    <input
      {...props}
      className={classes}
      // fontFamily: inherit is an issue with normalize.css,
      // it sets `font-family: sans-serif;` to every input/button
      style={{ ...style, font: 'inherit' }}
      type={type}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}
