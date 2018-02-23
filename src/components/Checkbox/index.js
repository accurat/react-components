import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const disabledStyle = 'o-30 pointer-events-none'
const inactiveStyle = 'o-50'

const CheckSvg = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.25 18.58"
    className={className}
    style={style}>
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
    const { children, className, inputClassName, style, light, disabled } = this.props
    const { checked } = this.state

    const classes = classNames('flex flex-row justify-start items-center w-fit pointer', {
      [disabledStyle]: disabled,
      [inactiveStyle]: !checked,
      [className]: className,
    })

    const inputClasses = classNames(
      'absolute absolute--fill center input-reset ba bw1 b--black pointer',
      {
        'bg-black': checked,
        [inputClassName]: inputClassName,
      }
    )

    return (
      <div style={style} className={classes} onClick={this.handleChange}>
        <div
          className="relative"
          style={{
            width: 18,
            height: 18,
          }}>
          <input
            className={inputClasses}
            type="checkbox"
            checked={checked}
            readOnly
            style={{
              width: 18,
              height: 18,
              backgroundColor: checked || 'transparent',
            }}
          />
          {checked && (
            <CheckSvg
              className="absolute absolute--fill center m-auto"
              style={{ width: 10, height: 10, fill: light ? 'black' : 'white' }}
            />
          )}
        </div>
        {children && <label className="ml2 pointer">{children}</label>}
      </div>
    )
  }
}
