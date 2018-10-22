import classNames from 'classnames'
import * as React from 'react'
import { InputDefaultProps } from '../../commons/interfaces'
const { Scrollbars } = require('react-custom-scrollbars')
const { omit } = require('lodash')

const disabledStyle = 'o-50 pointer-events-none'
const defaultStyle = 'b--black br1'
const defaultChildrenStyle = 'shadow-4 bg-white'

export interface DropDownParams {
  style: object
}

export interface SelectProps {
  children?: React.ReactNode
  className?: string
  childrenClassName?: string
  style?: object
  label?: string
  scrollable?: boolean
  dark?: boolean
  open?: boolean
  disabled?: boolean
  autoclose?: boolean
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
  reset?: boolean
}

const DropdownSvg = ({ style }: DropDownParams): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 4' style={style}>
    <polygon points='0 0 8 0 4 4 0 0' fill='inherit' />
  </svg>
)

export default class Select extends React.Component<SelectProps> {
  public componentDidMount() {
    document.body.addEventListener('mouseup', this.handleOutsideClick, {
      passive: true,
    })
    document.body.addEventListener('touchend', this.handleOutsideClick, {
      passive: true,
    })
  }

  public componentWillUnmount() {
    document.body.removeEventListener('mouseup', this.handleOutsideClick)
    document.body.removeEventListener('touchend', this.handleOutsideClick)
  }

  public static defaultProps = { ...InputDefaultProps, autoclose: true }
  public state = { open: this.props.open }
  public container: HTMLDivElement = null

  private setClose = (): void => this.setState({ open: false })
  private setOpen = (): void => this.setState({ open: true })
  private toogleOpen = (): void => this.setState({ open: !this.state.open })

  private handleClick = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.toogleOpen()
    this.props.onClick(event)
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (
      !(event.target instanceof Element) || // https://stackoverflow.com/a/50326668
      this.container.contains(event.target)
    )
      return
    this.setClose()
  }

  public render() {
    const {
      children,
      className,
      childrenClassName,
      style,
      label,
      scrollable,
      autoclose,
      disabled,
      reset,
    } = this.props

    const { open } = this.state
    const classes = classNames(className, 'flex justify-between items-center pointer pa2 ba', {
      [disabledStyle]: disabled,
      [defaultStyle]: !reset,
    })

    const childrenClasses = classNames(childrenClassName, 'absolute z-5', {
      "dn": !open,
      'w-100': scrollable,
      "h5": open && scrollable,
      [defaultChildrenStyle]: !reset,
    })

    const props = omit(this.props, Object.keys(Select.defaultProps))

    return (
      <div
        {...props}
        ref={el => {
          this.container = el
        }}
        className='relative'
      >
        <div onClick={this.handleClick} className={classes} style={style}>
          <span>{label}</span>
          <div className={`ml3 ${open ? 'rotate-180' : ''}`}>
            <DropdownSvg style={{ width: 10, height: 10, fill: 'currentColor' }} />
          </div>
        </div>
        <div className={childrenClasses}>
          {scrollable ? (
            <Scrollbars className='h-100'>
              {React.Children.map(
                children,
                (child: React.ReactChild, i: number): JSX.Element => (
                  <div key={i} onClick={autoclose ? this.setClose : null} />
                ),
              )}
            </Scrollbars>
          ) : (
            React.Children.map(
              children,
              (child: React.ReactChild, i: number): JSX.Element => (
                <div key={i} onClick={autoclose ? this.setClose : null}>
                  {child}
                </div>
              ),
            )
          )}
        </div>
      </div>
    )
  }
}
