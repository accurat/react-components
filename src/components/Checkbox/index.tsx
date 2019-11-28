import * as React from 'react'
import classNames from 'classnames'
import {
  InputPropsTypes,
  BooleanChangeFnType,
  ChangelessInputProps,
} from '../../commons/interfaces'

const CheckSvg: React.SFC<SVGProps> = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.25 18.58"
    className={className}
    style={style}
  >
    <polygon
      points="7.35 18.58 0 11.23 2.83 8.4 7.15 12.72 18.24 0 21.25 2.63 7.35 18.58"
      fill="inherit"
    />
  </svg>
)

interface SVGProps {
  className?: string
  style?: React.CSSProperties
}

export interface CheckBoxArguments extends InputPropsTypes, ChangelessInputProps {
  customSvg?: React.SFC<SVGProps>
  onChange?: BooleanChangeFnType
}

export function Checkbox({
  children,
  customSvg = null,
  className = '',
  inputClassName = '',
  style = {},
  checked = false,
  onChange = () => {},
  ...props
}: CheckBoxArguments) {
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

  const SvgComponent = customSvg || CheckSvg

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
          <SvgComponent
            className={`absolute absolute--fill center m-auto pointer-events-none ${inputClasses}`}
            style={{ width: 10, height: 10, fill: 'currentColor' }}
          />
        )}
      </div>
      {children && <div className="ml2">{children}</div>}
    </label>
  )
}
