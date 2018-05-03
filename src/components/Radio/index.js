import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'

export default class Radio extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    style: {},
    onClick: () => {},
  }

  handleClick = () => {
    this.props.onClick()
  }

  render() {
    const { children, className, inputClassName, style, disabled, checked } = this.props

    const classes = classNames('flex flex-row justify-start items-center w-fit pointer', {
      [disabledStyle]: disabled,
      [inactiveStyle]: !checked,
      [className]: className,
    })

    const inputClasses = classNames('absolute absolute--fill center bg-black', {
      [inputClassName]: inputClassName,
    })

    const props = omit(this.props, Object.keys(Radio.propTypes))

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div
          className="relative"
          style={{
            width: 18,
            height: 18,
          }}>
          <input
            {...props}
            className={`${inputClasses} input-reset ba br-100 bw1 outline-transparent pointer`}
            type="radio"
            checked={checked}
            readOnly
            style={{
              width: 18,
              height: 18,
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
        {children && <label className="ml2 pointer">{children}</label>}
      </div>
    )
  }
}
