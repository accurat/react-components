import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'bw1 b--black'

const CheckSvg = ({ className, style }) => (
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

export default class Checkbox extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    style: PropTypes.object,
    light: PropTypes.bool,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    reset: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    style: {},
    light: false,
    checked: false,
    onChange: () => {},
    reset: false,
  }

  handleChange = event => {
    this.props.onChange(event.currentTarget.checked)
  }

  render() {
    const {
      children,
      className,
      inputClassName,
      style,
      light,
      checked,
      disabled,
      reset,
    } = this.props

    const classes = classNames(className, 'flex items-center w-fit pointer', {
      [disabledStyle]: disabled,
      [inactiveStyle]: !checked && !reset,
    })

    const inputClasses = classNames(
      inputClassName,
      'absolute absolute--fill center input-reset outline-0 pointer ba',
      {
        'bg-black': checked && !light && !reset,
        [defaultInputStyle]: !reset,
      },
    )

    const props = omit(this.props, Object.keys(Checkbox.propTypes))

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
            className={inputClasses}
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
              className="absolute absolute--fill center m-auto"
              style={{ width: 10, height: 10, fill: light ? 'black' : 'white' }}
            />
          )}
        </div>
        {children && <div className="ml2 pointer">{children}</div>}
      </label>
    )
  }
}
