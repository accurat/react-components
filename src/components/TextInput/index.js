import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'

export default class TextInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf([
      'text',
      'email',
      'password',
      'number',
      'tel',
      'time',
      'date',
      'datetime-local',
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    checkValidity: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    style: {},
    type: 'text',
    onChange: () => {},
    checkValidity: () => {},
  }

  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
    this.props.checkValidity(event.target.checkValidity())
  }

  render() {
    const { className, style, type, value, defaultValue, disabled } = this.props

    const classes = classNames('pa2 ba b--black br1 input-reset outline-transparent', {
      [disabledStyle]: disabled,
      [className]: className,
    })

    const props = omit(this.props, Object.keys(TextInput.propTypes))

    return (
      <input
        {...props}
        className={classes}
        style={{ ...style, font: 'inherit' }}
        type={type}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={this.handleChange}
      />
    )
  }
}
