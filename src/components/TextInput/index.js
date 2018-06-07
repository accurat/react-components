import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black black bg-white'

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
    reset: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    style: {},
    type: 'text',
    onChange: () => {},
    checkValidity: () => {},
    reset: false,
  }

  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
    this.props.checkValidity(event.target.checkValidity())
  }

  render() {
    const { className, style, type, value, defaultValue, disabled, reset } = this.props

    const classes = classNames(className, 'pa2 ba input-reset outline-transparent', {
      [disabledStyle]: disabled,
      [defaultStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(TextInput.propTypes))

    return (
      <input
        {...props}
        className={classes}
        // fontFamily: inherit is an issue with normalize.css,
        // it sets `font-family: sans-serif;` to every input/button
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
