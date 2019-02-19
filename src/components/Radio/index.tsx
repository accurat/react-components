import * as React from 'react'
import classNames from 'classnames'
import {
  InputPropsTypes,
  BooleanChangeFnType,
  ChangelessInputProps,
} from '../../commons/interfaces'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'bw1 b--black bg-black outline-transparent'

export interface RadioProps extends InputPropsTypes, ChangelessInputProps {
  onChange?: BooleanChangeFnType
}

export default function Radio({
  children,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = () => {},
  reset = false,
  ...props
}: RadioProps): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  const classes = classNames(className, 'flex items-center w-fit pointer', {
    [disabledStyle]: disabled,
    [inactiveStyle]: !checked && !reset,
  })

  const inputClasses = classNames(inputClassName, 'absolute absolute--fill center ba', {
    [defaultInputStyle]: !reset,
  })

  return (
    <label className={classes} style={style}>
      <div
        className="relative"
        style={{
          width: 18,
          minWidth: 18,
          height: 18,
          minHeight: 18,
        }}
      >
        <input
          {...props}
          className={`${inputClasses} input-reset br-100 pointer`}
          type="radio"
          checked={checked}
          onChange={handleChange}
          style={{
            width: 18,
            height: 18,
            // This is here to override the custom `bg-something` you can pass to the input,
            // since it will affect also the circle on the inside
            backgroundColor: 'white',
          }}
        />
        {checked && (
          <div
            className={`${inputClasses} z-5 m-auto br-100`}
            style={{
              width: 10,
              height: 10,
            }}
          />
        )}
      </div>
      {children && <div className="ml2 pointer">{children}</div>}
    </label>
  )
}
