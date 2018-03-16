import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars'

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick = event => {
    this.setState({ open: !this.state.open })
    this.props.onClick()
  }

  closePanel = () => {
    if (this.props.autoclose) {
      this.setState({ open: !this.state.open })
    }
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

    return (
      <div className="relative">
        <div onClick={this.handleClick} className={classes} style={style}>
          <div>{label}</div>
          <div className={`ml3 ${open ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: dark ? 'white' : 'black' }} />
          </div>
        </div>
        <div className={childrenClasses}>
          {scrollable ? (
            <Scrollbars className="h-100">
              {children.map((child, i) => (
                <div key={i} onClick={this.closePanel}>
                  {child}
                </div>
              ))}
            </Scrollbars>
          ) : (
            open &&
            children.map((child, i) => (
              <div key={i} onClick={this.closePanel}>
                {child}
              </div>
            ))
          )}
        </div>
      </div>
    )
  }
}
