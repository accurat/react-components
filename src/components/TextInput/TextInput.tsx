import * as React from 'react'
import classNames from 'classnames'

const { omit } = require('lodash')

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black black bg-white'

interface TextInputProps {
  className?: string
  style?: object
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'date' | 'datetime-local'
  value?: string | number
  defaultValue?: string | number
  disabled?: boolean
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
  checkValidity?: (cond: boolean) => boolean
  reset?: boolean
}

export default class TextInput extends React.Component<TextInputProps> {
  static defaultProps = {
    className: '',
    style: {},
    type: 'text',
    onChange: () => {},
    checkValidity: () => {},
    reset: false,
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event)
    this.props.checkValidity(event.target.checkValidity())
  }

  render() {
    const { className, style, type, value, defaultValue, disabled, reset } = this.props
    const classes = classNames(className, 'pa2 ba input-reset outline-transparent', {
      [disabledStyle]: disabled,
      [defaultStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(TextInput.defaultProps))

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
