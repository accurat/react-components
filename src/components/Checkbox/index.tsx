import * as React from 'react'
import classNames from 'classnames'
import {
  InputPropsTypes,
  BooleanChangeFnType,
  ChangelessInputProps,
} from '../../commons/interfaces'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'

export interface CheckBoxArguments extends InputPropsTypes, ChangelessInputProps {
  customIcon?: () => JSX.Element
  onChange?: BooleanChangeFnType
}

export function Checkbox({
  children,
  customIcon,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = () => {},
  ...props
}: CheckBoxArguments) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (disabled) return
    onChange(event.currentTarget.checked)
  }
  const classes = classNames(className, 'flex items-center', {
    'o-40 pointer-events-none': disabled,
  })

  const inputClasses = classNames(
    inputClassName,
    'absolute absolute--fill center input-reset outline-transparent',
  )

  const Icon = customIcon || CheckIcon

  return (
    <label style={style} className={classes}>
      <div
        className={`${inputClassName} relative ba`}
        style={{
          borderColor: 'currentColor',
          boxSizing: 'content-box',
          minWidth: 16,
          maxWidth: 30,
          minHeight: 16,
          maxHeight: 30,
        }}
      >
        <input
          {...props}
          className={inputClasses}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{
            minWidth: 16,
            maxWidth: 30,
            minHeight: 16,
            maxHeight: 30,
          }}
        />
        {checked && (
          <Icon
            className={`absolute absolute--fill center m-auto pointer-events-none ${inputClasses}`}
            style={{ maxWidth: 10, maxHeight: 10 }}
          />
        )}
      </div>
      {children && <div className="ml2">{children}</div>}
    </label>
  )
}
