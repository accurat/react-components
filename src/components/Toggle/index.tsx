import * as React from 'react'
import classNames from 'classnames'
import { InputPropsTypes } from '../../commons/interfaces'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'

export default function Toogle({
  children,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = event => {},
  reset = false,
  ...props
}: InputPropsTypes): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    // this.props.onChange(event) why do we give an event and not boolean?
    onChange(event.currentTarget.checked)
  }

  const classes = classNames('flex flex-row justify-start items-center w-fit pointer', {
    [disabledStyle]: disabled,
    [inactiveStyle]: !checked,
    [className]: className,
  })

  const inputClasses = classNames('relative br4 bg-black', {
    [inputClassName]: inputClassName,
  })

  return (
    <label style={style} className={classes}>
      <div
        className={inputClasses}
        style={{
          width: 38,
          minWidth: 38,
          height: 20,
          minHeight: 20,
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
          className="absolute center-vertical bg-white br-100 top-0 bottom-0 pointer-events-none"
          style={{
            width: 16,
            height: 16,
            transition: 'left 0.2s',
            left: checked ? 20 : 2,
          }}
        />
      </div>
      {children && <div className="ml2 pointer">{children}</div>}
    </label>
  )
}
