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

  state = {
    checked: this.props.checked,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked })
    }
  }

  handleChange = () => {
    const value = !this.state.checked
    this.setState({ checked: value })
    this.props.onChange(value)
  }

  render() {
    const { children, className, inputClassName, style, disabled } = this.props
    const { checked } = this.state

    const classes = classNames('flex flex-row justify-start items-center w-fit pointer', {
      [disabledStyle]: disabled,
      [inactiveStyle]: !checked,
      [className]: className,
    })

    const inputClasses = classNames('relative br4 bg-black', {
      [inputClassName]: inputClassName,
    })

    return (
      <div style={style} className={classes} onClick={this.handleChange}>
        <div
          className={inputClasses}
          style={{
            width: 38,
            minWidth: 38,
            height: 20,
            minHeight: 20,
          }}
        >
          <div
            className="absolute center-vertical bg-white br-100 top-0 bottom-0"
            style={{
              width: 16,
              height: 16,
              transition: 'left 0.2s',
              left: checked ? 20 : 2,
            }}
          />
        </div>
        {children && <label className="ml2 pointer">{children}</label>}
      </div>
    )
  }
}
