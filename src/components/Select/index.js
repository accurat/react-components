import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'
import { omit } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black bg-white br1'
const darkStyle = 'b--black bg-black white br1'
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
  }

  componentDidMount() {
    document.body.addEventListener('mouseup', this.handleOutsideClick, { passive: true })
    document.body.addEventListener('touchend', this.handleOutsideClick, { passive: true })
  }

  componentWillUnmount() {
    document.body.removeEventListener('mouseup', this.handleOutsideClick)
    document.body.removeEventListener('touchend', this.handleOutsideClick)
  }

  container = null

  setOpen = () => this.setState({ open: true })

  setClose = () => this.setState({ open: false })

  toggleOpen = () => this.setState({ open: !this.state.open })

  handleClick = event => {
    this.toggleOpen()
    this.props.onClick(event)
  }

  handleOutsideClick = event => {
    if (this.container.contains(event.target)) return
    this.setClose(event)
  }

  render() {
    const {
      children,
      className,
      childrenClassName,
      style,
      label,
      scrollable,
      dark,
      autoclose,
      disabled,
      reset,
    } = this.props
    const { open } = this.state

    const classes = classNames(className, 'flex justify-between items-center pointer pa2 ba', {
      [disabledStyle]: disabled,
      [defaultStyle]: !dark && !reset,
      [darkStyle]: dark && !reset,
    })

    const childrenClasses = classNames(childrenClassName, 'absolute z-5', {
      'w-100': scrollable,
      h5: open && scrollable,
      [defaultChildrenStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(Select.propTypes))

    return (
      <div
        {...props}
        ref={el => {
          this.container = el
        }}
        className="relative"
      >
        <div onClick={this.handleClick} className={classes} style={style}>
          <span>{label}</span>
          <div className={`ml3 ${open ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: dark ? 'white' : 'black' }} />
          </div>
        </div>
        {open && (
          <div className={childrenClasses}>
            {scrollable ? (
              <Scrollbars className="h-100">
                {children.map((child, i) => (
                  <div key={i} onClick={autoclose ? this.setClose : null}>
                    {child}
                  </div>
                ))}
              </Scrollbars>
            ) : (
              children.map((child, i) => (
                <div key={i} onClick={autoclose ? this.setClose : null}>
                  {child}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    )
  }
}
