import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps } from 'react'
import { InputPropsTypes, InputChangeFnType } from '../../commons/interfaces'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black black bg-white'

export interface TextInputpropsType
  extends InputPropsTypes,
    React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: InputChangeFnType
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local'
  value?: string | number
  defaultValue?: string
  checkValidity?: (cond: boolean) => void
}

const handleChange = (
  onChange: TextInputpropsType['onChange'],
  checkValidity: TextInputpropsType['checkValidity'],
) => (event: React.ChangeEvent<HTMLInputElement>) => {
  onChange(event)
  checkValidity(event.target.checkValidity())
}

export function TextInput({
  value,
  defaultValue,
  className = '',
  style = {},
  type = 'text',
  onChange = () => {},
  checkValidity = () => {},
  reset = false,
  disabled = false,
  ...props
}: TextInputpropsType): JSX.Element {
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
      onChange={handleChange(onChange, checkValidity)}
    />
  )
}
