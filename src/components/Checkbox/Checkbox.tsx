import * as React from 'react'
import classNames from 'classnames'
import { InputPropsTypes, InputDefaultProps } from '../../commons/interfaces'
const { omit } = require('lodash')

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'bw1 b--black'

interface SvgParams {
  className: string
  style: object
}

const CheckSvg = ({ className, style }: SvgParams): JSX.Element => (
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

export default class Checkbox extends React.Component<InputPropsTypes> {
  public static defaultProps = InputDefaultProps

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(event)
  }

  public render() {
    const { children, className, inputClassName, style, checked, disabled, reset } = this.props

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

    const props = omit(this.props, Object.keys(Checkbox.defaultProps))

    return (
      <label style={style} className={classes}>
        <div
          className="realtive"
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
            onChange={this.handleChange}
            style={{
              width: 18,
              height: 18,
            }}
          />
          {checked && (
            <CheckSvg
              className={`absolute absolute--fill center m-auto pointer-events-none ${inputClasses}`}
              style={{ width: 10, height: 10, fill: 'currentColor' }}
            />
          )}
        </div>
        {children && <div className="ml2">{children}</div>}
      </label>
    )
  }
}
