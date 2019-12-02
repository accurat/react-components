import * as React from 'react'
import classNames from 'classnames'
import {
  InputPropsTypes,
  BooleanChangeFnType,
  ChangelessInputProps,
} from '../../commons/interfaces'

export interface RadioProps extends InputPropsTypes, ChangelessInputProps {
  onChange?: BooleanChangeFnType
}

export function Radio({
  children,
  className = '',
  inputClassName = '',
  style = {},
  checked = false,
  onChange = () => {},
  reset = false,
  ...props
}: RadioProps): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  const classes = classNames(className, 'flex items-center w-fit', {
    'o-40 pointer-events-none': props.disabled,
  })

  const inputClasses = classNames(
    inputClassName,
    'absolute absolute--fill center input-reset outline-transparent',
  )

  return (
    <label className={classes} style={style}>
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
          type="radio"
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
          <div
            className="absolute absolute--fill z-5 m-auto"
            style={{
              backgroundColor: 'currentColor',
              borderRadius: 'inherit',
              width: '50%',
              height: '50%',
            }}
          />
        )}
      </div>
      {children && <div className="ml2">{children}</div>}
    </label>
  )
}
