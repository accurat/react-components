import * as React from 'react'
import classNames from 'classnames'
import { HTMLProps } from 'react'
import { InputPropsTypes, InputChangeFnType } from '../../commons/interfaces'

export interface TextInputPropsType
  extends InputPropsTypes,
    React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: InputChangeFnType
  checkValidity?: (cond: boolean) => void
}

const handleChange = (
  onChange: TextInputPropsType['onChange'],
  checkValidity: TextInputPropsType['checkValidity'],
) => (event: React.ChangeEvent<HTMLInputElement>) => {
  onChange(event)
  checkValidity(event.target.checkValidity())
}

export function TextInput({
  className = '',
  style = {},
  type = 'text',
  onChange = () => {},
  checkValidity = () => {},
  disabled = false,
  ...props
}: TextInputPropsType): JSX.Element {
  const classes = classNames(className, 'input-reset outline-transparent', {
    'o-40 pointer-events-none': disabled,
  })

  return (
    <input
      {...props}
      className={classes}
      // fontFamily: inherit is an issue with normalize.css,
      // it sets `font-family: sans-serif;` to every input/button
      style={{ ...style, font: 'inherit', backgroundColor: 'inherit' }}
      type={type}
      disabled={disabled}
      onChange={handleChange(onChange, checkValidity)}
    />
  )
}
