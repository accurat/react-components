import * as React from 'react'
import classNames from 'classnames'
import { InputPropsTypes } from '../../commons/interfaces'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'br4 bg-black'

const invertInputStyle = (invert: string) => `ba br4 bg-transparent b--${invert.replace(/bg-/, '')}`

export const Toggle: React.SFC<InputPropsTypes> = ({
  children,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = () => {},
  reset = false,
  invert = '',
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  const classes = classNames(className, 'flex flex-row justify-start items-center w-fit pointer', {
    [disabledStyle]: disabled,
    [inactiveStyle]: !checked && !reset,
  })

  const inputClasses = classNames(inputClassName, 'relative', {
    [defaultInputStyle]: !reset,
    [invertInputStyle(invert)]: invert && !reset,
  })

  return (
    <label style={style} className={classes}>
      <div
        className={inputClasses}
        style={{
          height: 20,
          width: 38,
        }}
      >
        <input
          className="absolute top-0 left-0 o-0 pointer"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{
            width: 38,
            height: 20,
          }}
        />
        <div
          className={`absolute w1 h1 center-vertical
           ${invert || 'bg-white'}
           br-100 top-0 bottom-0 pointer-events-none`}
          style={{
            transition: 'left 0.2s',
            left: checked ? 20 : 2,
          }}
        />
      </div>
      {children && <div className="ml2 pointer">{children}</div>}
    </label>
  )
}
