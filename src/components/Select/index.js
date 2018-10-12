import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'
import { omit, get } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black br1'
const defaultChildrenStyle = 'shadow-4 bg-white'

const DropdownSvg = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4" style={style}>
    <polygon points="0 0 8 0 4 4 0 0" fill="inherit" />
  </svg>
)

export default class Select extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    childrenClassName: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.string,
    scrollable: PropTypes.bool,
    dark: PropTypes.bool,
    open: PropTypes.bool,
    disabled: PropTypes.bool,
    autoclose: PropTypes.bool,
    onClick: PropTypes.func,
    reset: PropTypes.bool,
    filterable: PropTypes.bool,
    filterableValue: PropTypes.string,
    filterableProp: PropTypes.string,
    onFilterInput: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    childrenClassName: '',
    style: {},
    autoclose: true,
    onClick: () => {},
    reset: false,
  }

  state = {
    open: this.props.open,
    textInput: this.props.label,
    textInputClicked: false,
    textInputFocus: false,
  }

  componentDidMount() {
    document.body.addEventListener('mouseup', this.handleOutsideClick, {
      passive: true,
    })
    document.body.addEventListener('touchend', this.handleOutsideClick, {
      passive: true,
    })
  }

  componentWillUnmount() {
    document.body.removeEventListener('mouseup', this.handleOutsideClick)
    document.body.removeEventListener('touchend', this.handleOutsideClick)
  }

  container = null

  setOpen = () => this.setState({ open: true })

  setClose = () => this.setState({ open: false })

  toggleOpen = () => this.setState({ open: !this.state.open })

  shouldHideChild = child => {
    // if (child.ugly) return true
    const { filterableProp, filterable, onFilterInput } = this.props
    if (!filterable || onFilterInput !== undefined) return false
    const { textInput } = this.state
    const childValue = get(child, `props.${filterableProp}`) || get(child, 'props.filterableValue')
    if (childValue === undefined) return true
    return !childValue.toLowerCase().includes(textInput.toLowerCase())
  }

  handleClick = event => {
    this.toggleOpen()
    this.props.onClick(event)
  }

  handleInput = event => {
    const { value } = event.target
    const { onFilterInput } = this.props
    const callback = () => onFilterInput && onFilterInput(value)
    this.setState({ textInput: value }, callback)
  }

  handleOutsideClick = event => {
    if (this.container.contains(event.target)) return
    this.setClose(event)
  }

  renderChildren = () => {
    const { children, autoclose } = this.props
    return React.Children.map(children, (child, i) => {
      if (this.shouldHideChild(child)) return null
      return (
        <div key={i} onClick={autoclose ? this.setClose : null}>
          {child}
        </div>
      )
    })
  }

  handleFocus = () => {
    const newState = this.state.textInputClicked
      ? { textInputFocus: true }
      : { textInputFocus: true, textInput: '', textInputClicked: true }
    this.setState(newState)
  }

  handleBlur = () => {
    const { textInput } = this.state
    const newState =
      textInput.length === 0
        ? { textInputClicked: false, textInput: this.props.label, textInputFocus: false }
        : { textInputFocus: false }
    this.setState(newState)
  }

  render() {
    const {
      className,
      childrenClassName,
      style,
      label,
      scrollable,
      disabled,
      reset,
      filterable,
    } = this.props
    const { open, textInput, textInputFocus } = this.state

    const listOpen = textInputFocus || open

    const classes = classNames(className, 'flex justify-between items-center pointer pa2 ba', {
      [disabledStyle]: disabled,
      [defaultStyle]: !reset,
    })

    const childrenClasses = classNames(childrenClassName, 'absolute z-5', {
      dn: !listOpen,
      'w-100': scrollable,
      h5: listOpen && scrollable,
      [defaultChildrenStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(Select.propTypes))

    const title = filterable ? (
      <input
        type="text"
        className="w-80 bn"
        value={textInput}
        onChange={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    ) : (
      <span>{label}</span>
    )

    return (
      <div
        {...props}
        ref={el => {
          this.container = el
        }}
        className="relative"
      >
        <div onClick={this.handleClick} className={classes} style={style}>
          {title}
          <div className={`ml3 ${listOpen ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: 'currentColor' }} />
          </div>
        </div>
        <div className={childrenClasses}>
          {scrollable ? (
            <Scrollbars className="h-100">{this.renderChildren()}</Scrollbars>
          ) : (
            this.renderChildren()
          )}
        </div>
      </div>
    )
  }
}
