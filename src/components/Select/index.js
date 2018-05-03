import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'
import { omit } from 'lodash'

const disabledStyle = 'o-50 pointer-events-none'

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
  }

  static defaultProps = {
    className: '',
    childrenClassName: '',
    style: {},
    autoclose: true,
    onClick: () => {},
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

  handleClick = event => {
    const { open } = this.state
    const { autoclose } = this.props

    if (!open) {
      this.setOpen()
    } else if (autoclose) {
      this.setClose()
    } else {
      this.props.onClick(event)
    }
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
      disabled,
    } = this.props
    const { open } = this.state

    const classes = classNames('flex justify-between items-center pa2 ba b--black br1 pointer', {
      [disabledStyle]: disabled,
      [className]: className,
    })

    const childrenClasses = classNames('absolute z-5 shadow-4 w-100 bg-white', {
      h5: open && scrollable,
      h0: !open,
      [childrenClassName]: childrenClassName,
    })

    const props = omit(this.props, Object.keys(Select.propTypes))

    return (
      <div
        {...props}
        ref={el => { this.container = el }}
        className="relative"
      >

        <div onClick={this.handleClick} className={classes} style={style}>
          <span>{label}</span>
          <div className={`ml3 ${open ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: dark ? 'white' : 'black' }} />
          </div>
        </div>

        <div className={childrenClasses}>
          {scrollable ? (
            <Scrollbars className="h-100">
              {children.map((child, i) => (
                <div key={i} onClick={this.handleClick}>
                  {child}
                </div>
              ))}
            </Scrollbars>
          ) : (
            open &&
            children.map((child, i) => (
              <div key={i} onClick={this.handleClick}>
                {child}
              </div>
            ))
          )}
        </div>
      </div>
    )
  }
}
