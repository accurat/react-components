import * as React from 'react'
import classNames from 'classnames'
import Scrollbars from 'react-custom-scrollbars'
import { omit } from 'lodash'
import { InputDefaultProps } from '../../commons/interfaces'

export interface DropDownParams {
  style: object
}

export interface SelectProps {
  children?: React.ReactElement
  className?: string
  childrenClassName?: string
  style?: object
  label?: string
  scrollable?: boolean
  dark?: boolean
  open?: boolean
  disabled?: boolean
  autoclose?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const DropdownSvg = ({ style }: DropDownParams): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4" style={style}>
    <polygon points="0 0 8 0 4 4 0 0" fill="inherit" />
  </svg>
)

export class Select extends React.Component<SelectProps> {
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

  static defaultProps = {
    ...InputDefaultProps,
    autoclose: true,
    childrenClassName: '',
    scrollable: false,
  }
  state = { open: this.props.open }
  container: HTMLDivElement = null

  setClose = (): void => this.setState({ open: false })
  setOpen = (): void => this.setState({ open: true })
  toogleOpen = (): void => this.setState({ open: !this.state.open })

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.toogleOpen()
    this.props.onClick(event)
  }

  handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      !(event.target instanceof Element) || // https://stackoverflow.com/a/50326668
      this.container.contains(event.target)
    ) {
      return
    }
    this.setClose()
  }

  render() {
    const {
      children,
      className,
      childrenClassName,
      style,
      label,
      scrollable,
      autoclose,
      disabled,
    } = this.props

    const { open } = this.state
    const classes = classNames(className, 'flex justify-between items-center', {
      'o-40 pointer-events-none': disabled,
    })

    const childrenClasses = classNames(childrenClassName, 'absolute z-5 shadow-4', {
      dn: !open,
      'w-100': scrollable,
      h5: open && scrollable,
    })

    const props = omit(this.props, Object.keys(Select.defaultProps))

    return (
      <div
        {...props}
        ref={el => {
          this.container = el
        }}
        className={`${className} relative`}
        style={style}
      >
        <div
          onClick={this.handleClick}
          className={`${classes} ba`}
          style={{
            borderColor: 'currentColor',
            boxSizing: 'content-box',
          }}
        >
          <span>{label}</span>
          <div className={`mr1 ${open ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: 'currentColor' }} />
          </div>
        </div>
        <div className={childrenClasses} style={{ backgroundColor: 'inherit' }}>
          {scrollable ? (
            <Scrollbars className="h-100">
              {React.Children.map(
                children,
                (child: React.ReactChild, i: number): JSX.Element => {
                  return (
                    <div key={i} onClick={autoclose ? this.setClose : null}>
                      {child}
                    </div>
                  )
                },
              )}
            </Scrollbars>
          ) : (
            React.Children.map(
              children,
              (child: React.ReactChild, i: number): JSX.Element => {
                return (
                  <div key={i} onClick={autoclose ? this.setClose : null}>
                    {child}
                  </div>
                )
              },
            )
          )}
        </div>
      </div>
    )
  }
}
