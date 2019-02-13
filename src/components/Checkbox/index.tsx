import * as React from 'react'
import classNames from 'classnames'
import { InputPropsTypes, BooleanChangeFunction } from '../../commons/interfaces'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'bw1 b--black'

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

export interface CheckBoxArguments extends InputPropsTypes {
  propSvg?: React.SFC<SVGProps>
  onChange?: BooleanChangeFunction
}

export default function Checkbox({
  children,
  propSvg = null,
  className = '',
  inputClassName = '',
  style = {},
  disabled = false,
  checked = false,
  onChange = () => {},
  reset = false,
  ...props
}: CheckBoxArguments) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }
  const classes = classNames(className, 'flex items-center w-fit pointer', {
    [disabledStyle]: disabled,
    [inactiveStyle]: !checked && !reset,
  })

  const inputClasses = classNames(
    inputClassName,
    'absolute absolute--fill center input-reset outline-0 pointer',
    {
      [defaultInputStyle]: !reset,
    },
  )

  const SvgComponent = propSvg || CheckSvg

  return (
    <label style={style} className={classes}>
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
          className={`ba ${inputClasses}`}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{
            width: 18,
            height: 18,
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
