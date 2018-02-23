import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const disabledStyle = 'o-50 pointer-events-none'

export default class TextInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['text', 'email', 'tel', 'number', 'password']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    checkValidity: PropTypes.func,
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    style: {},
    type: 'text',
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
    checkValidity: () => {},
  }

  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
    this.props.checkValidity(event.target.checkValidity())
  }

  render() {
    const {
      className,
      style,
      type,
      value,
      defaultValue,
      disabled,
      placeholder,
      onBlur,
      onFocus,
      autoFocus,
      readOnly,
    } = this.props

    const classes = classNames('pa2 ba b--black input-reset outline-transparent', {
      [disabledStyle]: disabled,
      [className]: className,
    })

    return (
      <input
        className={classes}
        style={{ ...style, font: 'inherit' }}
        type={type}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={this.handleChange}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />
    )
  }
}
