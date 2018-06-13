import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'
const defaultInputStyle = 'bw1 b--black bg-black outline-transparent'

export default class Radio extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    reset: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    style: {},
    checked: false,
    onChange: () => {},
    reset: false,
  }

  handleChange = event => {
    this.props.onChange(event.currentTarget.checked)
  }

  render() {
    const { children, className, inputClassName, style, disabled, checked, reset } = this.props

    const classes = classNames(className, 'flex items-center w-fit pointer', {
      [disabledStyle]: disabled,
      [inactiveStyle]: !checked && !reset,
    })

    const inputClasses = classNames(inputClassName, 'absolute absolute--fill center ba', {
      [defaultInputStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(Radio.propTypes))

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
            onChange={this.handleChange}
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
}
