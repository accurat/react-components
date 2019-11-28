import * as React from 'react'
import classNames from 'classnames'
import {
  InputPropsTypes,
  BooleanChangeFnType,
  ChangelessInputProps,
} from '../../commons/interfaces'

interface ToggleProps extends InputPropsTypes, ChangelessInputProps {
  onChange?: BooleanChangeFnType
}

export function Toggle({
  children,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = () => {},
}: ToggleProps): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  const classes = classNames(className, 'flex flex-row justify-start items-center w-fit', {
    'o-40 pointer-event-none': disabled,
  })

  const inputClasses = classNames(inputClassName, 'relative ba')

  return (
    <label style={style} className={classes}>
      <div
        className={inputClasses}
        style={{
          borderColor: 'currentColor',
          boxSizing: 'content-box',
          minWidth: 35,
          maxWidth: 50,
          minHeight: 20,
          maxHeight: 25,
        }}
      >
        <input
          className="absolute top-0 left-0 o-0"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <div
          className="absolute center-vertical bg-white br-100 top-0 bottom-0"
          style={{
            backgroundColor: 'currentColor',
            borderRadius: 'inherit',
            width: '40%',
            height: '70%',
            transition: 'left 0.2s',
            left: checked ? '55%' : '5%',
          }}
        />
      </div>
      {children && <div className="ml2">{children}</div>}
    </label>
  )
}
