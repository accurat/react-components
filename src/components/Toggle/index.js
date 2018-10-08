import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'

export default class Toggle extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    style: {},
    onChange: () => {},
  }

  handleChange = event => {
    this.props.onChange(event.currentTarget.checked)
  }

  render() {
    const { children, className, inputClassName, style, checked, disabled } = this.props

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
            onChange={this.handleChange}
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
}
